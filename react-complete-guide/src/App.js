import React, {Component} from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name : "saad", age : "25"},
      {name : "hamza", age : "26"},
      {name : "said", age : "24"},
      {name : "aga", age : "20"}
    ],
    showPerson: false
  }

  switchNameHandler = () => this.setState( {
      persons : [
        {name : "saad", age : "25"},
        {name : "hamza", age : "29"},
        {name : "said", age : "57"},
        {name : "agata", age : "30"}
      ]
    }
  );

  changeNameHandler = (event) => {
    this.setState(
      {
        persons : [
          {name : "saad", age : "25"},
          {name : event.target.value, age : "29"},
          {name : "said", age : "57"},
          {name : "agata", age : "30"}
        ]
      }
    )
  }

  togglePersonHandler = () => {
    const show = this.state.showPerson;
    this.setState({showPerson: !show});
  }

  render(){

    let persons = null;
    if (this.state.showPerson)
      persons = (
            <div>
              <button onClick={this.togglePersonHandler}> Hide users </button>
              {this.state.persons.map(person => {
                return  <Person 
                          name = {person.name} 
                          age = {person.age} />
              })}
            </div>
      );
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
