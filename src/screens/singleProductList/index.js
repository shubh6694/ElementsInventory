import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button, Card, CardItem, H3, Icon, Container, Content, List, ListItem } from 'native-base';
import styles from "./singleProductListStyle";
import Footer from "../../components/footer/index";

var dataSingle =  {
    name : "marble0 marble0",
    series: "Basic",
    color: "Gold",
    type: "Granite",
    sku: "123456789",
    pricePerSqFt: "455",
    image: require('../../assets/venetian.png'),
    variations: [
    	{
    		avgSize: "114'x76'",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x72'",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x68'",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x64'",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x58'",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x54'",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x50'",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x56'",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x52'",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x48'",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    ]
  }

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.toProperCase = function() {
  return this.toLowerCase().replace(/^(.)|\s(.)/g, 
      function($1) { return $1.toUpperCase(); });
}

export default class CollectionProducts extends Component {

	static navigationOptions = ({ navigation }) => ({
	  title: "Material Details",
	});

	optionsWithSlider = () => {
		this.setState({ sliderViewOptions: true, })	
	}
	showSliderView = () => {
		this.props.navigation.goBack()
	}

	enlargeImage = (img) => {
		this.state.navigate('EnlargeImage', {img: img})
	}

	constructor(props) {
	  super(props);
	  this.state = {      
	    navigate: this.props.navigation.navigate, 
	    sliderViewOptions: false,    
	  }
	}

	render(){

		const {state} = this.props.navigation;

		// let ProData  = state.params.ProData ? JSON.parse(state.params.ProData)  : "<undefined>";

		return(
			<Container style={styles.container} >
				<Grid style={styles.content} >
					<Row style={styles.Row1}><H3 style={styles.singleProTitle} > {dataSingle.name.toProperCase()} </H3></Row>
					<Row style={styles.Row2}>
						<Col style={styles.minDetailsProImageCol} size={45}>
							<Row>
								<Image 
									style={styles.minDetailsProImage}
									source={dataSingle.image}
									resizeMode="contain"
								/>
							</Row>
						</Col>
						<Col  style={styles.colDetail} size={55}>
							<Row>
								<Col size={25}>
									<Text style={styles.detailTitles}  >Series </Text>
								</Col>
								<Col size={75}>
									<Text numberOfLines={1} style={styles.minDetailsProTextRow} > : {dataSingle.series}</Text>
								</Col>
							</Row>
							<Row>
								<Col size={25}>
									<Text style={styles.detailTitles}  >Color </Text>
								</Col>
								<Col size={75}>
									<Text numberOfLines={1} style={styles.minDetailsProTextRow} > : {dataSingle.color}</Text>
								</Col>
							</Row>
							<Row>
								<Col size={25}>
									<Text style={styles.detailTitles}  >Type </Text>
								</Col>
								<Col size={75}>
									<Text numberOfLines={1} style={styles.minDetailsProTextRow} > : {dataSingle.type}</Text>
								</Col>
							</Row>
							<Row>
								<Col size={25}>
									<Text style={styles.detailTitles}  >SKU </Text>
								</Col>
								<Col size={75}>
									<Text numberOfLines={1} style={styles.minDetailsProTextRow} > : {dataSingle.sku}</Text>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row style={styles.priceRow}>
						<Text style={styles.priceText}>Price per SqFt: ${dataSingle.pricePerSqFt}</Text>
					</Row>
					<Row style={styles.Row3}>
						<Col style={styles.colHeader} size={20}>
							<Text style={styles.colHeaderText} >Avg. Size</Text>
						</Col>
						<Col style={styles.colHeader} size={20}>
							<Text style={styles.colHeaderText} >On Hand</Text>
						</Col>
						<Col style={styles.colHeader} size={20}>
							<Text style={styles.colHeaderText} >Available</Text>
						</Col>
						<Col style={styles.colHeader} size={25}>
							<Text style={styles.colHeaderText} >Location</Text>
						</Col>
						<Col style={styles.colHeader} size={15}>
							<Text style={styles.colHeaderText} >View</Text>
						</Col>
					</Row>
					<Content>
					{ 
						dataSingle.variations.map((data, i) => {   
							return <Row key={i}>
								<Col style={styles.colHeader} size={20}>
									<Text style={styles.colHeaderTextData} >{data.avgSize}</Text>
								</Col>
								<Col style={styles.colHeader} size={20}>
									<Text style={styles.colHeaderTextData} >{data.onHand}</Text>
								</Col>
								<Col style={styles.colHeader} size={20}>
									<Text style={styles.colHeaderTextData} >{data.available}</Text>
								</Col>
								<Col style={styles.colHeader} size={25}>
									<Text style={styles.colHeaderTextData} >{data.location}</Text>
								</Col>
								<Col style={styles.colHeader} size={15}>
									<Button block transparent onPress={() => this.enlargeImage(data.view)}>
									<Image 
										style={styles.listImgIcon}
										source={require('../../assets/view-photos.png')}
										resizeMode="contain"
									/>
									</Button>
								</Col>
							</Row>

						}) 
					}
					</Content>	
				</Grid>	

				{this.state.sliderViewOptions ? <View style={styles.zViewPopUpMain}>
					<View style={styles.zSubViewPopUp} > 
						<Button 
							block transparent 
							style={styles.zSubViewPopUpButton}
							onPress={() => this.showSliderView()}
						>
							<Image 
								style={styles.zSubViewPopUpImgIcon}
								resizeMode="contain"
								source={require('../../assets/view-photos.png')}
							/>
							<Text style={styles.zSubViewPopUpText}>View as a Photos</Text>
						</Button>
					</View>
					<View style={styles.zSubViewPopUp} > 
						<Button block transparent style={styles.zSubViewPopUpButton}>
							<Image 
								style={styles.zSubViewPopUpImgIcon}
								resizeMode="contain"
								source={require('../../assets/a-icon.png')}
							/>
							<Text style={styles.zSubViewPopUpText}>Add to A-Frame</Text>
						</Button>
					</View>
					<View style={styles.zSubViewPopUp} > 
						<Button block transparent style={styles.zSubViewPopUpButton}>
							<Image 
								style={styles.zSubViewPopUpImgIcon}
								resizeMode="contain"
								source={require('../../assets/viewLarger.png')}
							/>
							<Text style={styles.zSubViewPopUpText}>View Larger Photo</Text>
						</Button>
					</View>
					<View style={styles.zSubViewPopUp} > 
						<Button block transparent style={styles.zSubViewPopUpButton}>
							<Image 
								style={styles.zSubViewPopUpImgIcon}
								resizeMode="contain"
								source={require('../../assets/share-bundle.png')}
							/>
							<Text style={styles.zSubViewPopUpText}>Share Bundle</Text>
						</Button>
					</View>
					<View style={styles.zSubViewPopUpCancle} >
						<Button block transparent 
							style={styles.zSubViewPopUpButton_1}
							onPress={() => this.setState({ sliderViewOptions: false, })}
						>
							<Text style={styles.zSubViewPopUpTextCancle}>Cancle</Text>
						</Button>
					</View>
				</View> : 	<View style={styles.viewHeight}>
					<View style={styles.view3}>
						<View style={styles.view3Inner1}>
							<Button transparent 
								onPress={() => this.props.navigation.goBack()}
							>
								<Image
									style={styles.view3InnerImage}
									source={require('../../assets/backArrow.png')}
									resizeMode="contain"
								/>
							</Button>
						</View>
						<View style={styles.view3Inner2}>
							<View>
								<Button transparent 
									onPress={() => this.optionsWithSlider()}
								>
									<Image
									style={styles.view3InnerImage}
									source={require('../../assets/dots.png')}
									resizeMode="contain"
									/>
								</Button>
							</View>
						</View>
					</View>					
				</View>	 }	



				<Footer navigation = {this.props.navigation} />
			</Container>

		);
	}
}	