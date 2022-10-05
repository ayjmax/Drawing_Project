import React, { useRef, useState } from 'react';
import { View, SafeAreaView, Button } from 'react-native';

//Components
import Toolbar from './components/Toolbar/toolbar';
import Canvas from './components/Canvas/canvas';

//Styles
import styles from './AppStyles';


export default function App() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('black');
  const [sWidth, setWidth] = useState(8);

  const handleClick = () => {
    alert("Reset...");
    canvasRef.current.reset();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Canvas color={color} sWidth={sWidth} ref={canvasRef} />

      <View>
        <Toolbar color={color} setColor={setColor} setWidth={setWidth} />
        <Button style={styles.button} onPress={() => handleClick()} title="Reset" />
      </View>
    </SafeAreaView>
  );
}