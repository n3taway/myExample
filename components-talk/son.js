import React, { Component } from 'react';
 
class Son extends Component {
  constructor(props){
    super(props)
    this.state={
      code:1
    }
  }
  //修改按钮绑定事件 使用父组件的回调函数传参
  onChange = () => {
    this.props.modifie(this.state.code)
  }
  //输入框监听事件  event获取dom
  inputChange = (event) => {
    this.setState({
      //将输入的值存入状态。
      code: event.target.value
    })
    // 实时修改父组件的状态
    // this.props.modifie(event.target.value)
  }
  sonSelfFn=() => {
    alert('子组件自己的方法')
  }
  render() {
    return (
      <div>
        <p>我是子组件=》使用父组件中的方法<button onClick={this.props.sonHandle}>子btn</button></p>
        <p>修改父组件的状态完成通信
          <input onChange={this.inputChange} type="text"/>
          <button onClick={this.onChange}>修改</button>
        </p>
        <p>子组件自己的方法<button onClick={this.sonSelfFn}>fn</button></p>
      </div>
    );
  }
}
Son.defaultProps = {};
 
export default Son;