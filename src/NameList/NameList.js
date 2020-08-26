import React from 'react';

const NameList = (props) => (
  <div>
    <div>
      <h3>Name List</h3>
    </div>
    {props.names.map((nm, index) =>{
      return <p >{nm}</p>
    })}
  </div>
);

export default NameList