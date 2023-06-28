import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SafeAreaView, FlatList} from 'react-native';
import {
  getFontSize,
  getResHeight,
  getResWidth,
  hp,
  wp,
} from '../../utility/responsive';

import {Image} from 'react-native-elements';
import {
  CardComponent,
  CommonButton,
  ListHeader,
  NavHeader,
  TemplateHeader,
} from '../../components/commonComp';

import theme from '../../utility/theme';
import {SearchBar} from 'react-native-elements';
import assets from '../../utility/theme/assets';
import NavigationBar from '../../navigation/navHeader';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions(
      NavigationBar({
        navigation: props.navigation,
        logoProps: {type: 'primary'},
        notificationProps: {onPress: () => {
          this.props.navigation.navigate("Notification")
        }},
      }),
    );
    this.state = {};
  }

  render(){
    return(<>
    
    <View style={{
      flex:1,
      // backgroundColor:"red"
    }}></View>
    </>)
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
