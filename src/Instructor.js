import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Instructor extends React.Component {

  render() {
    return (
      <div className="Instructor">
        <h1>Cool App</h1>
        <br />
        <SlideCarousel interval="5000" />
      </div>
    );
  }
}

class SlideCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Carousel interval={this.props.interval}>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/vectors/general-formula-of-amino-acids-which-are-building-blocks-of-proteins-vector-id901981378?k=6&m=901981378&s=612x612&w=0&h=s---al3XGRdMldPhURztmGLbKvTRT1NLAZk9jiaAv78="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.pinclipart.com/picdir/middle/53-531693_essential-amino-acid-amine-chemistry-monomers-that-combine.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.pinclipart.com/picdir/middle/97-975390_big-image-amino-acids-biochemistry-and-applications-clipart.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Instructor;
