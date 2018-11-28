const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {	
	header: {
	    backgroundColor: "#fff",
	    elevation: 0,
	    height: 130,
	},
    imgItem: {
        height: 130,
        paddingLeft:20,
        paddingRight:20,
        paddingTop: 15,
    },
    imgStyle: {
        height:100,
        width: deviceWidth-100,
    },
};