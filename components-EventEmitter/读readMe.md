url  https://www.jianshu.com/p/fb915d9c99c4 非嵌套组件间通信

npm install events --save

ev.js
```
import { EventEmitter } from "events";
export default new EventEmitter();
```
App.js
```
import React, { Component } from 'react';

import Foo from "./Foo";
import Boo from "./Boo";

import "./App.css";

export default class App extends Component{
    render(){
        return(
            <div>
                <Foo />
                <Boo />
            </div>
        );
    }
}

```

Foo.js：
```
import React,{ Component } from "react";
import emitter from "./ev"

export default class Foo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            msg:null,
        };
    }
    componentDidMount(){
        // 声明一个自定义事件
        // 在组件装载完成以后
        this.eventEmitter = emitter.addListener("callMe",(msg)=>{
            this.setState({
                msg
            })
        });
    }
    // 组件销毁前移除事件监听
    componentWillUnmount(){
        emitter.removeListener(this.eventEmitter);
    }
    render(){
        return(
            <div>
                { this.state.msg }
                我是非嵌套 1 号
            </div>
        );
    }
}
```

Boo.js：
```
import React,{ Component } from "react";
import emitter from "./ev"

export default class Boo extends Component{
    render(){
        const cb = (msg) => {
            return () => {
                // 触发自定义事件
                emitter.emit("callMe","Hello")
            }
        }
        return(
            <div>
                我是非嵌套 2 号
                <button onClick = { cb("blue") }>点击我</button>
            </div>
        );
    }
}
```