import React from 'react';


import Navbar from './navbar.js';

var Main = React.createClass({
  render: function() {
    return(
      <div>
        <Navbar />
        <div className="top">
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    );
  }
});

export default Main;
