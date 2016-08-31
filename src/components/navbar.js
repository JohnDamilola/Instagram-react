import React from 'react';


var Navbar = React.createClass({
  render: function() {
    return(
      <nav className="navbar navv navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="col-md-3"></div>
            <div className="navbar-header col-md-6 text-center">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brands text-center" href="#">
                    <img src="./src/9d8680ab8a3c.svg" alt="icc" className="img text-center"/>
                    <h3 className="head text-center"> Instagram</h3>
                </a>
            </div>
        </div>
</nav>
    );
  }
});

export default Navbar;
