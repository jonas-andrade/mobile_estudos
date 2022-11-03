import React from "react";
import {Hero, ScrollContainer } from "../../componentes";
import {useDataStore} from '../../services/stores'


export const Detail=()=>{
    const {DataInitial} = useDataStore();
    return (
       <ScrollContainer >
        <Hero item={DataInitial} />
       </ScrollContainer>
    )
}