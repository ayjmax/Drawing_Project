import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerView: {
    flex: 0,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#d3d3d3',
    elevation: 5,
    marginHorizontal: 10,
    borderRadius: (windowWidth*0.09)/2,
  },
  resetButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: (windowWidth*0.09)/2,
    backgroundColor: '#ff6242',
  },
  undoIcon: {
    width: windowWidth*0.09,
    height: windowHeight*0.05,
    resizeMode: 'contain',
  },
  redoIcon: {
    width: windowWidth*0.09,
    height: windowHeight*0.05,
    resizeMode: 'contain',
    transform: [{scaleX: -1,}],  //Flips image
  },
  headerButtonText: {
    flex: 0,
  },
})

export default styles;