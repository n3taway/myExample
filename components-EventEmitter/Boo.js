import React, { Component } from 'react';
import emitter from './ev'

export default class Boo extends Component {
  render() {
    // const cb = (msg) => {
    //   return () => {
    //     // 触发自定义事件
    //     emitter.emit('callMe', msg)
    //   }
    // }
    const cb = function (msg) {
      return function () {
        emitter.emit('see', msg)
      }
    }
    return (
      <div>
        我是非嵌套 2 号
        <button onClick={cb('hello')}>点击我</button>
      </div>
    );
  }
}