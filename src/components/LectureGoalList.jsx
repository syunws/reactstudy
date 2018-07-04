import React, { Component } from 'react';

const ulStyles = {
  listStyle: 'none',
};
const styles = {
  textAlign: 'left',
  padding: '20px',
  border: '1px solid #ccc',
  margin: '5px',
};

const handleClick = prop => {
  console.log(this, arguments);
};
//const ListItem = (prop) => {
const ListItem = ({ item, idx }) => {
  return (
    <label onClick={handleClick}>
      <input type="checkbox" />
      {idx}. {item}
    </label>
  );
};
const LectureGoalList = props => {
  console.log(props);
  return (
    <div style={styles}>
      <div>{props.title}</div>
      <ul style={ulStyles}>
        {props.items.map((item, idx) => (
          <li key={idx}>
            <ListItem item={item} idx={idx} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LectureGoalList;
