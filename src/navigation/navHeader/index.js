import React, {Component, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Button} from 'react-native-elements';

import theme from '../../utility/theme';
import {VectorIcon} from '../../components/VectorIcon';
import {
  getFontSize,
  getResHeight,
  getResWidth,
  wp,
  hp,
} from '../../utility/responsive';
import {
  findLabelStyle,
  findContainerStyle,
  findButtonStyle,
} from '../../config/styleconfig';
import TouchableSensitivity from '../../TouchableSensitivity';
import assets from '../../utility/theme/assets';

const BackBtn = props => {
  const backProps = props.backProps;
  if (backProps) {
    const {title, iconStyle, showIcon = true, onPress, style} = backProps;
    const titleStyle = findLabelStyle(style);
    const containerStyle = findContainerStyle(style);
    const btnStyle = findButtonStyle(style);
    const color = iconStyle && iconStyle.color ? iconStyle.color : '#362B48';
    const clength = backProps.clength ? backProps.clength : 20;
    const btnTitle = props => {
      if (title && title.length > clength) {
        return title.substring(0, clength);
      }
      return title;
    };
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Button
            type={'clear'}
            onPress={() => {
              if (typeof onPress == 'function') {
                onPress();
              } else {
                // props.navigation.pop();
              }
            }}
            iconPosition="right"
            TouchableComponent={props => (
              <TouchableSensitivity props={props} color={'#F1F1F1'} />
            )}
            // icon={assets.headerNotification}
            icon={
              <VectorIcon
                type={'AntDesign'}
                name={'arrowleft'}
                size={getFontSize(25)}
                color={'#362B48'}
              />
            }
            iconContainerStyle={{}}
            containerStyle={[
              {
                width: getResWidth(34),
                height: getResHeight(39),
                borderRadius: 100,
                alignSelf: 'center',
                backgroundColor: '#ffffff',
              },
              containerStyle,
            ]}
            buttonStyle={[
              btnStyle,
              {
                padding: 0,
                width: '100%',
                height: '100%',
              },
            ]}
          />
          <Text
            style={{
              fontSize: getFontSize(14),
              color: '#353535',
              fontFamily: theme.font.Helvetica,
              fontWeight: '700',
            }}>
            {btnTitle()}
          </Text>
        </View>
      </>
    );
    return (
      <Button
        type={'clear'}
        title={btnTitle()}
        onPress={() => {
          console.log('back press', onPress);
          if (typeof onPress == 'function') {
            onPress();
          } else {
            props.navigation.pop();
          }
        }}
        iconPosition="left"
        TouchableComponent={props => (
          <TouchableSensitivity props={props} color={'#F1F1F1'} />
        )}
        icon={
          showIcon ? (
            <VectorIcon
              type={'AntDesign'}
              name={'arrowleft'}
              size={getFontSize(25)}
              color={'#362B48'}
            />
          ) : null
        }
        iconContainerStyle={{}}
        containerStyle={[
          containerStyle,
          {
            width: getResWidth(34),
            height: getResHeight(39),
            borderRadius: 100,
            alignSelf: 'center',
            backgroundColor: '#ffffff',
          },
        ]}
        buttonStyle={[
          btnStyle,
          {
            padding: 0,
            alignItems: 'center',
          },
        ]}
        titleStyle={[
          {
            color: color,
            fontSize:
              title && title.length > clength
                ? getFontSize(14)
                : getFontSize(16),
            fontFamily: theme.font.regular,
            fontWeight: '700',
          },
          titleStyle,
        ]}
        titleProps={{
          numberOfLines: 1,
        }}
      />
    );
  }
  return null;
};

