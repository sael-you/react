import React, {useState} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = () => {
  const [UserName, SetUserName] = useState([
      "Max",
      "Marley",
      "Bob" 
    ]);

  const ChangeUserNameHandler = (event) => {
     return  SetUserName([[event.target.value],"Marley","Bob"]);
  };

  return (
    <div className="App">
      {UserName.map((userName, i) => {   
        if (!i)
          return  <div key = {i}>
                    <UserOutput UserName={userName}/>
                    <UserInput UserName={userName} Change = {ChangeUserNameHandler}/>
                  </div>;
          return  <div key = {i}>
                    <UserOutput UserName={userName}/>
                  </div>;
      })}
     
    </div>
  );
}

export default App;
