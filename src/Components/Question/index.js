
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
const Wrapper = styled.div`

.question-container {
    position: relative;
    bottom: 60px;
  }
  
  .question {
    text-align: left;
  }
  
  .options-container {
    margin-top: 10px;
    overflow-y: auto;
  }
  
  .option {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px;
    gap: 10px;
    background-color: #d8d8d8;
    opacity: 0.7;
    margin-bottom: 15px;
    border-radius: 12px;
  }
  
  .option input {
    appearance: none;
    width: 24px;
    height: 24px;
    border: 1px solid black;
    border-radius: 50%;
  }
  
  .option input:checked {
    background-color: green;
  }
  
  .option label {
    font-size: 18px;
    line-height: 24px;
  }

  .selected {
    border: 3px solid green;
    background: #fff;
    box-shadow: 1px 1px 1px 1px green;

  }
  

`


function Question({ questionData, totalScore, setTotalScore }) {

    const [answers, setAnswers] = useState([])
    const [correctAnswerFlag, setCorrectAnswerFlag] = useState(false)
    const [getAnswerFlag, setGetAnswerFlag] = useState('')

    useEffect(() => {
        // merging incorrect and correct answers
        if(questionData){
            let newArray = [...questionData.incorrect_answers]
            newArray.push(questionData.correct_answer)
        setAnswers(newArray)
        }
        
    } ,[questionData])

    
const handleAnswer = (value) => {
    setGetAnswerFlag(value)
    if(value === questionData.correct_answer){
      setTotalScore((prev) => prev + 1)
    }
      
}

  return (
    <Wrapper>
    <div className="question-container">
      <h2 className="question">{questionData?.question}</h2>
      <div className="options-container">
        {answers.map((option,index) => {
          return (
            <div
             key={index} 
            className={getAnswerFlag === option ? "option selected" : "option"}
            onClick={() => handleAnswer(option)}
              >
              {/* <input onChange={handleAnswer} type="checkbox"  name={option} value={option} /> */}
              {
                getAnswerFlag === option 
                ?
                <img alt='correct_answer' src="/correct_answer.svg"/>
                :
                <img alt="answer" src='/answer.svg' />
              }
              <label for={option}> {option}</label>
            </div>
          );
        })}
      </div>
    </div>
    </Wrapper>
  );
}

export default Question;

