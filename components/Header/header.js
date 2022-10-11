import React, { useState, useEffect, forwardRef } from "react";
import { View, Text, TouchableOpacity, TouchableHighlight, Image, Button } from "react-native";

//Styling
import styles from "./headerStyles";

//Icons
const undoIcon = require('../../assets/undo.png');


function Header(props, ref) {
  const handleReset = () => {
    alert("Reset...");
    ref.current.reset();
  }

  const handleUndo = () => {
    console.log("Undo pressed");
    ref.current.undo();
  }

  const handleRedo = () => {
    console.log("Redo pressed");
    ref.current.redo();
  }

  return (
    <View style={styles.headerView}>
      {/* <Button style={styles.button} onPress={handleUndo} title="Undo" />
      <Button style={styles.button} onPress={handleRedo} title="Redo" /> */}

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={handleUndo}
        style={styles.headerButton}
      >
        <Image source={undoIcon} style={styles.undoIcon}/>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={handleRedo}
        style={styles.headerButton}
      >
        <Image source={undoIcon} style={styles.redoIcon}/>
      </TouchableOpacity>

      <TouchableHighlight
        activeOpacity={0.6}
        onPress={handleReset}
        underlayColor="#ff8c75"
        style={styles.resetButton}
      >
        <Text style={styles.headerButtonText}>Reset</Text>
      </TouchableHighlight>
    </View>
  );
}

//Exports
export default forwardRef(Header);