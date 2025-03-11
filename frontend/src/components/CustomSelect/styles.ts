import styled from 'styled-components';


export const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;

`;

export const CustomSelect = styled.div`
  text-decoration: none;
  color: black;
  font-size: 1.8em;
  margin-bottom: 2%;
  color: black;
  background: transparent;
  transition: ease-out 0.5s;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 black;
  appearance: none;
  width: 100%;

  &:hover{
        color: white;
        box-shadow: inset 0 -100px 0 0 black;
        cursor: pointer;
 }
`;

export const OptionList = styled.div`

  position: absolute;
  background-color: transparent;
  width: 100%;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  border-radius: 5px;
  border: 2px solid black;
  border-radius: 10px;
  transition: ease-out 0.2s;

`;

export const Option = styled.div`
  padding: 8px;
  cursor: pointer;
  transition: ease-out 0.3s;
  background-color: transparent;
  font-size: 1.4em;
  box-shadow: inset 0 0 0 0 black;

  &:hover{
        color: white;
        box-shadow: inset 0 -100px 0 0 black;
        cursor: pointer;
  }
`;
