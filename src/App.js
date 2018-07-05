import React, { Component } from 'react';
import Todos from './components/Todos';
import Timer from './components/Timer';
import AsyncState from './components/AsyncState';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
//import 'antd/dist/antd.css';

const goals = [
  { title: 'React 개발에 필요한 환경을 구축한다.', completed: true },
  { title: '새로운 자바스트림트 문법을 익힌다', completed: false },
  { title: '개발 편의를 위한 VSCode IDE를 익힌다', completed: false },
];

class App extends Component {
  state = {
    counter: 0,
    isExpired: false,
    dateStr: '2018-07-05T17:00:00+0900',
  };

  handleComplete = () => {
    //자식이 종료되고 직후 1초후에
    console.log('handleComplete!');

    this.setState({ isExpired: true });
  };

  render() {
    //const isExpired = moment('2018-07-04T17:00:00+0900') < moment();
    console.log('부모 render');
    const { isExpired, dateStr } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Header logo={logo} className="rotate" />
        </header>

        <Todos items={goals} title={'강의 목표!'} />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AsyncState />
      </div>
    );
  }
}

export default App;
