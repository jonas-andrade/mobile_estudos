import React, { Children } from "react";
import { CustomText } from "../../atoms";
import { PlayButtonContainer } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import {theme} from '../../../styles'


export const PlayButton = ({label})=>{
    return (
        <PlayButtonContainer>
            <Ionicons name='play' size={theme.metrics.px(14)} color={theme.colors.black} />
            <CustomText color={theme.colors.black} fontFamily='bold' size={theme.metrics.px(14)}>{label}</CustomText>
        
        </PlayButtonContainer>
    )

}