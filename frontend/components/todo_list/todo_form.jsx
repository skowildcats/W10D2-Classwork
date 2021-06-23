import React from 'react';
import uniqueId from '../util';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: true
    }
  };

  handleTitle(e) {
    this.setState({title: e.target.value});
  }

  handleBody(e) {
    this.setState({body: e.target.value});
  }

  handleDone(e) {
    this.setState({done: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = {...this.state, id:uniqueId()}
    this.props.receiveTodo(todo);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="title">title</label>
        <input id="title" type="text" onChange={this.handleTitle.bind(this)}/><br/>

        <label htmlFor="body">body</label>
        <input id="body" type="text" onChange={this.handleBody.bind(this)}/><br/>

        <div>done:</div>
        <label htmlFor="done-true">true</label>
        <input id="done-true" name="done" type="radio" value="true" onChange={this.handleDone.bind(this)}/>
        <label htmlFor="done-false">false</label>
        <input id="done-false" name="done" type="radio" value="false" onChange={this.handleDone.bind(this)}/>

        <button>save</button>
      </form>
    );
  };
};