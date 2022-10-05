import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  canvasView: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "black",
    borderRadius: 50,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,  
    elevation: 2,

    marginVertical: 15,
    marginHorizontal: 10,
  },
  canvas: {
    flex: 1,
    borderRadius: 50,
  },
})

export default styles;