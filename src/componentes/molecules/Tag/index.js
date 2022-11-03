import React from "react";
import { CustomText } from "../../atoms";
import { TagContainer } from "./styles";

export const Tag =({children, ...props})=>{
    return (
        <TagContainer {...props}>
            <CustomText size={14} fontFamily="bold">
                {children}
            </CustomText>
        </TagContainer>
    )
}