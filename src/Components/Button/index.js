
import styled from "@emotion/styled";

const Wrapper = styled.div`

.custom-btn {
    width: 100%;
    outline: none;
    border: none;
    padding: 12px 0 8px;
    background-color: orangered;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    border-radius: 20px;
  }
  
  .icon {
    position: relative;
    float: right;
    right: 20px;
  }
  

`

export default function Button({ children, clickHandler }) {
  return (
    <Wrapper>
    <button className="custom-btn" onClick={clickHandler}>
      {children}
      <img className="icon" src='/right-arrow.svg' />
    </button>
    </Wrapper>
  );
}
