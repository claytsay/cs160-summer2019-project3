import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Instructor extends React.Component {

  constructor(props) {
    super(props);
    
    // Set up the WebSocket connection
    this.socket = new WebSocket("wss://p3-websockets-claytsay-claytsay.codeanyapp.com/ws/draw");
    this.socket.onmessage = function (message) {
      let data = JSON.parse(message.data);
      if (data.isNewQuestion) {
        console.log(`${Date.now()}: Question asked: "${data.question}"`);
      } else {
        console.log(`${Date.now()}: Question upvoted: "${data.question}"`)
      }
    };
  }

  // <SlideCarousel interval="5000" />
  render() {
    return (
      <div className="Instructor">
        <h1>Lequture</h1>
        <br />
        <SlideCarousel />
      </div>
    );
  }
}

class SlideCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.slides = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"];
  }
  /* <Carousel>
        {this.slides.map((value, index) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ `{ require('./slides/slide-${index}.jpg') }` }
                alt={`"${value} slide"`}
              />
            </Carousel.Item>
          );
        })}
      </Carousel> */

  render() {
    // interval={this.props.interval}
    return (
      <Carousel interval={ null }>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./slides/slide-1.jpg') }
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./slides/slide-2.jpg') }
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./slides/slide-3.jpg') }
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./slides/slide-4.jpg') }
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./slides/slide-5.jpg') }
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./slides/slide-6.jpg') }
            alt="Sixth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./slides/slide-7.jpg') }
            alt="Seventh slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./slides/slide-8.jpg') }
            alt="Eighth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./slides/slide-9.jpg') }
            alt="Ninth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./slides/slide-10.jpg') }
            alt="Tenth slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Instructor;
