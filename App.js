import React, { useRef, useState } from 'react';
import { SafeAreaView, Button } from 'react-native';

//Components
import Header from './components/Header/header';
import Toolbar from './components/Toolbar/toolbar';
import Canvas from './components/Canvas/canvas';

//Styles
import styles from './AppStyles';

//Functions
import saveImage from './functions/imageSaver';


export default function App() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('black');
  const [sWidth, setWidth] = useState(8);
  let imageData;

  const handleSave = () => {
    alert("Saved!");
    console.log('hello');
    imageData = canvasRef.current.toImage().encodeToBase64();
    console.log(typeof(imageData));
    // saveImage(image, example);
    saveImage("bruh", imageData);
  }

  return (
    <SafeAreaView style={styles.body}>
      <Header ref={canvasRef} />
      <Canvas color={color} sWidth={sWidth} ref={canvasRef} />
      <Toolbar color={color} setColor={setColor} sWidth={sWidth} setWidth={setWidth} />
      <Button onPress={handleSave} color={"#50C878"} title="Save" />
    </SafeAreaView>
  );
}