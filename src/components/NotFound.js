import React from 'react';

function NotFound(props) {
    return(
    <div className="container-page">
      <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
             <h1>Not Found</h1>
             <p>Sorry! We couldn't find the {props.statement} you're looking for.</p>
          </div>
      </div>
    </div>  
    )
}

export default NotFound
