import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render() {
    return this.props.persons.map((person, index) => {
        return  <Person 
          click = {() => this.props.Clicked(index)}
          name = {person.name} 
          age = {person.age} 
          key = {person.id}
          change = {(event) => this.props.Changed(event, person.id)} 
          />
      });
    }
}

export default Persons;