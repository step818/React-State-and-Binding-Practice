import React from 'react';

const withClass = props => (
  <div className={props.cSsStYlE}>
    {props.children}
  </div>
);

export default withClass;