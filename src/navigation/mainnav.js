const {createNativeStackNavigator} = require('@react-navigation/native-stack');

import tabbar from './tabbar';
// import {} from '../Screens';

const MainStack = createNativeStackNavigator();

export default function MainNavigation(props) {
  return (
    <>
      <MainStack.Screen
        name="TabNav"
        component={tabbar}
        options={{headerShown: false}}
      />
    </>
  );
}
