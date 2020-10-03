import React, {Component} from 'react';
import './App.css';
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
    return (
      <div className="App">
        <h1> hi hello world</h1>
        { this.state.showPerson ?
            <div>
              <button onClick={this.togglePersonHandler}> Hide users </button>
              <Person 
                name = {this.state.persons[0].name} 
                age = {this.state.persons[0].age} />
              <Person 
                name = {this.state.persons[1].name} 
                age = {this.state.persons[1].age} 
                change= {this.changeNameHandler}/>      
              <Person 
                name = {this.state.persons[2].name} 
                age = {this.state.persons[2].age} />      
              <Person 
                name = {this.state.persons[3].name} 
                age = {this.state.persons[3].age} />  
            </div> :  <button onClick={this.togglePersonHandler}> Show users </button>
        }           
      </div>
    );
  }
}

export default App;
