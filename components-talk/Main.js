require('normalize.css/normalize.css');
import React from 'react';

import Father from './father';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Father></Father>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
