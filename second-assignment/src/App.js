import React, {useState} from 'react';
import './App.css';
import Validation from './validation/validation';
import CharCp from './Char/Char';


function App() {
  
  const [userInput, setUserInput] = useState({Length: '', word:''});

  const lengthInputHandler = (event) => {
    let word = event.target.value;
    return setUserInput({Length: word.length, word: word});
  }

  const deleteLetterHandler = (index) => {
    let word = userInput.word.split('');
    
    word.splice(index, 1);
    word = word.join('');
    setUserInput({Length: word.length, word: word});
  }

  return (
    <div className="App">
      <input value={userInput.word} onChange={lengthInputHandler}/>
      <p>{userInput.Length}</p>
      <Validation Length={userInput.Length}/>
      {
        userInput.word.split('').map((letter, index) => {
         return <CharCp key={index} character={letter} click={() => deleteLetterHandler(index)}/>
        })
      }
    </div>
  );
}

export default App;
