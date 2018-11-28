import React, { Component } from 'react';
import { Image, View  } from 'react-native';
import { Button, Container, Content, Icon, Input, Item, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StackNavigator } from 'react-navigation';
import styles from "./homeScreenStyle";
import BannerHeader from "../../components/bannerHeader/index";
import Footer from "../../components/footer/index";

const marble    = require('../../assets/marble-img.png')
const granite   = require('../../assets/granite-img.png')
const quartzite = require('../../assets/quartzite-img.png')
const onyx      = require('../../assets/onyx-img.png')
const other     = require('../../assets/other-img.png')
const quartz    = require('../../assets/quartz-img.png')

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

export default class HomeScreen extends Component {

  redirectToCollectionProducts = (collectionName) => {
    this.state.navigate('CollectionProducts',{id: "123",
      title: collectionName,
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      navigate: this.props.navigation.navigate,
    }
  }

  render() {
    return (
      <Container style={styles.container} >     

        <BannerHeader />
             
        <View searchBar style={styles.searchBarView} >
          <Item>
            <Input placeholder="Search by color name" style={styles.inputSearchColor} />
            <Image
              style={styles.imgSearchIconStyle}
							source={require('../../assets/input-search-icon.png')}
              resizeMode="contain"
            />
          </Item>
        </View>
      
        <Content>
          <Grid>
            <Row style={styles.RowElements}>
          {
            data.map((data, i) => {          
            let collName = data.name.capitalize() 
              return <Button style={styles.buttonElementsCustGrid} key={i} onPress={() => this.redirectToCollectionProducts(collName) }>
                <Col style={styles.ColElementsCustGrid} key={i}>
                  <Image
                    style={styles.imgColElements}
                    source={data.image}
                    resizeMode="contain"
                  />
                  <Text numberOfLines={1} style={styles.textColElements} >{collName}</Text>
                </Col>
              </Button>
            })
          } 
            </Row>
          </Grid>   
        </Content>  

        <View>
          <Button block transparent onPress={() => this.state.navigate('RefinedSearch',{RefinedSearch: "RefinedSearch"})}>
            <Text style={styles.textSearchStyle}>Refined Search</Text>
          </Button>
          <Button block transparent onPress={() => this.state.navigate('LogIn',{Login: "LogInPage"})}>
            <Text style={styles.textSearchStyle}>Log-In</Text>
          </Button>
        </View> 

        <Footer navigation = {this.props.navigation} />
      </Container>
    );
  }
}
