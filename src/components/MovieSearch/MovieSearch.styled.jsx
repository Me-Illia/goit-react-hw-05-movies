import styled from 'styled-components';

export const Div = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: linear-gradient(90deg, rgb(36 69 240 / 87%) 48%, rgb(224 211 230 / 66%) 64%);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 10px 16px;
  border-radius: 5px;
  border: 1px solid #000;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  color: #000;
  font-weight: 500;
  background: #cfe0e8;
  opacity: 0.6;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    opacity: 1;
    background-color: #87bdd8;
    color: #fff;
  }
`;
