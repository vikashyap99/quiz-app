import styled from "@emotion/styled";
import QuestionPage from "@/Container/QuestionPage";
const Wrapper = styled.div`

    background: blueviolet;
  width: 100vw;
  height: 100vh;
  padding-top: 15vh;

`

export default function QuestionPageRoute() {
  return (
    <Wrapper>
      <QuestionPage />
    </Wrapper>
  );
}