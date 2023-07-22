import styled from "@emotion/styled"
import { useRouter } from 'next/router'

const Wrapper = styled.div`

display: flex;
flex-direction: column;
align-items: center;
background: #fff;
min-height: 65vh;
border-radius: 25px 25px 0px 0px;

.questions-counter {
    position: relative;
    top: 120px;
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

  .score-progress {

    position: relative;
    bottom: 160px;
    padding: 10px;
  }

  .score-container {
    padding-bottom: 10rem;
    width: 100%;
    display: flex:
    justify-content: center;

    .correct{
        margin: 1rem 0;
        display: flex;
        align-items; center;
        .green-dot{
            margin: 0 5px;
            width: 22px;
            height: 22px;
            flex-shrink: 0;
            border-radius: 50%;
            background: green
        }

        background: rgba(0,128,0,0.1);
        width: 90%;
        padding: 1rem;
        border-radius: 1rem;
    }
    .incorrect{
        margin: 1rem 0;
        display: flex;
        align-items; center;
        .red-dot{
            margin: 0 5px;
            width: 22px;
            height: 22px;
            flex-shrink: 0;
            border-radius: 50%;
            background: red;
        }

        background: rgba(128,0,0,0.1);
        width: 90%;
        padding: 1rem;
        border-radius: 1rem;
    }

  }

  .score-text {
    margin: 0 1rem;
    color: #000;
    font-family: Source Sans Pro;
    font-size: 1.5rem;
    font-style: normal;
    //font-weight: 700;
    line-height: 30px; /* 93.75% */
  }
  .button {
    width: 100%;
    margin-bottom: 2rem;
  }
  .start-again {
    width: 100%;
    outline: none;
    border: none;
    padding: 1rem;
    background-color: orangered;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    border-radius: 20px;
  }

`

export default function ScorePage({score}){

    const router = useRouter()
    const greenGradient = ((score ) / 10) * 360;

    return(

        <Wrapper>
            <div className="questions-counter">
            <div 
          className="circular-progress"
          style={{
            background: `conic-gradient(green ${0}deg ${greenGradient}deg, #d8d8d8 ${greenGradient}deg 360deg)`
          }}
        >
          <div className="inner-circle">
            <p className="counter">
              <span className="current-question">{(score/10)*100}%</span>
            </p>
          </div>
        </div>
            </div>
        <div className="score-progress">
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="260" viewBox="0 0 500 260" fill="none">
            <path d="M490 250C490 117.452 382.548 10 250 10C117.452 10 10 117.452 10 250" stroke="url(#paint0_linear_86_5)" stroke-width="20" stroke-linecap="round"/>
            <defs>
            <linearGradient id="paint0_linear_86_5" x1="490" y1="10" x2="10" y2="10" gradientUnits="userSpaceOnUse">
            <stop stop-color="#44B77B"/>
            <stop offset="0.479043" stop-color="#FFD033"/>
            <stop offset="1" stop-color="#FF3B3F"/>
            </linearGradient>
            </defs>
            </svg>
        </div>

        <div className="score-container">
            
            <div className="correct">
            <div className="green-dot"></div>
                <span className="score-text"><strong>{score}</strong> Correct</span>
            </div>
            <div className="incorrect">
            <div className="red-dot"></div>
                <span className="score-text"><strong>{10-score} </strong>Incorrect</span>
            </div>
        </div>
          <div className="button">
            <button onClick={() => router.push('/')} className="start-again">Start Again</button>
          </div>
            
        
        </Wrapper>


        
    )

}