import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionNav from './QuestionNav';
import QuestionPreview from './QuestionPreview';

export class SingIn extends Component {
    render() {
        console.log(this.props)
        /* <div>
        <ul>
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <div>QUESTION ID: {id}</div>
            </li>
          ))}
        </ul>
      </div>*/
    return (
        <div>
        <QuestionNav/>
        </div>
      )
    }
  }

function mapStateToProps({ questions }) {
    return {
        questionIds: Object.keys(questions)
    };
}

export default connect(
    (mapStateToProps)
)(SingIn)