import React, { useRef } from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';


//Components
import Toolbar from './components/toolbar';


export default function App() {
  const canvasRef = useRef(SketchCanvasRef);
  const handleClick = () => {
    alert("Reset...");
    canvasRef.current.reset();
  }

  return (
    <SafeAreaView style={styles.container}>
      <SketchCanvas
        ref={canvasRef}
        strokeColor={'black'}
        strokeWidth={8}
        containerStyle={styles.container}
      />
      <Toolbar/>
      <Button onPress={() => handleClick()} title="Reset" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});