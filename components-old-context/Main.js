import React from 'react';
import NoContext from './NoContext';
import UseContext from './UseContext';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <p>未使用context层层传递</p>
        <NoContext></NoContext>
        <hr/>
        <p>使用context</p>
        <UseContext></UseContext>
      </div>
    );
  }
}


export default AppComponent;
