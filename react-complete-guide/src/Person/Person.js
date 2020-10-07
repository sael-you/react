import React from 'react';
import classes from './Person.module.css'

const person = (props) => {
   return  <div className={classes.Person}>
                <p onClick= {props.click}>i'm {props.name} i'm {props.age} years old!!</p>
                <input type = 'text' onChange = {props.change} value = {props.name} />
            </div>
};

export default person;