import React, { Component } from 'react';
import './App.css';


class BackLog extends Component {

  constructor () {
    super();
    this.state = {
      listItems: [],
    };

    this.addLogItem = this.addLogItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addLogItem (value) {
    this.setState({ listItems: this.state.listItems.concat({text: value})});
  }

  handleDelete (index) {
    this.setState({ listItems: this.state.listItems.filter(function (item, i) {
      return i !== index;
    })});
  }

  render() {
    return (
      <div>
      <LogTitle/>
      {this.state.listItems.map(function(item, i){
        return <LogItem text={item.text} onDelete={this.handleDelete} index={i} key={i}/>;
      }.bind(this))}
      <LogItemInput onEnter={this.addLogItem}/>
      </div>
    );
  }
}

class LogTitle extends Component {
  render() {
    return (
      <div>
      Test Log
      </div>
    );
  }
}

class LogItemInput extends Component {

  constructor (props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown (event) {
    if (event.key === 'Enter') {
      this.props.onEnter(this.state.value);
      this.setState({value: ""});
    }
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
      <input type="text" value={this.state.value} onChange={this.handleChange} onKeyDown={this.onKeyDown}></input>
      </div>
    );
  }
}

class LogItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      done: false,
    }
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
  }

  handleCheckBoxClick(event) {
    console.log("handlecheck");
    console.log(event.target.checked);
    this.setState({done: event.target.checked});
  }

  render() {
    console.log(this.state.done);
    var className = (this.state.done ? "completedItem" : "");
    return (
      <div>
      <CheckBox onClick={this.handleCheckBoxClick}/>
      <span className={className}>
      {this.props.text}
      </span>
      <DeleteIcon onDelete={() => this.props.onDelete(this.state.index)}/>
      </div>
    );
  }
}

class CheckBox extends Component {
  render() {
    return (
      <input type="checkbox" onClick={this.props.onClick}/>
    );
  }
}

class DeleteIcon extends Component {
  render() {
    return (
      <button onClick={this.props.onDelete}>X</button>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BackLog/>
      </div>
    );
  }
}

export default App;
