import React from 'react';

const person = (props) => {
   return  <div>
                <p>i'm {props.name} i'm {props.age} years old!!</p>
                <input type = 'text' onChange = {props.change} value = {props.name} />
            </div>
};

export default person;