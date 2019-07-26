import React from 'react';
import queryString from 'query-string';

class Student extends React.Component {

  constructor(props) {
    super(props);
    let values = queryString.parse(this.props.location.search);
    this.version = parseInt(values.version);
    console.log(`Using version ${this.version} of the student app`);
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
        
      </div>
    );
  }
}

export default Student;
