import React, { useRef, forwardRef } from "react";
import { View } from 'react-native';
import { SketchCanvas } from 'rn-perfect-sketch-canvas';

//Styling
import styles from "./canvasStyles";

function Canvas(props, ref) {
  return (
    <View style={styles.canvasView}>
      <SketchCanvas
        ref={ref}
        strokeColor={props.color}
        strokeWidth={props.sWidth}
        containerStyle={styles.canvas}
      />
    </View>
  );
}

//Exports
export default forwardRef(Canvas);