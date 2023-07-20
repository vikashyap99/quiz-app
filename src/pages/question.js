import QuestionsList from "@/Components/QuestionList";
import styled from "@emotion/styled";

const Wrapper = styled.div`

background: blueviolet;
  width: 100vw;
  height: 100vh;
  padding-top: 15vh;

`

const questions = [
  {
    question: "What is the Capital of the Indian state of Uttar Pradesh?",
    options: ["Kanpur", "Varanasi", "Lucknow", "Agra", "Delhi"]
  },
  {
    question: "What is the Capital of the Indian state of Bihar?",
    options: ["Kanpur", "Varanasi", "Lucknow", "Agra", "Delhi"]
  },
  {
    question: "What is the Capital of the Indian state of MP?",
    options: ["Kanpur", "Varanasi", "Lucknow", "Agra", "Delhi"]
  },
  {
    question: "What is the Capital of the Indian state of Haryana?",
    options: ["Kanpur", "Varanasi", "Lucknow", "Agra", "Delhi"]
  }
];

export default function QuestionPage() {
  return (
    <Wrapper>
      <QuestionsList questions={questions} />
    </Wrapper>
  );
}