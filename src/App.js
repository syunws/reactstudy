import React, { Component } from 'react';
import Todos from './components/Todos';

import logo from './logo.svg';
import Header from './components/Header';
import axios from 'axios';
import './App.less';
//import 'antd/dist/antd.css';

const goals = [
  { title: 'React 개발에 필요한 환경을 구축한다.', completed: true },
  { title: '새로운 자바스트림트 문법을 익힌다', completed: false },
  { title: '개발 편의를 위한 VSCode IDE를 익힌다', completed: false },
];

class App extends Component {
  state = {
    isExpired: false,
    dateStr: '2018-07-05T17:00:00+0900',
    data: [],
  };

  handleComplete = () => {
    //자식이 종료되고 직후 1초후에
    console.log('handleComplete!');

    this.setState({ isExpired: true });
  };

  render() {
    //const isExpired = moment('2018-07-04T17:00:00+0900') < moment();
    console.log('부모 render');
    const { isExpired, dateStr, data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Header logo={logo} className="rotate" />
        </header>
        <div className="wrap-todo">
          <Todos items={goals} title={'강의 목표!'} />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {data.map((item, idx) => {
          return (
            <li key={idx}>
              <img src={item.show.image.medium} />
            </li>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    axios.get('http://api.tvmaze.com/search/shows?q=girls').then(({ data }) => {
      // console.log(data);
      this.setState({ data });
    });
  }
}

export default App;
