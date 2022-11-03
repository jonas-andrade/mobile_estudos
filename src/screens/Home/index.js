import React from "react";
import {  HomeList , Hero, ScrollContainer } from "../../componentes";

const DATA_FAKE =[
    {  id: 0,
     image_url: 'https://m.media-amazon.com/images/I/81lK9uOc95L._AC_SX385_.jpg',
     title: 'Watch Dogs I',
     subtitle: 'Nunca Tive Tanto Controle',
     description: 'wtd 1...............',
     type: 'Filme'

 },
 {
     id: 1,
     image_url: 'https://images.tcdn.com.br/img/img_prod/1087887/jogo_watch_dogs_2_ps4_midia_fisica_usado_677_1_344642ab142bab62e3fd1da1dd5dffd5.jpg',
     title: 'Watch Dogs II',
     subtitle: 'São Francisco é meu Parque',
     description: 'wtd 2...............',
     type: 'Filme'
    },
 {
     id: 2,
     image_url: 'https://loja.gameforfun.com.br/wp-content/uploads/2020/02/Watch-Dogs-Legion-midia-digital-xbox-one.jpg.webp',
     title: 'Watch Dogs III',
     subtitle: 'Seja Quem você quiser',
     description: 'wtd 3...............',
     type: 'Filme'
 },
 
 ];

export const Home=()=>{
    
    return (
       <ScrollContainer >
        <Hero item={{
            title: 'titulo',
            subtitle: 'subtititle',
            type: 'type',
            image_url: 'https://images.tcdn.com.br/img/img_prod/1087887/jogo_watch_dogs_2_ps4_midia_fisica_usado_677_1_344642ab142bab62e3fd1da1dd5dffd5.jpg',

        }} withoutLogo />
       <HomeList title='Filmes' data={DATA_FAKE} />
       <HomeList title='Personagens' data={DATA_FAKE} />
       </ScrollContainer>
    )
}