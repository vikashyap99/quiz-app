
import styled from '@emotion/styled'
import  Link  from 'next/link'
const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: column-reverse;
    align-items: center;
    background: linear-gradient(180deg, rgba(175, 156, 243, 0) 7.92%, #AF9CF3 86.48%);
    background-blend-mode: multiply;
    height: 100vh;

    .header {
        display: flex;
        flex: 2;
        margin: 3rem;
        .upraised-text {
            font-size: 1.8rem;
            font-weight: bold;
        }
        .logo{
            width: 50%;
        }
        .logo-span{
        }
    }
    .quiz{
        flex; 2;
        background-color: #fff;
        width: 9rem;
        height: 9rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .quiz-text{
            font-size: 2.5rem;
            font-weight: 900;
            color: red;
        }
    }
    .start-button-container{
        flex: 2;
        display: flex;
        align-items: flex-end;
        margin: 3rem;

        .start-button {
            padding: 0.8rem 7rem;
            background-color: #FF3B3F;
            color: #fff;
            border-radius: 5rem;
            border: none;
            font-family: Montserrat;
            font-size: 2.5rem;
            font-style: normal;
            font-weight: 900;
        }
    }

`

export default function LandingPage(){
    return(
        <Wrapper>
            <div className='header'>
                <span className='logo-span' ><img className='logo' src='/Group.png' alt='upraised'/></span>
                <div className='upraised-text'>upraised</div>
            </div>
            <div className='quiz'>
                <div className='quiz-text' >Quiz</div>
            </div>
            <div className='start-button-container'>
              <Link href='/question'>
                <button className='start-button' >Start</button>
              </Link>
            </div>
        </Wrapper>
    )
}