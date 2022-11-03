import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GoBackContainer } from "./styles";


export const GoBack =()=>{
    const navigation = useNavigation();
    return (
        <GoBackContainer onPress={()=>navigation.goBack()}>
            <Ionicons size={28} name="chevron-back" color='white'></Ionicons>
        </GoBackContainer>
    )
}