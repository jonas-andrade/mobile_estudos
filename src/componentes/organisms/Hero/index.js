import React from "react";
import { HeroContainer, HeroImageBackground ,HeroGradient,ButtonsView } from "./styles";
import { colors } from '../../../styles/colors'
import { CustomLogo, CustomText, GoBack } from '../../atoms'
import { Tag, IconButton,PlayButton } from "../../molecules";


export const Hero=({item , withoutLogo})=>{
    const {image_url,title,subtitle,type} = item;
    return(
        <HeroContainer>
            <HeroImageBackground source={{ uri: image_url, }}>
            <HeroGradient  colors={[colors.dark, 'transparent',colors.dark]}>
            
           {withoutLogo && <CustomLogo size='small' />}
           {!withoutLogo && <GoBack />}
            
            <Tag mt={!withoutLogo ? 224:200}>{type}</Tag>
            <CustomText mt={8} fontFamily="bold" size={28}>{title}</CustomText>
            <CustomText size={18}>{subtitle}</CustomText>

            <ButtonsView>
            <IconButton label='Favoritos' iconName='add-circle-outline' />
            <PlayButton label='Assistir'/>
            <IconButton label='Saiba Mais' iconName='md-information-circle-outline' />
            </ButtonsView>
           
            </HeroGradient>
            </HeroImageBackground>
        </HeroContainer>
    )
}