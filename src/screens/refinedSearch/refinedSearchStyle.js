const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
	container: {
		backgroundColor: "#fff",
	},
	mainView: {
		flex: 1, 
		flexDirection: "row", 
	},
	innerMainView1: {
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	innerMainView2: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	picker1: {
		backgroundColor: "#323232",
		// color: "#fff",
		width: deviceWidth/2 - 15,
		margin: 10,
		marginTop: 20,
		// marginLeft: 10,
		marginRight: 5,
	},
	picker2: {
		backgroundColor: "#323232",
		// color: "#fff",
		width: deviceWidth/2 - 15,
		margin: 10,
		marginTop: 20,
		// marginRight: 10,
		marginLeft: 5,
	},
	picker3: {
		backgroundColor: "#323232",
		// color: "#fff",
		margin: 10,
		width: deviceWidth-20,
	},
	picker1Item: {
		color: "#fff",
	},
	searchButtonView: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	searchButton: {
		backgroundColor: "#323232",
		alignItems: 'center',
		justifyContent: 'center',
		width: deviceWidth/2,
		margin: 10,
	},
	searchButtonText: {
		color: "#fff",
	},
	subSearchMainView: {
		alignItems: 'center',
		justifyContent: 'center',
	},
};