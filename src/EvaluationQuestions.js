import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import './App.css';
import Register from './Register'
import Onboarding from './Onboarding'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {H2E} from './Styled'

class EvaluationQuestions extends React.Component {
  constructor() {
    super()
    this.state = {
      q1Type: "",
      q1Title: "",
      q1Answers: [],
      q1Correct: "",
      q2Type: "",
      q2Title: "",
      q2Answers: [],
      q2Correct: "",
      q3Type: "",
      q3Title: "",
      q3Answers: [],
      q3Correct: "",
      q4Type: "",
      q4Title: "",
      q4Answers: [],
      q4Correct: "",
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  componentDidMount() {
    if(this.props.questions) this.prefillState(this.props.questions);
  }
  prefillState(questions) {
    console.log('prefillState', questions)
    const newState = questions.reduce((acc, curr, i) => ({
      ...acc,
      [`q${i + 1}Type`]: curr.type,
      [`q${i + 1}Title`]: curr.title,
      [`q${i + 1}Answers`]: curr.answers,
      [`q${i + 1}Correct`]: curr.answer}),
    {})
    this.setState(newState, () => console.log(this.state));
  }
  q1Type = (type) => {
    // this.setState({q1Type:  type})
    this.setState({ q1Type: type })
  }

  q2Type = (type) => {
    // this.setState({q2Type:  type})
    this.setState({ q2Type: type })
  }
  q3Type = (type) => {
    // this.setState({q3Type:  type})
    this.setState({ q3Type: type })
  }
  q4Type = (type) => {
    // this.setState({q4Type:  type})
    this.setState({ q4Type: type })
  }
  setAnswers = (event, idx, q) => {
    let answers = [...this.state[q]];
    answers[idx] = event.target.value;
    this.setState({ [q]: answers })
  }

  submitEvaluation = (event) => {
    event.preventDefault();
    const questions = this.state;
    this.props.submitEvaluation([
        {
        title: questions.q1Title,
        answers: questions.q1Answers,
        type: questions.q1Type,
        answer: questions.q1Correct
    },
    {
        title: questions.q2Title,
        answers: questions.q2Answers,
        type: questions.q2Type,
        answer: questions.q2Correct
    },
    {
        title: questions.q3Title,
        answers: questions.q3Answers,
        type: questions.q3Type,
        answer: questions.q3Correct
    },
    {
        title: questions.q4Title,
        answers: questions.q4Answers,
        type: questions.q4Type,
        answer: questions.q4Correct
    }
    ]);
  }

  renderQuestion1 = () => {
    if (this.state.q1Type === "bool") {
      return (
        <div>
          <div>Question 1 True or False</div>
          <input required type="text" value={this.state.q1Title} onChange={(event) => this.setState({ q1Title: event.target.value })} />
          <div>Expected answer</div>
          <select required value={this.state.q1Correct} onChange={(event) => this.setState({ q1Correct: event.target.value })}>
            <option value="">--Select One--</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </div>
      )
    }
    else if (this.state.q1Type === "multiple") {
      return (
        <div>
          <div>Question 1 Multiple Choice</div>
          <input required type="text" value={this.state.q1Title} onChange={(event) => this.setState({q1Title:  event.target.value })} />
          <div>Possible Answers</div>
          <input required type="text" name="q11" value={this.state.q1Answers[0]} onChange={(event) => this.setAnswers(event, 0, "q1Answers")}/><input required type="radio" value="0" name="q1" onChange={(event) => this.setState({q1Correct:  event.target.value})}/>
          <input required type="text" name="q11" value={this.state.q1Answers[1]} onChange={(event) => this.setAnswers(event, 1, "q1Answers")}/><input required type="radio" value="1" name="q1" onChange={(event) => this.setState({q1Correct:  event.target.value})}/>
          <input required type="text" name="q11" value={this.state.q1Answers[2]} onChange={(event) => this.setAnswers(event, 2, "q1Answers")}/><input required type="radio" value="2" name="q1" onChange={(event) => this.setState({q1Correct:  event.target.value})}/>
          <input type="text" name="q11" value={this.state.q1Answers[3]} onChange={(event) => this.setAnswers(event, 3, "q1Answers")}/><input required type="radio" value="3" name="q1" onChange={(event) => this.setState({q1Correct:  event.target.value})}/>
        </div>)
    }
    return null
  }

  renderQuestion2 = () => {
    if (this.state.q2Type === "bool") {
      return (
        <div>
          <div>Question 2 True or False</div>
          <input required type="text" value={this.state.q2Title} onChange={(event) => this.setState({q2Title:  event.target.value})} />
          <div>Expected answer</div>
          <select required value={this.state.q2Correct} onChange={(event) => this.setState({q2Correct:  event.target.value })}>
            <option value="">--Select One--</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </div>
      )
    }
    else if (this.state.q2Type === "multiple") {
      return (
        <div>
          <div>Question 2 Multiple Choice</div>
          <input required type="text" value={this.state.q2Title} onChange={(event) => this.setState({q2Title:  event.target.value })} />
          <div>Possible Answers</div>
          <input required value={this.state.q2Answers[0]} onChange={(event) => this.setAnswers(event, 0, "q2Answers")} type="text"/><input required type="radio" value="2" name="q2" onChange={(event) => this.setState({q2Correct:  event.target.value})}/>
          <input required value={this.state.q2Answers[1]} onChange={(event) => this.setAnswers(event, 1, "q2Answers")} type="text"/><input required type="radio" value="2" name="q2" onChange={(event) => this.setState({q2Correct:  event.target.value})}/>
          <input required value={this.state.q2Answers[2]} onChange={(event) => this.setAnswers(event, 2, "q2Answers")} type="text"/><input required type="radio" value="2" name="q2" onChange={(event) => this.setState({q2Correct:  event.target.value})}/>
          <input value={this.state.q2Answers[3]} onChange={(event) => this.setAnswers(event, 3, "q2Answers")} type="text"/><input required type="radio" value="2" name="q2" onChange={(event) => this.setState({q2Correct:  event.target.value})}/>
          
        </div>)
    }
    return null
  }

  renderQuestion3 = () => {
    if (this.state.q3Type === "bool") {
      return (
        <div>
          <div>Question 3 True or False</div>
          <input required type="text" value={this.state.q3Title} onChange={(event) => this.setState({q3Title:  event.target.value })} />
          <div>Expected answer</div>
          <select required value={this.state.q3Correct} onChange={(event) => this.setState({q3Correct:  event.target.value })}>
            <option value="">--Select One--</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </div>
      )
    }
    else if (this.state.q3Type === "multiple") {
      return (
        <div>
          <div>Question 3 Multiple Choice</div>
          <input required type="text" value={this.state.q3Title} onChange={(event) => this.setState({q3Title:  event.target.value})} />
          <div>Possible Answers</div>
          <input required value={this.state.q3Answers[0]} onChange={(event) => this.setAnswers(event, 0, "q3Answers")} type="text"/><input required type="radio" value="3" name="q3" onChange={(event) => this.setState({q3Correct:  event.target.value})}/>
          <input required value={this.state.q3Answers[1]} onChange={(event) => this.setAnswers(event, 1, "q3Answers")} type="text"/><input required type="radio" value="3" name="q3" onChange={(event) => this.setState({q3Correct:  event.target.value})}/>
          <input required value={this.state.q3Answers[2]} onChange={(event) => this.setAnswers(event, 2, "q3Answers")} type="text"/><input required type="radio" value="3" name="q3" onChange={(event) => this.setState({q3Correct:  event.target.value})}/>
          <input value={this.state.q3Answers[3]} onChange={(event) => this.setAnswers(event, 3, "q3Answers")} type="text"/><input required type="radio" value="3" name="q3" onChange={(event) => this.setState({q3Correct:  event.target.value})}/>
          
        </div>)
    }
    return null
  }

  renderQuestion4 = () => {
    if (this.state.q4Type === "bool") {
      return (
        <div>
          <div>Question 4 True or False</div>
          <input required type="text" value={this.state.q4Title} onChange={(event) => this.setState({q4Title:  event.target.value })} />
          <div>Expected answer</div>
          <select required value={this.state.q4Correct} onChange={(event) => this.setState({q4Correct:  event.target.value })}>
            <option value="">--Select One--</option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </div>
      )
    }
    else if (this.state.q4Type === "multiple") {
      return (
        <div>
          <div>Question 4 Multiple Choice</div>
          <input required type="text" value={this.state.q4Title} onChange={(event) => this.setState({q4Title:  event.target.value})} />
          <div>Possible Answers</div>
          <input required value={this.state.q4Answers[0]} onChange={(event) => this.setAnswers(event, 0, "q4Answers")} type="text"/><input required type="radio" value="4" name="q4" onChange={(event) => this.setState({q4Correct:  event.target.value})}/>
          <input required value={this.state.q4Answers[1]} onChange={(event) => this.setAnswers(event, 1, "q4Answers")} type="text"/><input required type="radio" value="4" name="q4" onChange={(event) => this.setState({q4Correct:  event.target.value})}/>
          <input required value={this.state.q4Answers[2]} onChange={(event) => this.setAnswers(event, 2, "q4Answers")} type="text"/><input required type="radio" value="4" name="q4" onChange={(event) => this.setState({q4Correct:  event.target.value})}/>
          <input value={this.state.q4Answers[3]} onChange={(event) => this.setAnswers(event, 3, "q4Answers")} type="text"/><input required type="radio" value="4" name="q4" onChange={(event) => this.setState({q4Correct:  event.target.value})}/>
          
        </div>)
    }
    return null
  }

  render() {
    console.log(this.props)
    return (
      <div className="evalWrapper">
        <form className="Submit" onSubmit={this.submitEvaluation}>
          <H2E>Evaluation Questions</H2E>
          <fieldset style={{textAlign:"center", borderBottom:""}}>
            <h4>Question 1</h4>
            <div className="answersWrapper">
              <input required type="radio" name="question1" id="bool1" checked={this.state.q1Type === 'bool'} onChange={() => this.q1Type('bool')} /><label for="bool1">True Or False</label><br />
              <input required type="radio" name="question1" id="multipleChoice1" checked={this.state.q1Type === 'multiple'} onChange={() => this.q1Type('multiple')} /><label for="multipleChoice1">Multiple Choice</label><br />
              {this.renderQuestion1()}
            </div>
          </fieldset>
          <fieldset style={{textAlign:"center"}}>
            <h4>Question 2</h4>
							<div className="answersWrapper">
            <input required type="radio" name="question2" id="bool2" onChange={() => this.q2Type('bool')} /><label for="bool2">True Or False</label><br />
            <input required type="radio" name="question2" id="multipleChoice2" onChange={() => this.q2Type('multiple')} /><label for="multipleChoice2">Multiple Choice</label><br />
            {this.renderQuestion2()}
						</div>
          </fieldset>
          <fieldset style={{textAlign:"center"}}>
            <h4>Question 3</h4>
							<div className="answersWrapper">
            <input required type="radio" name="question3" id="bool3" onChange={() => this.q3Type('bool')} /><label for="bool3">True Or False</label><br />
            <input required type="radio" name="question3" id="multipleChoice3" onChange={() => this.q3Type('multiple')} /><label for="multipleChoice3">Multiple Choice</label><br />
            {this.renderQuestion3()}
						</div>
          </fieldset>
          <fieldset style={{textAlign:"center"}}>
            <h4>Question 4</h4>
							<div className="answersWrapper">
            <input required type="radio" name="question4" id="bool4" onChange={() => this.q4Type('bool')} /><label for="bool4">True Or False</label><br />
            <input required type="radio" name="question4" id="multipleChoice4" onChange={() => this.q4Type('multiple')} /><label for="multipleChoice4">Multiple Choice</label><br />
            {this.renderQuestion4()}
						</div>
          </fieldset>
          <input  type="submit"/>
        </form>
      </div>


    );
  }
}

export default EvaluationQuestions;