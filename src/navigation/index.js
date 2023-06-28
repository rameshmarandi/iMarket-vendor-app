import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthNavigation from './authnav';
import MainNavigation from './mainnav';

const RootStack = createNativeStackNavigator();

export default function FliikNavigation(props) {
  const {isLogedIn} = props;
  return (
    <RootStack.Navigator>
      {AuthNavigation()}
      {MainNavigation()}
    </RootStack.Navigator>
  );
}
