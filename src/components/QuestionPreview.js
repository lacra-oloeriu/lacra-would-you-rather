import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Button, Card } from 'react-bootstrap';
//import { CardText } from 'react-bootstrap/Card';
import { Row, Col, Image, Card, Button, Container } from 'react-bootstrap'
var placeholder = require('../images/paceholder.svg')


class QuestionPreview extends Component {
  render() {
    return (
      
      <Container>
        <Row>
          Name Sirname askes:
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <Image src={placeholder} roundedCircle />
          </Col>
          <Col  >
            the content of the big column
          </Col>

        </Row>
      </Container>
      )
  }
}

export default QuestionPreview
