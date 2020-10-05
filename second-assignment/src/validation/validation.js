import React from 'react';

const validation = (props) => {
    return props.Length < 5 ? 
    <p>it's too short</p> : <p>it's long enough</p>;
    
}

export default validation;