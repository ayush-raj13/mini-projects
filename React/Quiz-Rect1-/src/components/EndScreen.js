import React,{ useContext} from "react";
import { Question } from "../Helpers/QuentionBank";
import { QuizContext } from "../Helpers/Contexts";




const End=() =>{
    const { score, setScore, setGameState } = useContext(QuizContext);
   
   

const restartQUiz=() =>{
    setScore(0);
    setGameState("menu");
}   

return(
 <div className="EndScreen">

    <h2>{score} / {Question.length}</h2>
    <button onClick={restartQUiz}>Restart Quiz</button>
 </div>
    
);

};
export default End;