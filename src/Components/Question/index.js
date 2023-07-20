
import styled from "@emotion/styled";

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
    background-color: red;
  }
  
  .option label {
    font-size: 18px;
    line-height: 24px;
  }
  

`

function Question({ questionData }) {
  return (
    <Wrapper>
    <div className="question-container">
      <h2 className="question">{questionData.question}</h2>
      <div className="options-container">
        {questionData.options.map((option,index) => {
          return (
            <div key={index} className="option">
              <input type="checkbox" name={option} value={option} />
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
