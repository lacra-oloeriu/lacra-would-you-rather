import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { CardText } from 'react-bootstrap/Card';

class QuestionPreview {
    render() {
        return (

            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>
                        Title
                    </Card.Title>
                    <Card.Text>
                        Text Below
                </Card.Text>
                    <Button variant="primary">Go some where</Button>
                </Card.Body>
            </Card>

        )
    }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id]
  
    return {
      authedUser,
      question,
    }
  }
  
  export default connect(mapStateToProps)(QuestionPreview)