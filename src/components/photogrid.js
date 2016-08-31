import React from 'react';

import Photo from './photo.js';
// <pre>
//   {JSON.stringify(this.props.posts,null,' ')}
// </pre>

var PhotoGrid = React.createClass({
  render: function() {
    return(
      <div className="top container">
        <div className="row">
            {this.props.posts.map((post,i) => <Photo {...this.props} key={i} i={i} post={post} />)}
        </div>
      </div>
    );
  }
});

export default PhotoGrid;
