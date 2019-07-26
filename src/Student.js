import React from 'react';
import queryString from 'query-string';

class Student extends React.Component {

  constructor(props) {
    super(props);

    // Process the query string
    let values = queryString.parse(this.props.location.search);
    this.version = parseInt(values.version);
    console.log(`Using version ${this.version} of the student app`);

    // Get the pre-defined values
    // STUFF

  }

  render() {
    // Figure out in what order the elements should be rendered
    let first, second;
    switch (this.version) {
      case 0:
        first = <QuestionEntry />;
        second = <QuestionDeck />;
        break;
      case 1:
        first = <QuestionDeck />;
        second = <QuestionEntry />;
        break;
      default:
        console.error(`Invalid version number: ${this.version}`);
        break;
    }

    return (
      <div className="Student">
        <div className="container">
          <h1>Lequture</h1>
          <p>The smart way to ask questions during lecture.</p>
          <br />
          {first}
          <br />
          {second}
        </div>
      </div>
    );
  }
}

class QuestionEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Set up the WebSocket connection
    this.socket = new WebSocket("wss://p3-websockets-claytsay-claytsay.codeanyapp.com/ws/draw");

  }

  handleChange(event) {
    this.setState({ question: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.socket.send(JSON.stringify({
      isNewQuestion: true,
      question: this.state.question
    }));
    this.setState({
      question: ""
    });
    alert("Your question has been submitted.");
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="QuestionEntry">
        <h2>Ask a Question</h2>
        <p>Ask a new questions. Your classmates will be able to see and upvote your question.</p>
        <form id={"question-form"} onSubmit={this.handleSubmit}>
          <input
            id="questionFormInput"
            type="text"
            value={this.state.question}
            placeholder={"New question"}
            onChange={this.handleChange}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class QuestionDeck extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [
        "What is a tuning parameter?",
        "How is the gradient (∇) computed?",
        "What is a MSE or MAE?",
        "Is there a way to ensure that gradient descent finds the global minimum?"
      ]
    };

    // Set up the WebSocket connection
    this.socket = new WebSocket("wss://p3-websockets-claytsay-claytsay.codeanyapp.com/ws/draw");
    this.socket.onmessage = (message) => {
      let data = JSON.parse(message.data);
      if (data.isNewQuestion) {
        console.log(`${Date.now()}: New question received: "${data.question}"`);
        this.state.questions.push(data.question);
        this.forceUpdate();
      }
    };

  }

  render() {
    return (
      <div className="QuestionDeck">
        <h2>Upvote a Question</h2>
        <p>By upvoting an existing question, you increase the likehood of it being answered.</p>
        {this.state.questions.map((value, index) => {
          return <QuestionCard question={value} />
        })}
      </div>
    );
  }
}

class QuestionCard extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Set up the WebSocket connection
    this.socket = new WebSocket("wss://p3-websockets-claytsay-claytsay.codeanyapp.com/ws/draw");
  }

  handleSubmit(event) {
    // TODO: Write to WebSocket
    event.preventDefault();
    this.socket.send(JSON.stringify({
      isNewQuestion: false,
      question: this.props.question
    }));
    alert("Your upvote has been submitted.");
    window.scrollTo(0, 0)
  }

  // <h5 className="card-title">Question</h5>
  render() {
    return (
      <div className="QuestionCard">
        <div className="card bg-light mb-3 text-left">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div className="p-2 flex-grow-1"><p className="card-text">{this.props.question}</p></div>
              <div className="p-2 flex-shrink-1">
                <form onSubmit={this.handleSubmit}>
                  <input type="submit" className="btn btn-primary" value="➕" onSubmit={this.handleSubmit} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
