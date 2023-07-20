import { useState } from "react";
import Question from '../Question';
import Button from "../Button";
import styled from "@emotion/styled";

const Wrapper = styled.div`

.questions-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    min-height: 85vh;
    border-radius: 25px 25px 0px 0px;
    padding: 0 18px;
  }
  
  .questions-counter {
    position: relative;
    bottom: 60px;
    width: 150px;
    height: 150px;
    padding: 10px;
    background: #fff;
    border-radius: 50%;
  }
  
  .circular-progress {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d8d8d8;
  }
  
  .inner-circle {
    position: absolute;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .counter {
    font-size: 24px;
    font-weight: bold;
    color: grey;
  }
  
  .current-question {
    color: black;
    font-size: 50px;
  }
  
  .button-container {
    width: 90%;
    position: fixed;
    bottom: 18px;
    margin: 0px 12px;
  }
  

`

export default function QuestionsList({ questions }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const totalQuestions = questions.length;

  const greenGradient = ((questionNumber + 1) / totalQuestions) * 360;
  console.log(greenGradient);
  return (
    <Wrapper>
    <div className="questions-list">
      <div className="questions-counter">
        <div 
          className="circular-progress"
          style={{
            background: `conic-gradient(green ${0}deg ${greenGradient}deg, #d8d8d8 ${greenGradient}deg 360deg)`
          }}
        >
          <div className="inner-circle">
            <p className="counter">
              <span className="current-question">{questionNumber + 1}</span>/
              {totalQuestions}
            </p>
          </div>
        </div>
      </div>
      <Question questionData={questions[questionNumber]} />
      <div className="button-container">
        <Button
          clickHandler={() => setQuestionNumber((prevState) => prevState + 1)}
        >
          Next
        </Button>
      </div>
    </div>
    </Wrapper>
  );
}
