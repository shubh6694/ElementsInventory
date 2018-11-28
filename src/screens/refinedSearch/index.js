import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
import styles from './refinedSearchStyle';

const Item = Picker.Item;

export default class PickerExample extends Component {

	static navigationOptions = ({ navigation }) => ({
	  title: 'Refined Search',
	});

	searchRefined = () => {
		alert("You click on the search")
	}

  onValueChange1 = (value) => {
    this.setState({
      selected1: value
    });
  }
  onValueChange2 = (value) => {
    this.setState({
      selected2: value
    });
  }
  onValueChange3 = (value) => {
    this.setState({
      selected3: value
    });
  }
  onValueChange4 = (value) => {
    this.setState({
      selected4: value
    });
  }
  onValueChange5 = (value) => {
    this.setState({
      selected5: value
    });
  }
  onValueChange6 = (value) => {
    this.setState({
      selected6: value
    });
  }
  onValueChange7 = (value) => {
    this.setState({
      selected7: value
    });
  }
	
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key0",
      selected2: "key0",
      selected3: "key0",
      selected4: "key0",
      selected5: "key0",
      selected6: "key0",
      selected7: "key0",
      navigate: this.props.navigation.navigate,
    };
  }
  render() {
    return (
      <Container style={styles.container} >
        <Content>
          <Form>
	          <View style={styles.mainView}>
	          	<View style={styles.innerMainView1} >
		            <Picker
		              iosHeader="Select one"
		              mode="dropdown"
		              selectedValue={this.state.selected1}
		              onValueChange={ (value) => this.onValueChange1(value)}
		              style={styles.picker1}
		            >
		              <Item style={styles.picker1Item} label="Wallet" value="key0" />
		              <Item style={styles.picker1Item} label="ATM Card" value="key1" />
		              <Item style={styles.picker1Item} label="Debit Card" value="key2" />
		              <Item style={styles.picker1Item} label="Credit Card" value="key3" />
		              <Item style={styles.picker1Item} label="Net Banking" value="key4" />
		            </Picker>
	            </View>
	            <View style={styles.innerMainView2} >
		            <Picker
		              iosHeader="Select two"
		              mode="dropdown"
		              selectedValue={this.state.selected2}
		              onValueChange={ (value) => this.onValueChange2(value)}
		              style={styles.picker2}
		            >
		              <Item label="Wallet" value="key0" />
		              <Item label="ATM Card" value="key1" />
		              <Item label="Debit Card" value="key2" />
		              <Item label="Credit Card" value="key3" />
		              <Item label="Net Banking" value="key4" />
		            </Picker>
	            </View>
            </View>
            <View style={styles.subMainView}>
	            <Picker
	              iosHeader="Select three"
	              mode="dropdown"
	              selectedValue={this.state.selected3}
	              onValueChange={ (value) => this.onValueChange3(value)}
	              style={styles.picker3}
	            >
	              <Item label="Wallet" value="key0" />
	              <Item label="ATM Card" value="key1" />
	              <Item label="Debit Card" value="key2" />
	              <Item label="Credit Card" value="key3" />
	              <Item label="Net Banking" value="key4" />
	            </Picker>
	            <Picker
	              iosHeader="Select four"
	              mode="dropdown"
	              selectedValue={this.state.selected4}
	              onValueChange={ (value) => this.onValueChange4(value)}
	              style={styles.picker3}
	            >
	              <Item label="Wallet" value="key0" />
	              <Item label="ATM Card" value="key1" />
	              <Item label="Debit Card" value="key2" />
	              <Item label="Credit Card" value="key3" />
	              <Item label="Net Banking" value="key4" />
	            </Picker>
	            <Picker
	              iosHeader="Select five"
	              mode="dropdown"
	              selectedValue={this.state.selected5}
	              onValueChange={ (value) => this.onValueChange5(value)}
	              style={styles.picker3}
	            >
	              <Item label="Wallet" value="key0" />
	              <Item label="ATM Card" value="key1" />
	              <Item label="Debit Card" value="key2" />
	              <Item label="Credit Card" value="key3" />
	              <Item label="Net Banking" value="key4" />
	            </Picker>
	            <Picker
	              iosHeader="Select six"
	              mode="dropdown"
	              selectedValue={this.state.selected6}
	              onValueChange={ (value) => this.onValueChange6(value)}
	              style={styles.picker3}
	            >
	              <Item label="Wallet" value="key0" />
	              <Item label="ATM Card" value="key1" />
	              <Item label="Debit Card" value="key2" />
	              <Item label="Credit Card" value="key3" />
	              <Item label="Net Banking" value="key4" />
	            </Picker>
	            <Picker
	              iosHeader="Select seven"
	              mode="dropdown"
	              selectedValue={this.state.selected7}
	              onValueChange={ (value) => this.onValueChange7(value)}
	              style={styles.picker3}
	            >
	              <Item label="Wallet" value="key0" />
	              <Item label="ATM Card" value="key1" />
	              <Item label="Debit Card" value="key2" />
	              <Item label="Credit Card" value="key3" />
	              <Item label="Net Banking" value="key4" />
	            </Picker>
            </View>
            <View style={styles.subSearchMainView}>
	            <View style={styles.searchButtonView}>
	            	<Button style={styles.searchButton} onPress={() => this.searchRefined()} transparent><Text style={styles.searchButtonText}>Search</Text></Button>
	            </View>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}