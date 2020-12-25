import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  margin-top: 10%;
  width: 280px;
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  margin-top: 22px;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  color: #222;
  font-size: 16px;
  outline: none;
  border: solid 1px #ddd;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #00a8ff;
  height: 32px;
  width: 100%;
  border: none;
  border-radius: 4px;
  color: #fff;
  :hover,
  :active {
    outline: none;
    opacity: 0.7;
  }
`;
