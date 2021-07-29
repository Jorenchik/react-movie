import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  width: 25%;
  min-width: 170px;
  height: 60px;
  border-radius: 30px;
  border: 0;
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  font-size: var(--fontMed);
  color: var(--white);

  :hover {
    opacity: 0.95;
  }
`;
