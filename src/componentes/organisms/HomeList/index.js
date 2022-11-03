import React from "react";
import { FlatList } from "react-native";
import { theme } from "../../../styles";
import { CustomText } from "../../atoms";
import { Card } from "../../molecules";
import { HomeListContainer } from "./styles";



export const HomeList = ({title,data}) =>{
   
    return (
        <HomeListContainer>
            <CustomText ml={theme.metrics.px(24)} fontFamily='black' size={theme.metrics.px(18)}>{title}</CustomText>
         <FlatList
        horizontal={true} 
        data={data}
        renderItem={({item})=><Card item={item}/>}
        keyExtractor={(item)=>String(item.id)}
        contentContainerStyle={{
            paddingTop: theme.metrics.px(12),
            paddingLeft: theme.metrics.px(24),
            paddingBottom: theme.metrics.px(24)
        }}
        
        />
        </HomeListContainer>
     
    
    )
   
}