import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const ButtonAdd = styled.button`

 display: flex;
 height: 30px;
 width: 100px;
 background-image: linear-gradient(120deg, #ae8500 0%, #fe3d08 100%);

`

export const Loading = styled.div`
animation: is-rotating 1s infinite;
width: 50px;
height: 50px;
border-radius: 50%;
border: 3px solid black;
border-top: 3px solid aqua;

@keyframes is-rotating {
  to{
    transform: rotate(1turn);
  }
}

`