import React from "react";
import {CardContainer,CardImage } from './styles'
import { useNavigation } from "@react-navigation/native";
import {useDataStore} from '../../../services/stores';


export const Card = ({ item })=>{
    const { setDataInitial } = useDataStore();
    const navigation = useNavigation();
    const onSelectedData = ()=>{
        setDataInitial(item);
        navigation.navigate('Detail');
    }
    
    return(
        <CardContainer onPress={()=>onSelectedData()}>
            <CardImage source={{ uri: item.image_url }} />
        </CardContainer>
    )
}