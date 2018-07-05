import React, { Component } from 'react';
import Todos from './components/Todos';
import Timer from './components/Timer';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import moment from 'moment';
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

  constructor(props) {
    super(props);
    //** lexical this - 1. function.bind 함수
    //** this.handleClick = this.handleClick.bind(this);  // this 를 wrapping 한 자신을 다시 mapping
  }

  //** lexical this - 1. function.bind 함수
  /*
  handleClick () {

  }
  */

  //** lexical this 2. class-propertis 문법
  handleClick = e => {
    //debugger;
    console.log(this, e);
  };

  handleComplete = () => {
    //자식이 종료되고 직후 1초후에
    console.log('handleComplete!');

    this.setState({ isExpired: true });
  };

  componentDidMount() {
    setInterval(() => {
      console.log('state changed!');
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }
  render() {
    //const isExpired = moment('2018-07-04T17:00:00+0900') < moment();
    console.log('부모 render');
    const { isExpired, dateStr } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Todos items={goals} title={'강의 목표!'} />

        {!isExpired && <Timer key={dateStr} expireDate={dateStr} onComplete={e => this.handleClick(e)} />}
      </div>
    );
  }
}

export default App;
