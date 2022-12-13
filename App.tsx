import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { ImageComponent } from './src/screens/ImageComponent';
import { CalculadoraGorjeta } from './src/screens/CalculadoraGorjeta';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* <Routes /> */}
      {/* <ImageComponent /> */}
      <CalculadoraGorjeta/>
    </>
  );
}


