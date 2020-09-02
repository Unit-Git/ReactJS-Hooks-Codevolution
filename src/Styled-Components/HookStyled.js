import styled from "styled-components";

export const RootApp = styled.main`
  padding-top: 2rem;
  padding-bottom: 3rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  width: 96%;
  margin: 5px auto;
  height: 100%;
`;

export const TitleHook = styled.h3`
  color: blue;
`;

export const MainCounter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  padding-bottom: 2.5rem;
  height: max-content;
  box-shadow: 0 0 0.4rem #0f0f0f63;
  border-radius: 0.3rem;
`;

export const Button = styled.button`
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  color: #333;
  font-size: 18px;
  border: 2px solid #333;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background-color: transparent;
  transition: 0.2s all ease-in-out;
  outline: none;

  &:hover {
    background-color: #333;
    color: #f2f2f2;
  }

  &:focus,
  &:active {
    box-shadow: 0 0 0.25rem #040201;
  }
`;

export const Input = styled.input`
  padding: 0.4rem 0.5rem;
  height: 20px;
  font-size: 19px;
  color: ${props => props.fontColor};
  outline: none;
  border: 2px solid ${props => props.border};
  background-color: transparent;

  &:focus {
    border: 2px solid ${props => props.border};
    box-shadow: 0 0 0.2rem ${props => props.border};
  }
`;
