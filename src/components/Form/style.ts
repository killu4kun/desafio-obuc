import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  border: 1px solid green;

  textarea {
    width: 100%;
    height: 5rem;
    outline: red;
  }
  label {
    padding-bottom: 0.5rem;
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Button = styled.button``;
