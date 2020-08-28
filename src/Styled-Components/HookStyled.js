import styled from "styled-components";

export const RootApp = styled.main`
  margin: 0;
  position: relative;
  display: flex;
  flex-basis: 2;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const TitleHook = styled.h3`
  color: blue;
`;

export const MainCounter = styled.section`
  margin-top: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  position: relative;
  padding: 2rem 3rem;
  flex: ${(props) => props.flex};
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
