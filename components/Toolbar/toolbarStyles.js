import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  toolBarView: {
    flex: 0,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-evenly',

    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  strokeWidthButton: {
    backgroundColor: "#bababa",
  },
  strokeWidthMenu: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    position: "absolute",
    top: -windowHeight*0.505,
    right: windowWidth*0.68,

    width: windowWidth*0.3,
    height: windowHeight*0.5,
    borderRadius: 30,

    zIndex: 3,
    elevation: 5,

    backgroundColor: "#c6c6c6",
  },
  strokeWidthOption: {
    marginVertical: 20,
    paddingHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 10,
  },
  blackLineIcon: (width) => ({
    flex: 1,
    borderRadius: 8,
    maxHeight: width,
    width: (windowWidth*0.3) - 22,
    backgroundColor: 'black',
  }),
  penIcon: {
    flex: 1,
    width: 45,
    height: 45,
  },
  touchOpacity: {
    width: 45,
    height: 45,
    borderRadius: 17,

    alignItems: "center",
    justifyContent: 'center',
  },
  iconColor: (color) => ({
    backgroundColor: color,
  }),
  countContainer: {
    alignItems: "center",
    padding: 10,
  }
})

export default styles;