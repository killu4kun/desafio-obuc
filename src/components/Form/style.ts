import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;


  .is-invalid {
    border: 1px solid red;
  }

  .invalid-feedback {
    color: red;
  }
  textarea {
    width: 100%;
    height: 5rem;
    outline: red;
  }
  label {
    padding-bottom: 0.5rem;
  }

  section:nth-last-of-type(1) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
  }

  p {
    color: red;
  }
`;

export const Input = styled.input`
  outline: transparent;
  &:invalid {
    outline-color: red;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  width: 30%;
`;
