import React from 'react';

import UserBefore from './UserBefore';
import JokeBefore from './JokeBefore';

import UserAfter from './UserAfter';
import JokeAfter from './JokeAfter';


class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <UserBefore></UserBefore>
        <JokeBefore></JokeBefore>
        <hr/>
        <UserAfter></UserAfter>
        <JokeAfter></JokeAfter>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
