import React, {Component} from 'react';
import './App.css';
import person from './Person/Person';
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
    if (this.state.showPerson){
      persons = (
        <div>
          <button onClick={this.togglePersonHandler}> Hide users </button>
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
    }
    else
      persons = <button onClick={this.togglePersonHandler}> Show users </button>;

    return (
      <div className="App">
        <h1> hi hello world</h1>
        {persons}
      </div>
    );
  }
}

export default App;
