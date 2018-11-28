import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Button, Footer, FooterTab, Badge } from 'native-base';
import styles from "./footerComponentStyle";

export default class FooterClass extends Component {

  setCurrentTab = (tabTitle) => {

    this.setState({ 
      settingIcon:  0,
      contactIcon:  0,
      searchIcon:   0, 
      specialIcon:  0,
      aFrameIcon:   0,
    })

    switch (tabTitle) {
      case 'settingIcon':
        this.setState({ settingIcon: 1 })
        break;
      case 'contactIcon':
        this.setState({ contactIcon: 1 })
        break;
      case 'searchIcon':
        this.setState({ searchIcon: 1 })
        break;
      case 'specialIcon':
        this.setState({ specialIcon: 1 })
        break;
      case 'aFrameIcon':
        this.setState({ aFrameIcon: 1 })
        this.state.navigate('AFrame',{footer: "footer"})
        break;
      default:
        this.setState({ searchIcon: 1 })
    }

    // tabTitle == "aFrameIcon" ? this.state.navigate('AFrame',{footer: "footer"}) : null;

  }

  constructor(props){
    super(props);
    this.state = {
      settingIcon:  0,
      contactIcon:  0,
      searchIcon:   0, 
      specialIcon:  0,
      aFrameIcon:   0,
      navigate: this.props.navigation.navigate,
    }
  }

  render() {

    // const {navigation} = this.props;

    return (
      <Footer style={styles.footerContainer}>
        <FooterTab style={styles.footerTabContainer}>

          <Button 
            onPress={() => this.setCurrentTab("settingIcon") }            
            vertical
          >
          {this.state.settingIcon === 1 ? <Image
              source={require('../../assets/setting-icon-white.png')}
              style={styles.imgIconStyle}
              resizeMode="contain"
            /> : <Image
              source={require('../../assets/setting-icon.png')}
              style={styles.imgIconStyle}
              resizeMode="contain"
            />}
            {this.state.settingIcon === 1 ?
              <Text style={styles.textIconColorWhite}>Settings</Text>
            :
              <Text style={styles.textIconColor}>Settings</Text>
            }
          </Button>

          <Button 
            onPress={() => this.setCurrentTab("contactIcon") }             
            vertical
          >
            {this.state.contactIcon === 1 ? <Image
              source={require('../../assets/contact-icon-white.png')}
              style={styles.imgIconStyle}
              resizeMode="contain"
            /> : <Image
              source={require('../../assets/contact-icon.png')}
              style={styles.imgIconStyle}
              resizeMode="contain"
            />}
            {this.state.contactIcon === 1 ?
              <Text style={styles.textIconColorWhite}>Contact</Text>
            :
              <Text style={styles.textIconColor}>Contact</Text>
            }
          </Button>

          <Button 
            onPress={() => this.setCurrentTab("searchIcon") }           
            vertical
          >
            {this.state.searchIcon === 1 ? <Image
              source={require('../../assets/search-icon-white.png')}
              style={styles.imgIconStyle}
              resizeMode="contain"
            /> : <Image
              source={require('../../assets/search-icon.png')}
              style={styles.imgIconStyle}
              resizeMode="contain"
            />}
            {this.state.searchIcon === 1 ?
              <Text style={styles.textIconColorWhite}>Search</Text>
            :
              <Text style={styles.textIconColor}>Search</Text>
            }
          </Button>

          <Button 
            onPress={() => this.setCurrentTab("specialIcon") }      
            vertical
          >
            {this.state.specialIcon === 1 ? <Image
              source={require('../../assets/specials-white.png')}
              style={styles.imgIconStyle}
              resizeMode="contain"
            /> : <Image
              source={require('../../assets/specials.png')}
              style={styles.imgIconStyle}
              resizeMode="contain"
            />}
            {this.state.specialIcon === 1 ?
              <Text style={styles.textIconColorWhite}>Specials</Text>
            :
              <Text style={styles.textIconColor}>Specials</Text>
            }
          </Button>
          
          <Button 
            badge 
            onPress={() => this.setCurrentTab("aFrameIcon") } 
            vertical
          >
            {this.state.aFrameIcon === 1 ? <Image
              source={require('../../assets/a-frame-icon-white-update.png')}
              style={styles.imgIconStyleAframe}
              resizeMode="contain"
            /> : <Image
              source={require('../../assets/a-frame-icon-update.png')}
              style={styles.imgIconStyleAframe}
              resizeMode="contain"
            />}
            
            {this.state.aFrameIcon === 1 ? 
              <Badge style={styles.badgeAframeStyleWhite} ><Text style={styles.textAframeStyle} >510</Text></Badge>
              :
              <Badge style={styles.badgeAframeStyle} ><Text style={styles.textAframeStyle} >510</Text></Badge>
            }
            {this.state.aFrameIcon === 1 ? 
              <Text style={styles.textIconColorWhite}>A-Frame</Text>
              :
              <Text style={styles.textIconColor}>A-Frame</Text>
            }
          </Button>

        </FooterTab>
      </Footer>
    );
  }
}