import React from 'react';

const Char = (props) => {
return <div style={{ 
    display: "inline-block", 
    padding: '16px', 
    textAlign: 'center', 
    margin: '16px', 
    border: '1px solid black'}} onClick={props.click}>{props.character}</div>
};

export default Char;