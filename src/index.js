import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Test1 = <div>이것도 컴포넌트 ㅇ3ㅇ</div>;

const Test2 = () => {
  <div>이것도 컴포넌트에영 뿌우 +3+// </div>;
};

console.log(Test1, Test2, <Test2 />, Test2());
console.log('Test2 TAG', <Test2 />);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
