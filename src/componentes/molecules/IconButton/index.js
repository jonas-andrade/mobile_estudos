import React from "react";
import { ButtonContainer } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { CustomText } from "../../atoms";
import {theme} from '../../../styles'

export const IconButton =({iconName , label , onPress})=>{
    return (
        <ButtonContainer onPress={onPress}>
            <Ionicons name={iconName} size={theme.metrics.px(24)} color={theme.colors.white} />
            <CustomText fontFamily='semiBold' size={10} mt={6}>{label}</CustomText>
        </ButtonContainer>
    )
}