import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button, Body, Card, CardItem, DeckSwiper, H3, Icon, Container, Content, List, ListItem, Left, Right, Thumbnail } from 'native-base';
import styles from "./singleProductSliderStyle"; 
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
    		block: "145967",
    		bundle: "5",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x72'",
    		block: "145967",
    		bundle: "5",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x68'",
    		block: "145967",
    		bundle: "5",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x64'",
    		block: "145967",
    		bundle: "5",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x60'",
    		block: "145967",
    		bundle: "5",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x56'",
    		block: "145967",
    		bundle: "5",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x52'",
    		block: "145967",
    		bundle: "5",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x48'",
    		block: "145967",
    		bundle: "5",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x44'",
    		block: "145967",
    		bundle: "5",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    	{
    		avgSize: "114'x40'",
    		block: "145967",
    		bundle: "5",
    		onHand: "6",
    		available: "3",
    		location: "Warehouse",
    		view: require('../../assets/venetian.png'),
    	},
    ]
  }

const B = (props) => <Text style={{fontWeight: '600'}}>{props.children}</Text>

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

	optionsWithList = () => {
		this.setState({ listViewOptions: true, })
	}

	showListView = () => {
		this.setState({ listViewOptions: false, })
		this.state.navigate("SingleProductList", {id: "123741",})
	}

	constructor(props) {
	  super(props);
	  this.state = {      
	    listViewOptions: false,  
	    navigate: this.props.navigation.navigate,
	  }
	}

	render(){

		const {state} = this.props.navigation;

		let ProData  = state.params ? JSON.parse(state.params.ProData)  : "<undefined>";

		return(
			<Container style={styles.container} >
				<Content>
					<Grid style={styles.contentGrid} >
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
									<Col size={30}>
										<Text style={styles.detailTitles}  >Series </Text>
									</Col>
									<Col size={70}>
										<Text numberOfLines={1} style={styles.minDetailsProTextRow} > : {dataSingle.series}</Text>
									</Col>
								</Row>
								<Row>
									<Col size={30}>
										<Text style={styles.detailTitles}  >Color </Text>
									</Col>
									<Col size={70}>
										<Text numberOfLines={1} style={styles.minDetailsProTextRow} > : {dataSingle.color}</Text>
									</Col>
								</Row>
								<Row>
									<Col size={30}>
										<Text style={styles.detailTitles}  >Type </Text>
									</Col>
									<Col size={70}>
										<Text numberOfLines={1} style={styles.minDetailsProTextRow} > : {dataSingle.type}</Text>
									</Col>
								</Row>
								<Row>
									<Col size={30}>
										<Text style={styles.detailTitles}  >SKU </Text>
									</Col>
									<Col size={70}>
										<Text numberOfLines={1} style={styles.minDetailsProTextRow} > : {dataSingle.sku}</Text>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row style={styles.priceRow}>
							<Text style={styles.priceText}>Price per SqFt: ${dataSingle.pricePerSqFt}</Text>
						</Row>	
					</Grid>	
					<View style={ styles.view1 }>
						<View style={ styles.view2 }>
							<DeckSwiper
								looping={true}
								dataSource={dataSingle.variations}
								renderItem={item =>
									<Card style={styles.cardDeckSwiper}>
										<CardItem cardBody>
											<Image 
												style={styles.cardImage} 
												source={item.view} 
											/>
										</CardItem>
										<CardItem style={ styles.cardItemDetails}>
											<Left style={styles.cardItemDetailsLeft}>											
												<Text numberOfLines={1} style={styles.cardItemDetailsText}> <B>Block:</B> {item.block}</Text>
												<Text numberOfLines={1} style={styles.cardItemDetailsText}> <B>Bundle:</B> {item.bundle}</Text>
												<Text numberOfLines={1} style={styles.cardItemDetailsText}> <B>Location:</B> {item.location}</Text>
											</Left>
											<Right style={styles.cardItemDetailsRight}>
												<Text numberOfLines={1} style={styles.cardItemDetailsText}> <B>On-Hand:</B> {item.onHand}</Text>
												<Text numberOfLines={1} style={styles.cardItemDetailsText}> <B>Available:</B> {item.available}</Text>
												<Text numberOfLines={1} style={styles.cardItemDetailsText}> <B>Avg. Size:</B> {item.avgSize}</Text>
											</Right>
										</CardItem>
									</Card>
								}
							/>
						</View>	
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
										onPress={() => this.optionsWithList()}
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

						{this.state.listViewOptions ? <View style={styles.zListViewOptions}>
							<View style={styles.zListViewOptions_1}> 
								<Button transparent 
									block 
									style={styles.zListViewOptions_1_Button}
									onPress={() => this.showListView()}
								>
									<Image 
										style={styles.zListViewOptions_1_ImagIcon}
										resizeMode="contain"
										source={require('../../assets/List.png')}
									/>
									<Text style={styles.zListViewOptions_1_Text}>View as a List</Text>
								</Button>
							</View>
							<View style={styles.zListViewOptions_1} > 
								<Button block style={styles.zListViewOptions_1_Button} transparent>
									<Image 
										style={styles.zListViewOptions_1_ImagIcon}
										resizeMode="contain"
										source={require('../../assets/a-icon.png')}
									/>
									<Text style={styles.zListViewOptions_1_Text}>Add to A-Frame</Text>
								</Button>
							</View>
							<View style={styles.zListViewOptions_1} > 
								<Button block style={styles.zListViewOptions_1_Button} transparent>
									<Image 
										style={styles.zListViewOptions_1_ImagIcon}
										resizeMode="contain"
										source={require('../../assets/viewLarger.png')}
									/>
									<Text style={styles.zListViewOptions_1_Text}>View Larger Photo</Text>
								</Button>
							</View>
							<View style={styles.zListViewOptions_1} > 
								<Button block style={styles.zListViewOptions_1_Button} transparent>
									<Image 
										style={styles.zListViewOptions_1_ImagIcon}
										resizeMode="contain"
										source={require('../../assets/share-bundle.png')}
									/>
									<Text style={styles.zListViewOptions_1_Text}>Share Bundle</Text>
								</Button>
							</View>
							<View style={styles.zListViewOptions_1_cancle} >
								<Button block transparent 
									style={styles.zListViewOptions_1_Button_1}
									onPress={() => this.setState({listViewOptions: false, })}
								>
									<Text style={styles.zListViewOptions_1_Text_1}>Cancle</Text>
								</Button>
							</View>
						</View> : null }
					</View>
				</Content>
				<Footer navigation = {this.props.navigation} />

			</Container>
		);
	}
}	