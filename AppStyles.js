import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#d3d3d3",
  },
});

export default styles;