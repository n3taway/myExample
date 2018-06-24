import React, { Component } from 'react';

const Inner1 = (props) => {
  return (
    <div style={{ border: '2px solid green' }}>
      <p>Inner1纯组件</p>
      <Inner2 value={props.value}></Inner2>
    </div>
  )
}

const Inner2 = (props) => {
  return (
    <div style={{ border: '2px solid red' }}>
      <p>Inner2纯组件</p>
      <p>{props.value}</p>
    </div>
  )
}
// 传递关系props    Top1>Inner1>Inner2
class Top1 extends Component {
  render() {
    return (
      <div>
        <Inner1 value={22}></Inner1>
      </div>
    );
  }
}
Top1.defaultProps = {};

export default Top1;