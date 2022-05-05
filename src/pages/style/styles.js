

import styled from 'styled-components';

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  background-color: blanchedalmond;
  width: 100vw;
  height: 100vh;

`;

export const TextCard = styled.div`
 display: flex;
 flex-direction: column;
 padding: 20px;
 margin-top: 15px;
 margin-left: 15px;
 text-align: justify;
 height: 500px;
 width: 500px;
 font-size: 20px;
 border-radius: 10px;
 ;

`

export const ContainerImage = styled.div`

img{
    width: 900px;
}

`


//css dos produtos

export const ContainerCards = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;

`

export const ContainerImageCard = styled.div`
 
 
 img{height: 300px;
  width: 300px;
 }
`


export const ButtonRemove = styled.button`
    background-color: orangered;
    cursor: pointer;
    height: 35px;
    width: 70px;
    border: none;
    border-radius: 5px;
    color: black;
    transition: ease-in 0.1s;

    :hover{
      background-color: red;
      color: black ;
    }
`


export const ContainerProducts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerCard = styled.div`
  padding-bottom: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  border: 1px solid black;
  border-radius: 10px;

`


export const ContainerInfo = styled.div`
display: flex;
flex-direction: column;
text-align: justify;
justify-content: center;
width: 300px;
height: 150px;

p{
  padding: 0px;
  margin: 0px;
}


h5{
  margin: 0;
  margin-bottom: 5px;
}

`





export const ButtonAdd = styled.button`
    background-color: green;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 35px;
    color: white;
    transition: ease-in 0.1s;
    
  :hover{
    background-color: darkgreen;
  }

`

export const MicroCard = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
height: 200px ;
gap: 20px;
margin-top: 10px;
border: 1px solid black;
width: 600px;


p{
  font-size: 12px;
}

img{
  height: 150px;
  width: 150px;
}



`