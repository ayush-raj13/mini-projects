import './App.css';
import React,{useState, useContext} from 'react';
import Main from "./components/Main";
import EndScreen from "./components/EndScreen";
import Quiz from "./components/Quiz";

import { QuizContext } from './Helpers/Contexts';

function App() {
  const [gameState,setGameState]= useState("menu");
  const [score, setScore]= useState(0);
  return (
    <div className="App">
     <h1>Quiz, App</h1>
    <QuizContext.Provider value={{gameState, setGameState, score, setScore }}>
          {gameState ==="Quiz" && <Quiz />}
          {gameState ==="menu" && <Main />}
          {gameState ==="End" && <EndScreen />}
    </QuizContext.Provider>

    </div>
  );
}

export default App;
