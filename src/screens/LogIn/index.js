import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Body, Button, Card, CheckBox, Container, Content, Form, Icon, Input, Item, ListItem } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
import styles from "./logInScreenStyle";
import BannerHeader from "../../components/BannerHeader/index";


export default class HomeScreen extends Component {
	
	static navigationOptions = {
	  title: "Sign In",
	  headerStyle: {
	    backgroundColor: '#fff',
	    borderBottomColor: '#fff',
	    borderBottomWidth: 0,
	    paddingTop: 2,
	    paddingBottom: 2,
	    justifyContent: 'center',
	  },  
	};

	redirectToHome = () => {
		this.setState({ error: 0, success: 0, })

		this.state.email == "mayank.shinkhedkar@techinfini.com" ? this.state.password == "mayank" ? this.setState({ success: 1, }) : this.setState({ error: 1, }) : this.setState({ error: 1, })

		this.state.success == 1 ? this.state.navigate('Home',{Home: "HomePage"}) : null
	}

	constructor(props) {
	  super(props);
	  this.state = {
	    email: null,
	    error: 0,
	    navigate: this.props.navigation.navigate,
	    password: null,
	    signInBox: 0,
	    success: 0,
	  }
	}

	render() {
		return (
			<Container style={styles.container} >     
				
				<BannerHeader />

				<Content>
					<Form style={styles.formContainer}>
						<Item style={styles.formItem}>
							<Input 
								placeholder="Email" 
								onChangeText={(email) => {this.setState({email}); }}
								value={this.state.email}
								style={styles.formInput}
							/>
							{this.state.success == 1 ? <Icon style={styles.success} name='checkmark-circle' /> : null}
							{this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
						</Item>
						<Item style={styles.formItem} last>
							<Input 
								placeholder="Password" 
								onChangeText={(password) => {this.setState({password}); }}
								value={this.state.password}
								style={styles.formInput}
							/>
							{this.state.success == 1 ? <Icon style={styles.success} name='checkmark-circle' /> : null}
							{this.state.error == 1 ? <Icon style={styles.error} name='close-circle' /> : null}
						</Item>

						<Button style={styles.formButtonSub} onPress={() => this.redirectToHome()}>
						  <Text style={styles.formButtonSubText}>Sign In</Text>
						</Button>

						<ListItem style={styles.listItemCheckBox}>
							<CheckBox 
								checked= {this.state.signInBox === 1 ? true : false}
								color="#323232"
								onPress={() => this.state.signInBox === 0 ? this.setState({ signInBox: 1 }) : this.setState({ signInBox: 0 }) }
							/>
							<Body>
								<Text style={styles.listItemCheckBoxText}>Keep me signed in</Text>
							</Body>					
						</ListItem>

					</Form>
					<Grid>
					  	<Row size={25}>
						  	<Col>
						  		<Button block transparent>
								<Text style={styles.helpTextLeft}> Request Access </Text>
								</Button>
							</Col>
							<Col>
								<Button block transparent style={styles.helpButtonRight}>
									<Text style={styles.helpTextRight}> Need Help? </Text>
								</Button>
							</Col>
						</Row>
						<Row size={25} style={styles.helpRowCenter}>
							<Button block transparent>
								<Text style={styles.helpTextCenter}> Why do I need to sign in?</Text>
							</Button>
						</Row>
					</Grid>
				</Content>
			</Container>
		);
	}
}