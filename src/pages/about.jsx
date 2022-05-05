import React from "react";
import { ContainerAbout, ContainerImage } from "./style/styles";
import { TextCard } from "./style/styles";
import Women2 from "../Images/Women.png"

export const About = ()=>{
    return(
        <ContainerAbout>
          <TextCard>
            <h1> Tudo sobre nós </h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic magni explicabo beatae id fugit delectus at architecto dolores labore doloremque nemo,
             incidunt non. Quam, voluptatem veniam dolorem eos excepturi ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, doloremque consectetur. Nihil quas vel aperiam a aliquid temporibus necessitatibus magnam soluta
             . Soluta asperiores voluptatibus fugit dolore quaerat voluptatum blanditiis a!
          </TextCard>
          <ContainerImage>
          <img src={Women2} alt="mulher" />
          </ContainerImage>



        </ContainerAbout>
    )
}