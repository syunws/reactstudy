import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const goals = [
  '1. React 개발에 필요한 환경을 구축한다.',
  '2. 새로운 자바스트림트 문법을 익힌다',
  '3. 개발 편의를 위한 VSCode IDE를 익힌다',
];

const LectureGoalList = props => {
  console.log(props);
  return (
    <div>
      <div>{props.title}</div>
      <ul>
        {props.items.map((item, idx) => <li key={idx}>{item}</li>)}
        {props.items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
