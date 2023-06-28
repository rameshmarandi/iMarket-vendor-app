import React, {Component, useEffect} from 'react';
import {Animated, StatusBar, Text, LogBox, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider as MenuProvider} from 'react-native-paper';

import {store, persistor} from './src/utility/store';
import theme from './src/utility/theme';
import {isLoggdIn} from './src/components/commonFunction';
import FliikNavigation from './src/navigation';
import { getFontSize } from './src/utility/responsive';

LogBox.ignoreAllLogs(true);
function AnimatedSlash() {
  const width = new Animated.Value(0);
  const height = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(
      width, // The animated value to drive
      {
        toValue: 150, // Animate to opacity: 1 (opaque)
        duration: 1800, // Make it take a while
        useNativeDriver: false,
      },
    ).start(); // Starts the animation
    Animated.timing(
      height, // The animated value to drive
      {
        toValue: 100, // Animate to opacity: 1 (opaque)
        duration: 1800, // Make it take a while
        useNativeDriver: false,
      },
    ).start(); // Starts the animation
  }, []);

  return (
    <Animated.View
      style={{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontSize:getFontSize(25),
        color:"white",
        fontWeight:"bold",
        textAlign: "center"
      }}>iMarket{'\n'}Vendor App</Text>
      </Animated.View>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoding: true,
      isLogedIn: null,
    };
  }
  async componentDidMount() {
    setTimeout(async () => {
      let userSession = await isLoggdIn();
      this.setState({
        isLogedIn: userSession,
      });
    }, 1850);
  }
  render() {
    const {isLogedIn} = this.state;
    if (isLogedIn != null) {
      return (
        <Provider store={store}>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            translucent={true}
            backgroundColor={theme.color.transparent}
          />
          <PersistGate persistor={persistor}>
            <MenuProvider>
              <NavigationContainer>
                <FliikNavigation isLogedIn={this.state.isLogedIn} />
              </NavigationContainer>
            </MenuProvider>
          </PersistGate>
        </Provider>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.color.primary,
        }}>
        <AnimatedSlash />
      </View>
    );
  }
}