const Logo = props => {
  const logoProps = props.logoProps;
  const {title, iconStyle, onPress, style, type} = logoProps;
  const titleStyle = findLabelStyle(style);
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.accent;
  const clength = 20;
  const btnTitle = props => {
    if (title && title.length > clength) {
      return title.substring(0, clength);
    }
    return title;
  };

  return (
    <Button
      type={'clear'}
      title={btnTitle()}
      disabled={typeof onPress == 'undefined'}
      onPress={() => {
        if (typeof onPress == 'function') {
          onPress();
        } else {
          // props.navigation.pop();
        }
      }}
      iconPosition="left"
      TouchableComponent={props => (
        <TouchableSensitivity props={props} color={color} />
      )}
      icon={
        <Image
          source={type && type == 'primary' ? assets.Logo : assets.FliickLogo}
          resizeMode="contain"
          style={{
            width: getResWidth(88),
            height: getResHeight(30),
            marginLeft: getResWidth(-5),
          }}
        />
      }
      iconContainerStyle={{}}
      containerStyle={[containerStyle]}
      buttonStyle={[
        btnStyle,
        {
          padding: 0,
          alignItems: 'center',
        },
      ]}
      titleStyle={[
        {
          color: color,
          fontSize:
            title && title.length > clength ? getFontSize(14) : getFontSize(16),
          fontFamily: theme.font.regular,
          fontWeight: '700',
          marginTop: '4%',
        },
        titleStyle,
      ]}
      titleProps={{
        numberOfLines: 1,
      }}
    />
  );
};
// const Hamburger = props => {
//   const hamburgerProps = props.hamburgerProps;
//   const {iconStyle, onPress, style} = hamburgerProps;
//   const containerStyle = findContainerStyle(style);
//   const btnStyle = findButtonStyle(style);
//   const color =
//     iconStyle && iconStyle.color ? iconStyle.color : theme.color.secondPrimary;
//   const clength = 20;
//   return (
//     <Button
//       type={'clear'}
//       onPress={() => {
//         if (typeof onPress == 'function') {
//           onPress();
//         } else {
//         }
//       }}
//       iconPosition="right"
//       TouchableComponent={props => (
//         <TouchableSensitivity props={props} color={color} />
//       )}
//       icon={assets.hamburger}
//       iconContainerStyle={{}}
//       containerStyle={[
//         {
//           width: getResWidth(30),
//           height: getResHeight(35),
//           alignSelf: 'center',
//         },
//         containerStyle,
//       ]}
//       buttonStyle={[
//         btnStyle,
//         {
//           width: '100%',
//           height: '100%',
//         },
//       ]}
//     />
//   );
// };
// const Search = props => {
//   const searchProps = props.searchProps;
//   const {iconStyle, iconStyle1, onPress, style} = searchProps;
//   const containerStyle = findContainerStyle(style);
//   const btnStyle = findButtonStyle(style);
//   const color =
//     iconStyle && iconStyle.color ? iconStyle.color : theme.color.secondPrimary;
//   const color1 =
//     iconStyle1 && iconStyle1.color
//       ? iconStyle1.color
//       : theme.color.searchOutline;
//   const clength = 20;
//   return (
//     <Button
//       type={'clear'}
//       onPress={() => {
//         if (typeof onPress == 'function') {
//           onPress();
//         } else {
//           // props.navigation.pop();
//         }
//       }}
//       iconPosition="right"
//       TouchableComponent={props => (
//         <TouchableSensitivity props={props} color={color} />
//       )}
//       icon={theme.svg.SearchIcon({color: color, color1: color1})}
//       iconContainerStyle={{}}
//       containerStyle={[
//         {
//           width: getResWidth(35),
//           height: getResHeight(35),
//           alignSelf: 'center',
//         },
//         containerStyle,
//       ]}
//       buttonStyle={[btnStyle, {width: '100%', height: '100%'}]}
//     />
//   );
// };
const Notification = props => {
  const notificationProps = props.notificationProps;
  const {iconStyle, onPress, style} = notificationProps;
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.dimGray;
  const clength = 20;
  return (
    <Button
      type={'clear'}
      onPress={() => {
        if (typeof onPress == 'function') {
          onPress();
        } else {
          // props.navigation.pop();
        }
      }}
      iconPosition="right"
      TouchableComponent={props => (
        <TouchableSensitivity props={props} color={'#F1F1F1'} />
      )}
      // icon={assets.headerNotification}
      icon={
        <VectorIcon
          type={'MaterialCommunityIcons'}
          name={'bell-outline'}
          size={getFontSize(25)}
          color={color}
        />
      }
      iconContainerStyle={{}}
      containerStyle={[
        {
          width: getResWidth(35),
          height: getResHeight(39),
          borderRadius: 100,
          alignSelf: 'center',
          backgroundColor: '#ffffff',
        },
        containerStyle,
      ]}
      buttonStyle={[
        btnStyle,
        {
          padding: 0,
          width: '100%',
          height: '100%',
        },
      ]}
    />
  );
};
const Edit = props => {
  const {Edit,} = props;

  const {iconStyle, onPress, style , isEdit} = Edit;

  
  console.log('isEdit', isEdit);
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.dimGray;
  const clength = 20;
  return (
    <Button
      type={'clear'}
      title={!isEdit &&'Edit'}
      onPress={() => {
        if (typeof onPress == 'function') {
          onPress();
        } else {
          // props.navigation.pop();
        }
      }}
      iconPosition="right"
      TouchableComponent={props => (
        <TouchableSensitivity props={props} color={'#F1F1F1'} />
      )}
      titleStyle={{
        fontSize: getFontSize(15),
        fontWeight: 400,
        color: theme.color.secondary,
      }}
      icon={
        isEdit && (
          <VectorIcon
            type={'Feather'}
            name={'check'}
            size={getFontSize(25)}
            color={theme.color.secondary}
          />
        )
      }
      iconContainerStyle={{}}
      containerStyle={[
        {
          width: getResWidth(35),
          height: getResHeight(39),
          borderRadius: 100,
          alignSelf: 'center',
          backgroundColor: '#ffffff',
        },
        containerStyle,
      ]}
      buttonStyle={[
        btnStyle,
        {
          padding: 0,
          width: '100%',
          height: '100%',
        },
      ]}
    />
  );
};
const headerTitleStyle = props => {
  const headerTitleStyleProps = props.headerTitleStyleProps;
  const color = headerTitleStyleProps?.color;
  const align = headerTitleStyleProps?.align;
  // const style = headerTitleStyleProps?.style;
  return {
    fontSize: getFontSize(14),
    fontWeight: '600',
    fontFamily: theme.font.regular,
    color: color ? color : '#263154',
    textAlign: align ? align : 'center',
  };
};

