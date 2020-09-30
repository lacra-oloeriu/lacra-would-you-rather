import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import QuestionBar  from './QuestionBar'
import QuestionNav from './QuestionNav'
import QuestionPreviewContainer from './QuestionPreviewContainer'
import { Grid } from 'react-redux'


//All my components 
//App
//NavBar
//QuestionContainet
//QuestionTab
//QuestionPreview
//AnsewerQuestion
//PersonalContainer
//LoginScreen
//QuestionNav


class App extends Component {
  componentDidMount() {
    this.props.handleInitialData()
  }
  render() {
    //const { authedUser } = this.props
    return (

      <Container >
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >
          <Navbar.Brand href="/">Would-You-Rather</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="/login">login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <QuestionBar/>
        <QuestionNav/>
        <div>
          {this.props.loading === true
            ? null
            : <QuestionPreviewContainer />
          }
        </div>
      </Container>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}


export default connect(
  mapStateToProps,
  { handleInitialData }
)(App);

//export default App