const React = require("react-native");
const { Dimensions, Platform } = React;
import color from "color";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
    buttonSearchStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        width: deviceWidth,
    },
    buttonElementsCustGrid: {
        margin: 2,
        width: deviceWidth / 3 - 6,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    },
    container: {
        backgroundColor: "#fff",
    },
    ColElements: {
        alignItems: 'center', 
        height: 170, 
        paddingBottom: 20, 
        paddingTop: 20, 
    },
    ColElementsCustGrid: {
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgColElements:{
        maxHeight: 125,
        width: (deviceWidth/3) - 20,
    },
    inputSearchColor: {
        color: "#323232",
        fontSize: 20,
    },
    imgSearchIconStyle: {
        height: 25,
    },
    RowElements: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
    },
    searchBarView: {
        backgroundColor: "#f5f5f5",
        borderColor: '#ccc',
        borderRadius: 5,
        elevation: 5,
        shadowColor: '#ccc',
        shadowOpacity: 10,
        shadowRadius: 5,
        margin: 10,
    },
    searchBarInput: {
        padding: 10,
    },
    textColElements: {
        color: "#323232",
        fontSize: 18,
        flex: 1,
        paddingTop: 10, 
        width: "100%",
        textAlign: "center",
    },
    textSearchStyle: {
        color: "#b08d58",
        fontSize: 20,
        fontWeight: "600",
        padding:10,
    },
};