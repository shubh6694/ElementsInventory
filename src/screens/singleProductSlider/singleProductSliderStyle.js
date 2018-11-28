const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
	cardDeckSwiper: { 
		elevation: 3,
	},
	cardImage: { 
		height: 185, 
		flex: 1,
	},
	cardItemDetails: { 
		flex: 1, 
		flexDirection: "row",
	},
	cardItemDetailsLeft: {
		alignItems: "flex-start", 
		justifyContent: "flex-start",
		flexDirection: "column",
	},
	cardItemDetailsRight: {
		alignItems: "flex-end", 		
		justifyContent: "flex-end",
		flexDirection: "column",
	},
	cardItemDetailsText: {
		color: "#000",
		fontSize: 17,
	},
	container: {
		backgroundColor: "#fff",
	},
	contentGrid: {
		flex: 0,
		marginLeft: 10,
		marginRight: 10,
	},
	colDetail: { 
		paddingTop: 10, 
		paddingBottom: 10, 
	},
	colHeader: {
		alignItems: "center", 
		justifyContent: "center", 
	},
	colHeaderText: {
		color: "#000",
		fontSize: 17,
		fontWeight: "600",
		textDecorationColor: "#000",
		textDecorationLine: "underline",
	},
	colHeaderTextData: {
		color: "#000",
		fontSize: 17,
		paddingBottom: 10,
		paddingTop: 10,
	},
	detailTitles: {
		color: "#000",
		fontWeight: "600",
		fontSize: 17,
	},
	listImgIcon: {
		height: 30,
		width: 30,
	},
	minDetailsProImage: {
		height: 120,
		width: 135,
		borderRadius: 5,
	},
	minDetailsProImageCol: {
		justifyContent: "center",
		alignItems: "center",
	},
	minDetailsProTextRow: {
		color: "#000",
		fontSize: 17,
	},
	priceRow: { 
		// height: 30,
		justifyContent: "flex-end",
	},
	priceText: {
		color: "#000",
		fontSize: 20,
		fontWeight: "600",
		paddingRight: 15,
	},
	Row1: {
		height: 50,
	},
	Row2: {
		// height: 120,
	},
	singleProTitle: {
		fontWeight: "600",
		paddingBottom: 5,
		paddingLeft: 5,
		paddingTop: 15,
	},
	view1: { 
		flex: 1,
		flexDirection: "column",
		height: deviceHeight-345,
	},
	view2: {
		minHeight: 290,
		// height: deviceHeight-350,
		marginLeft: 10, 
		marginRight: 10, 
		// position: "relative",
	},
	view3: {
		maxHeight: 50,
		flex: 1,
		flexDirection: "row",
		position: "relative",
	},
	view3Inner1: {
		alignItems: "flex-start", 
		justifyContent: "flex-start",
		paddingLeft: 20,
		width: "50%",
	},
	view3Inner2: {
		alignItems: "flex-end", 
		justifyContent: "flex-end",
		paddingRight: 20,
		width: "50%",
	},
	view3InnerImage: {
		width: 30,
		height: "100%",
	},
	zListViewOptions: {
		backgroundColor: "#fff", 
		flexDirection: "column",
		height: "70%", 
		position: "absolute", 
		bottom: 0, 
		width: "100%", 
		zIndex: 99999,
	},
	zListViewOptions_1: {		
		height: "20%", 
		paddingLeft: 20, 
		paddingRight: 20,
		width: "100%", 
		borderBottomWidth: 2,
	},
	zListViewOptions_1_cancle: {		
		height: "20%", 
		width: "100%", 
	},
	zListViewOptions_1_Button: {
		flexDirection:"row", 
		alignItems: "flex-start", 
		justifyContent: "flex-start",
	},
	zListViewOptions_1_Button_1: {
		backgroundColor: "#616161",
		alignItems: "center", 
		flexDirection:"row", 
		justifyContent: "center",
	},
	zListViewOptions_1_ImagIcon: {
		height: "100%", 
		width: 40,
	},
	zListViewOptions_1_Text: {
		fontSize: 17, 
		paddingBottom: 5, 
		paddingLeft: 20, 
		paddingTop: 5, 
	},
	zListViewOptions_1_Text_1: {
		color: "#fff",
		fontSize: 17,
		fontWeight: "600"
	}
};