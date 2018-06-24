import React, { Component } from 'react';
import Son from './son';

class Father extends Component {
  constructor(){
    super()
    this.state={
      value:22
    }
  }
  //原型方法箭头函数定义this指向了类
  handle=() => {
    alert(this.state.value);
  }
  //子组件调用此方法，回调传参修改状态
  emitChange=(sta) => {
    this.setState({
      value: sta||this.state.value
    })
  }
  // 调用子组件的方法
  useSonFn=() => {
    this.refs.sonFn.sonSelfFn();
    //获取子组件中的状态
    this.setState({
      value: this.refs.sonFn.state.code
    })
  }
  render() {
    return (
      <div>
        <p>我是父组件<button onClick={this.handle}>父btn</button>父组件中的状态值:{this.state.value}</p>
        <p>父组件，我要使用子组件的方法<button onClick={this.useSonFn}>fn</button></p>
        <hr />
        <Son sonHandle={this.handle} modifie={this.emitChange} ref="sonFn"></Son>
      </div>
    );
  }
}
Father.defaultProps = {};
 
export default Father;