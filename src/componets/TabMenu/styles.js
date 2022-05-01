import styled from 'styled-components';


export const TabMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

export const TabMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 3px solid ${props => props.active ? 'rgb(85, 15, 150)' : '#999'};
`
