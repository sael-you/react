import React, {Component} from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

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

    this.setState(
      {
        persons : persons
      }
    );
  }

  togglePersonHandler = () => {
    const show = this.state.showPerson;
    this.setState({showPerson: !show});
  }

  render(){
    let persons = null;
    let btnClass = [classes.Button];
    let btnText = "Show users";
    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return  <Person 
              click = {() => this.deletePersonHandler(index)}
              name = {person.name} 
              age = {person.age} 
              key = {person.id}
              change = {(event) => this.changeNameHandler(event, person.id)} 
              />
          })}
        </div>
      );

      btnText = "Hide users";
      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2)
      assignedClasses.push(classes.red);
    if(this.state.persons.length <= 1 && this.state.showPerson)
    {
      btnText = "Hide user";
      assignedClasses.push(classes.bold);
    }
    else if (this.state.persons.length <= 1 && !this.state.showPerson)
    {
      btnText = "Show user";
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1 > hi hello world</h1>
        <p className={assignedClasses.join(' ')}>it's working !!!</p>
        <button className={btnClass.join(' ')} onClick={this.togglePersonHandler}>{btnText}</button>
        {persons}
      </div>
    );
  }
}

export default App;
