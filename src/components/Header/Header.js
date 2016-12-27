import React from 'react';

import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <img src="src/images/logo.png" alt="logo" className="logo" />
          <div className="title">Live Filters</div>
        </div>
      </div>
    );
  }
}

export default Header;
