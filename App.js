import { useFonts, SourceSansPro_900Black, SourceSansPro_700Bold, SourceSansPro_400Regular ,SourceSansPro_600SemiBold } from '@expo-google-fonts/source-sans-pro';
import * as splash from 'expo-splash-screen';
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styles";
import { Routes } from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_900Black, 
    SourceSansPro_700Bold, 
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold
  }); 

  splash.preventAutoHideAsync();
  
  if (!fontsLoaded) {splash.hideAsync();return null;};
  return (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>);
}
