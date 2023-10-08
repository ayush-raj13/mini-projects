import React,{useState, useContext} from "react";
import { Question } from "../Helpers/QuentionBank";
import { QuizContext } from "../Helpers/Contexts";


const Quiz=()=>{
    const { score, setScore, setGameState } = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (Question[currQuestion].answer == optionChosen){
            setScore(score +1);
           
        
        }
        console.log(score);
        setCurrQuestion(currQuestion + 1);
    };
     const finishQuiz=()=>{
        if (Question[currQuestion].answer == optionChosen){
        setScore(score +1);
       
        
    }
    console.log(score);
    setGameState("End");
};
return(
   <div className="Quiz">
        <h1>{Question[currQuestion].prompt}</h1>
        <div className="Options">
            <button onClick={()=>{setOptionChosen("A")}}>
                {Question[currQuestion].optionA}
            </button>
            <button onClick={()=>{setOptionChosen("B")}}>
                {Question[currQuestion].optionB}
            </button>
            <button onClick={()=>{setOptionChosen("C")}}>
                {Question[currQuestion].optionC}
                
            </button>
            <button onClick={()=>{setOptionChosen("D")}}>
                {Question[currQuestion].optionD}
            </button>
        </div>
        {currQuestion === Question.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
        </div>
);

}

export default Quiz;