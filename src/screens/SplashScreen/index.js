import React,{useEffect} from 'react';
import { CustomLogo,CustomText ,Container } from '../../componentes';


export const SplashScreen=({ navigation })=> {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Home')
    },2000)

  },[navigation])
  return (
    <Container  align="center" justify="center">
      <CustomLogo />
      <CustomText>Jonas Medeiros</CustomText>
 
    </Container>
  );
}

