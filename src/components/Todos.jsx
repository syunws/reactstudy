import React, { PureComponent } from 'react';
import { Icon, Checkbox, Input } from 'antd';
import './Todos.less';

class Todos extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [...props.items],
    };
  }

  handlePressEnter = e => {
    const { items } = this.state;
    items.push({
      title: e.target.value,
      completed: false,
    });

    this.setState({
      items: [...items],
    });
  };

  handleOnIconClick(e, item, idx) {
    let { items } = this.state;

    //items.splice(idx, 1); // return 은 빠진 값
    items = items.filter((item, index) => index !== idx);
    this.setState({
      items: [...items],
    });
  }

  handleCheckBoxChange = (e, item, idx) => {
    let { items } = this.state;

    //items = items.splice(idx, 1);
    items[idx].completed = !items[idx].completed;
    this.setState({
      items: [...items],
    });
  };

  render() {
    console.log(this.props);
    const { items } = this.state;
    return (
      <div className="Todos">
        <Input placeholder="입력하세요" onPressEnter={this.handlePressEnter} />
        <div>{this.props.title}</div>
        <ul>
          {items.map((item, idx) => {
            return (
              <li key={idx}>
                <Icon className="icon" type="delete" onClick={e => this.handleOnIconClick(e, item, idx)} />
                <Checkbox
                  className="title"
                  defaultChecked={item.completed}
                  onChange={e => this.handleCheckBoxChange(e, item, idx)}>
                  {item.completed ? <strike>{item.title}</strike> : item.title}
                </Checkbox>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Todos;