const headerBackground = props => {
  const headerTransparent = props.headerTransparent;
  const logoProps = props.logoProps;
  const titleImg = props.titleImage;
  const title = props.title;
  const titlePosition = props.titlePosition;
  const scrolleffect = props.scrolleffect;
  const backStyle = props.headerBackstyle;
  if (typeof headerTransparent == 'boolean' && headerTransparent) {
    return (
      <View
        style={[
          {
            width: '100%',
            height: '100%',
            backgroundColor: theme.color.transparent,
            justifyContent: 'flex-end',
            paddingBottom: getResHeight(8),
          },
          backStyle,
        ]}>
        {logoProps && logoProps.position && logoProps.position == 'center' && (
          <Logo {...props} />
        )}
      </View>
    );
  }
  return (
    <View
      style={[
        {
          width: '100%',
          height: '100%',
          backgroundColor: theme.color.accent,
          borderBottomWidth: 2,
          borderBottomColor: theme.color.accent,
        },
        backStyle,
        scrolleffect && {
          backgroundColor: theme.color.accent,
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 8,
        },
      ]}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* {titleImg && (
          <Image
            source={require('../../assets/img/headerlog00.png')}
            style={[
              {
                width: getResWidth(100),
                height: '100%',
                alignSelf: 'center',
                resizeMode: 'contain',
              },
            ]}
          />
        )} */}
        {/* {placeTextInput()} */}
      </SafeAreaView>
    </View>
  );
};

const headerLeft = props => {
  const logoProps = props.logoProps;
  return (
    <>
      {/* <View
      style={{
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}> */}
      <BackBtn {...props} />
      {logoProps &&
        (!logoProps.position ||
          (logoProps.position && logoProps.position == 'left')) && (
          <Logo {...props} />
        )}
      {/* </View> */}
    </>
  );
};
const headerRight = props => {
  return (
    <>
      {/* {props.searchProps && <Search {...props} />} */}
      {props.notificationProps && <Notification {...props} />}
      {props.Edit && <Edit {...props} />}
      {/*  {props.hamburgerProps && <Hamburger {...props} />} */}
    </>
  );
};

export default function NavigationBar(props) {
  const {navigation} = props;
  const style = props.style;
  const title = props.title;
  // const headerType = props.headerType;
  const headerTransparent = props.headerTransparent;
  const headerLeftContainerStyle = props.headerLeftContainerStyle;
  const headerRightContainerStyle = props.headerRightContainerStyle;

  return {
    // headerShown: props.headerShown ? props.headerShown : true,
    headerStyle: [props.headerStyle, {}],
    title: props.title ? props.title : '',
    titleStyle: {    },
    headerTransparent: headerTransparent ? headerTransparent : false,
    // headerTitleStyle: headerTitleStyle(),
    headerBackground: () => headerBackground(props),
    headerTitleAlign: 'left',
    headerLeft: () => headerLeft(props),
    headerLeftContainerStyle: [
      {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: wp(2.5),
      },
      headerLeftContainerStyle,
    ],
    headerRight: () => headerRight(props),
    headerRightContainerStyle: [
      {
        height: '100%',
        flexDirection: 'row-reverse',
        paddingLeft: wp(3),
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      headerRightContainerStyle,
    ],
  };
}
