import React from "react";
import { TextStyle } from "./styles";


export const CustomText = ({ children ,...props })=>{
    return(
       <TextStyle {...props}>{children}</TextStyle>
    )
};


