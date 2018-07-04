import React, { Component } from 'react';
import LectureGoalList from './components/LectureGoalList';
import logo from './logo.svg';
import './App.css';
const goals = [
  'React 개발에 필요한 환경을 구축한다.',
  '새로운 자바스트림트 문법을 익힌다',
  '개발 편의를 위한 VSCode IDE를 익힌다',
];

class App extends Component {
  handleClick = e => {
    debugger;
    console.log(this, e);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.handleClick} />
          <h1 className="App-title">React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <LectureGoalList items={goals} title={'강의 목표!'} />
      </div>
    );
  }
}

export default App;
