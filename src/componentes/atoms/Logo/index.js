import React from "react";
import logoEmpire from '../../../../assets/LogoEmpire.png';
import { LogoStyle } from "./styles";


const sizes = {
  small: 28,
  large: 64,
}
export const CustomLogo =({size})=>{
    return(
      <LogoStyle source={logoEmpire} size={sizes[size || 'large']} />
    )
};

