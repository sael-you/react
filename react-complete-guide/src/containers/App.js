import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {id : "jhgjg", name : "saad", age : "25"},
      {id : "jhgjhjhvjg", name : "Hamza", age : "29"},
      {id : "jhgjjhkkkkng", name : "said", age : "57"},
      {id : "jhgjgjjjjhggg", name : "agata", age : "30"}
    ],
    showPerson: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  changeNameHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === index;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons : persons});
  }

  togglePersonHandler = () => {
    const show = this.state.showPerson;
    this.setState({showPerson: !show});
  }

  render(){
    let persons = null;
    
    
    if (this.state.showPerson){
      persons = (
        <div>
           <Persons 
            persons = {this.state.persons}
            Clicked = {this.deletePersonHandler}
            Changed = {this.changeNameHandler}/>
        </div>
      );
    }
    
    return (
      <div className={classes.App}>
        <Cockpit 
          persons={this.state.persons}
          showPerson={this.state.showPerson} 
          togglePerson={this.togglePersonHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
