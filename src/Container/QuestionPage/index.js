
import { useState, useEffect } from "react";
import QuestionsList from "@/Components/QuestionList";
import styled from "@emotion/styled";

const Wrapper = styled.div`

    background: blueviolet;
  width: 100vw;
  height: 100vh;
  padding-top: 15vh;

`


export default function QuestionPage() {

const [questions, setQuestions] = useState([])

const fetchQuestions = async() => {

    let data =  await fetch('/api/question')
    data = await data.json()
    setQuestions(data)

}
useEffect(() => {
    fetchQuestions()
}, [])


  return (
    <Wrapper>
      <QuestionsList questions={questions} />
    </Wrapper>
  );
}