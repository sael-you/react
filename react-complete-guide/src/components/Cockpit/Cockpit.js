import React from 'react';
import classes from './Cockpit.module.css';


const Cockpit = (props) => { 
    const assignedClasses = [];
    let btnClass = [classes.Button];
    let btnText = "Show users";
    
    if(props.showPerson)
    {
        btnText = "Hide users";
        btnClass.push(classes.Red);
    }
    console.log(btnText);
    if(props.persons.length <= 2)
    assignedClasses.push(classes.red);
    if(props.persons.length <= 1 && props.showPerson)
    {
    btnText = "Hide user";
    assignedClasses.push(classes.bold);
    }
    else if (props.persons.length <= 1 && !props.showPerson)
    {
    btnText = "Show user";
    assignedClasses.push(classes.bold);
    }
    
    return <div>
        <h1 > hi hello world</h1>
        <p className={assignedClasses.join(' ')}>it's working !!!</p>
        <button className={btnClass.join(' ')} onClick={props.togglePerson}>{btnText}</button>
    </div>
};

export default Cockpit;