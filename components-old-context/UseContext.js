import React, { Component } from 'react';
import PropTypes  from 'prop-types';

const Inner1 = (props) => {
  return (
    <div style={{ border: '2px solid green' }}>
      <p>Inner1纯组件</p>
      <Inner2></Inner2>
    </div>
  )
}

const Inner2 = (props,context) => {
  return (
    <div style={{ border: '2px solid red' }}>
      <p>Inner2纯组件</p>
      <p>{context.color}</p>
    </div>
  )
}
Inner2.contextTypes = {
  color: PropTypes.string
}

class Top1 extends Component {
  getChildContext() {
    return { color: 'red' };
  }
  render() {
    return (
      <div>
        <Inner1></Inner1>
      </div>
    );
  }
}

Top1.childContextTypes = {
  color: PropTypes.string
}

/*
什么是context？
context是react提供的组件通信api

context有什么用？
解决{组件.js}中多层级组件通信,参数层层传递的麻烦。

context 使用注意事项
  1-1context 提供者(组件)中需定义getChildContext方法ruturn一个对象，对象中包含发布的信息。
  1-2context 提供者需定义 组件名.childContextTypes内容类型

  2-1访问者需定义 组件名.contextTypes内容类型
  2-2传参中添加context，以{context.属性}方式使用

  import PropTypes  from 'prop-types';
 */
export default Top1;