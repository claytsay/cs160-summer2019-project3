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

    // 
  }

  render() {
    // Figure out in what order the elements should be rendered
    let first, second;
    switch (this.version) {
      case 0:
        first = <QuestionEntry />;
        second = <b>WESUTOESUEOUESOUDOEU</b>;
        break;
      case 1:
        first = <b>WESUTOESUEOUESOUDOEU</b>;
        second = <QuestionEntry />;
        break;
      default:
        console.error(`Invalid version number: ${this.version}`);
        break;
    }

    return (
      <div className="Student">
        This is the student portion of the app. Insert question-asking mechanics here.
        {first} {second}
        <QuestionCard />
      </div>
    );
  }
}

class QuestionEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: "",
      questions: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ question: event.target.value });
  }

  handleSubmit(event) {
    alert("Your question has been submitted.");
    event.preventDefault();
  }

  render() {
    return (
      <div className="QuestionEntry">
        <form id={"question-form"} onSubmit={this.handleSubmit}>
          <input
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

class QuestionCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="QuestionCard">
        <div className="card bg-light mb-3 text-left">
          <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button float-right" className="btn btn-primary">➕</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
