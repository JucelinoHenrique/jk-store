import styled from 'styled-components';

export const ContainerFull = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;  
  gap: 10px;
`;

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;  
  gap: 10px;
`;

export const ContainerFlexRow = styled.div`
display: flex;
flex-direction: row;
background-color: aliceblue;
gap: 20px;
`



export const Button = styled.button`
  color: white;
  background: none;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid rgb(255, 255, 255);
  height: 35px;
  width: 90px;
  font-weight: 600;
  border-radius: 8px;
`;

