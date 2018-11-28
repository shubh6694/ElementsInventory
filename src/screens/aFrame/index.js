import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
import { Button, Card, CardItem, H3, Icon, Container, Content, List, ListItem } from 'native-base';
import styles from "./aFrameStyle";
import Footer from "../../components/footer/index";

const marble    = require('../../assets/venetian.png')
const granite   = require('../../assets/fantasy.png')
const quartzite = require('../../assets/venetian.png')
const onyx      = require('../../assets/fantasy.png')
const other     = require('../../assets/venetian.png')
const quartz    = require('../../assets/fantasy.png')

var data = [
  {
    name : "marble0",
    image: marble,
  },
  {
    name : "granite0",
    image: granite,
  },
  {
    name : "quartzite0",
    image: quartzite,
  },
  {
    name : "onyx0",
    image: onyx,
  },
  {
    name : "other0",
    image: other,
  },
  {
    name : "quartz0",
    image: quartz,
  },
  {
    name : "marble1",
    image: marble,
  },
  {
    name : "granite1",
    image: granite,
  },
  {
    name : "quartzite1",
    image: quartzite,
  },
  {
    name : "onyx1",
    image: onyx,
  },
  {
    name : "other1",
    image: other,
  },
  {
    name : "quartz1",
    image: quartz,
  },
  {
    name : "marble2",
    image: marble,
  },
  {
    name : "granite2",
    image: granite,
  },
  {
    name : "quartzite2",
    image: quartzite,
  },
  {
    name : "onyx2",
    image: onyx,
  },
  {
    name : "other2",
    image: other,
  },
  {
    name : "quartz2",
    image: quartz,
  },
  {
    name : "marble3",
    image: marble,
  },
  {
    name : "granite3",
    image: granite,
  },
  {
    name : "quartzite3",
    image: quartzite,
  },
  {
    name : "onyx3",
    image: onyx,
  },
  {
    name : "other3",
    image: other,
  },
  {
    name : "quartz3",
    image: quartz,
  }
];

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

export default class CollectionProducts extends Component {

	static navigationOptions = ({ navigation }) => ({
	  title: "A-Frame",
	});

	singleProductScreen = (data) => {
		this.state.navigate("SingleProductSlider", {ProData: JSON.stringify(data),})
	}

	constructor(props) {
	  super(props);
	  this.state = {      
	    navigate: this.props.navigation.navigate,     
	  }
	}

	render(){

		let monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];

		let date 		= new Date();
		let monthName 	= monthNames[date.getMonth()];
		let DateVar 	= date.getDate();
		let FullYearVar = date.getFullYear();
		let AmPmTime 	= formatAMPM(date);

		function formatAMPM(date) {
		  var hours = date.getHours();
		  var minutes = date.getMinutes();
		  var ampm = hours >= 12 ? 'pm' : 'am';
		  hours = hours % 12;
		  hours = hours ? hours : 12; // the hour '0' should be '12'
		  minutes = minutes < 10 ? '0'+minutes : minutes;
		  var strTime = hours + ':' + minutes + ' ' + ampm;
		  return strTime;
		}

		return(
			<Container style={styles.container} >
				<Content>
					<List 
						dataArray={data}
						renderRow={(data) =>
						<ListItem style={styles.list}>
							<Grid>
								<Row>
									<H3 style={styles.listProTitle}>{data.name.capitalize()}</H3>
								</Row>
								<Row>
									<Col style={styles.listColGridImage}>
										<Image 
											style={styles.productsImageList}
											source={data.image}
											resizeMode="contain"
										/>
									</Col>
			            <Col style={styles.listColGridText}>
			            	<Row>
			            		<Text style={styles.highlightedText}>Location: </Text>
			            		<Text numberOfLines={1} style={styles.listText}>{data.name}</Text>
		            		</Row>
			            	<Row>
			            		<Text style={styles.highlightedText}>Block: </Text>
			            		<Text numberOfLines={1} style={styles.listText}>{data.name}</Text>
		            		</Row>
			            	<Row>
			            		<Text style={styles.highlightedText}>Bundle: </Text>
			            		<Text numberOfLines={1} style={styles.listText}>{data.name}</Text>
		            		</Row>
			            	<Row>
			            		<Text style={styles.highlightedText}>On-Hand: </Text>
			            		<Text numberOfLines={1} style={styles.listText}>{data.name}</Text>
		            		</Row>
			            	<Row>
			            		<Text style={styles.highlightedText}>Available: </Text>
			            		<Text numberOfLines={1} style={styles.listText}>{data.name}</Text>
		            		</Row>
			            </Col>
		            </Row>
		            <Row>
		            	<Col>
		            		<Row>
			            		<Text style={styles.highlightedText}>Avg. Size	: </Text>
			            		<Text numberOfLines={1} style={styles.listText}>{data.name}</Text>
		            		</Row>
		            		<Row>
			            		<Text style={styles.highlightedText}>Price: </Text>
			            		<Text numberOfLines={1} style={styles.listText}>{data.name}</Text>
		            		</Row>
		            	</Col>
		            	<Col>
			            	<Row><Text style={styles.DateTimeText}>As of {monthName} {DateVar},{FullYearVar} at {AmPmTime}</Text></Row>
			            	<Row style={styles.productsIconListRow}>
			            		<Col>
				            		<Button transparent block>
				            			<Image 
				            				style={styles.productsIconList}
														source={require('../../assets/reload-icon.png')}
														resizeMode="contain"
				            			/>
			            			</Button>
			            		</Col>
			            		<Col>
				            		<Button transparent block onPress={() => this.singleProductScreen(data) }>
				            			<Image 
				            				style={styles.productsIconList}
														source={require('../../assets/Clip-Group.png')}
														resizeMode="contain"	
				            			/>
			            			</Button>
			            		</Col>
			            		<Col>
				            		<Button transparent block>
				            			<Image 
				            				style={styles.productsIconList}
														source={require('../../assets/delete.png')}
														resizeMode="contain"
				            			/>
			            			</Button>
			            		</Col>
			            	</Row>
		            	</Col>
		            </Row>
							</Grid>
						</ListItem>}
					>
					</List>
				</Content>

				<Footer navigation = {this.props.navigation} />
			</Container>
		);
	}

}