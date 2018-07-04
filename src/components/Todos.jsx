import React, { Component } from 'react';
import { Checkbox } from 'antd';
const ulStyles = {
  listStyle: 'none',
};
const styles = {
  textAlign: 'left',
  padding: '20px',
  border: '1px solid #ccc',
  margin: '5px',
};

const ListItem = ({ title, completed }) => (
  <li>
    <Checkbox defaultChecked={completed}>{title}</Checkbox>
  </li>
);

const Todos = props => {
  console.log(props);
  return (
    <div style={styles}>
      <div>{props.title}</div>
      <ul style={ulStyles}>{props.items.map((item, idx) => <ListItem key={idx} {...item} />)}</ul>
    </div>
  );
};

export default Todos;
