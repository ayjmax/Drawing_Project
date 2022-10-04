import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


function Toolbar() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

//Exports
export default Toolbar;