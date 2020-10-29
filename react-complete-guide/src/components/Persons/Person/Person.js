import React, {Component} from 'react';
import classes from './Person.module.css'


class Person extends Component {
    render () {
        console.log('[Person.js] rendering...');
        return  (
            <div className={classes.Person}>
                <p onClick= {this.props.click}>
                    i'm {this.props.name} i'm {this.props.age} years old!!
                </p>
                <input type = 'text' 
                    onChange = {this.props.change}
                    value = {this.props.name} 
                />
            </div>
        );
    }
};

export default Person;