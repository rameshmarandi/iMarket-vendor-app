import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import * as Progress from 'react-native-progress';
import {greaterThan} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import {goToScreen} from '../navigation/init';
import {store} from '../store';
import {
  getFontSize,
  getResHeight,
  getResWidth,
  hp,
  wp,
} from '../utility/responsive';
import theme from '../utility/theme';
import {VectorIcon} from '../utility/vectoreicon';

export function LeaderBoard(props) {
  const Data = useSelector(state => state?.auth?.GetallCountforLeaderboard);
  const avarage = divide => {
    try {
      if (Data && typeof Data === 'object' && Data?.AverageScore) {
        let score = Data?.AverageScore;
        if (score !== 'N/A') {
          score = parseFloat(score);
          score = score.toFixed(1);
          return divide ? score / divide : score / 10;
        }
      }
    } catch (err) {
      console.log('Error', err);
    }
    return 0;
  };
  return (
    <TouchableOpacity
      onPress={() => {
        goToScreen('LeaderBoard');
      }}
      style={[
        {
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        },
        {...props.containerStyle},
      ]}>
      <Progress.Circle
        size={getResWidth(20)}
        progress={avarage(5)}
        thickness={getResWidth(2)}
        direction="clockwise"
        color={theme.color.secondPrimary}
        unfilledColor="#F3F3F3"
        fill="#fff"
        borderWidth={0}
        strokeCap="round"
        style={[
          {
            borderRadius: 0,
            // backgroundColor: 'red',
          },
          {
            transform: [{rotate: '1deg'}],
          },
        ]}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <VectorIcon
          type={'FontAwesome'}
          name={'star-half-empty'}
          size={getResWidth(6)}
          color={theme.color.primary}
        />
        <Text
          style={{
            color: theme.color.secondPrimary,
            fontFamily: theme.font.mulish,
            fontSize: getFontSize(8),
            fontWeight: '800',
          }}>
          {/* {avarage() * 10} */}
          {(avarage() * 10).toFixed(1)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function bellIcon(navigation) {
  const bellIconProps = navigation.getParam('bellIconProps');
  if (typeof bellIconProps !== 'undefined') {
    const containerStyle = bellIconProps?.containerStyle;
    const source = bellIconProps?.source;
    const style = bellIconProps?.style;
    const onPress = bellIconProps?.onPress;
    const color = bellIconProps?.color;
    return (
      <Button
        type="clear"
        onPress={() => {
          if (typeof onPress === 'function') {
            onPress();
            return;
          }
          goToScreen('TimeLine');
        }}
        icon={
          <Image
            source={source ? source : theme.PNGImg.bellIcon}
            resizeMode="contain"
            style={[
              {
                width: getResWidth(15),
                height: getResWidth(15),
              },
              {...style},
            ]}
          />
        }
        containerStyle={[{padding: 0}, containerStyle]}
        buttonStyle={[style, {paddingHorizontal: wp(2.5)}]}
      />
    );
  }
  return null;
}

class NavHeader extends Component {
  static navigationOptions = ({navigation}) => {
    const backBtn = () => {
      const backProps = navigation.getParam('backProps');
      if (typeof backProps !== 'undefined') {
        const containerStyle = backProps?.containerStyle;
        const buttonStyle = backProps?.buttonStyle;
        const onPress = backProps?.onPress;
        const color = backProps?.color;
        return (
          <TouchableOpacity onPress={onPress} style={[containerStyle]}>
            <VectorIcon
              size={getFontSize(25)}
              type="Feather"
              name="chevron-left"
              color={color}
              style={[buttonStyle]}
            />
          </TouchableOpacity>
        );
      } else {
        return null;
      }
    };
    const readBtn = () => {
      const readBtnProps = navigation.getParam('readBtnProps');
      if (typeof readBtnProps !== 'undefined') {
        const containerStyle = readBtnProps?.containerStyle;
        const source = readBtnProps?.source;
        const imageStyle = readBtnProps?.imageStyle;
        const onPress = readBtnProps?.onPress;
        return (
          <TouchableOpacity onPress={onPress} style={[containerStyle]}>
            {/* <Image
              source={theme.PNGImg.ReadIcon}
              resizeMode="contain"
              style={{
                width: wp(5),
                height: hp(5),
              }}
            /> */}
          </TouchableOpacity>
        );
      }
      return null;
    };
    const clearBtn = () => {
      const clearBtnProps = navigation.getParam('clearBtnProps');
      if (typeof clearBtnProps !== 'undefined') {
        const containerStyle = clearBtnProps?.containerStyle;
        // const source = clearBtnProps?.source;
        // const imageStyle = clearBtnProps?.imageStyle;
        const buttonStyle = clearBtnProps?.buttonStyle;
        const onPress = clearBtnProps?.onPress;
        const color = clearBtnProps?.color;
        return (
          <TouchableOpacity onPress={onPress} style={[containerStyle]}>
            <Text
              style={{
                fontSize: getFontSize(14),
                fontWeight: '600',
                fontFamily: theme.font.mulish,
                color: '#FF3E3E',
              }}>
              Clear All
            </Text>
          </TouchableOpacity>
        );
      }
      return null;
    };
    const headerTitle = () => {
      const headerTitleProps = navigation.getParam('headerTitleProps');
      if (typeof headerTitleProps !== 'undefined') {
        const style = headerTitleProps?.style;
        const headTitle = headerTitleProps?.headTitle;
        return (
          <Text
            style={[
              {
                fontSize: getFontSize(14),
                fontWeight: '500',
                fontFamily: theme.font.mulish,
                color: theme.color.secondPrimary,
              },
              {...style},
            ]}>
            {headTitle}
          </Text>
        );
      }
      return null;
    };
    const headerNameTitle = () => {
      const headerNameTitleProps = navigation.getParam('headerNameTitleProps');
      if (typeof headerNameTitleProps !== 'undefined') {
        const style = headerNameTitleProps?.style;
        const headTitle = headerNameTitleProps?.headTitle;
        const onPress = headerNameTitleProps?.onPress;
        return (
          <TouchableOpacity
            style={[
              {
                width: wp('8%'),
                height: wp('8%'),

                backgroundColor: '#F0F0F0',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              },
              {...style},
            ]}
            onPress={onPress}>
            <Text
              style={[
                {
                  fontSize: getFontSize(14),
                  fontWeight: '500',
                  fontFamily: theme.font.mulish,
                  color: theme.color.secondPrimary,
                },
                {...style},
              ]}>
              {headTitle}
            </Text>
          </TouchableOpacity>
        );
      }
      return null;
    };
    const imgBtn = () => {
      const imgProps = navigation.getParam('imgProps');
      if (typeof imgProps !== 'undefined') {
        const source = imgProps?.source;
        const style = imgProps?.style;
        return (
          <Image
            source={source}
            resizeMode="contain"
            style={[
              {
                width: wp('10%'),
                height: hp('5%'),
                // borderRadius: 100,
              },
              {...style},
            ]}
          />
        );
      } else {
        return null;
      }
    };

    const uPinBtn = () => {
      const uPinProps = navigation.getParam('uPinProps');
      if (typeof uPinProps !== 'undefined') {
        const onPress = uPinProps?.onPress;
        const style = uPinProps?.style;
        return (
          <Button
            onPress={onPress}
            icon={<theme.SVGImg.pin style={{...style}} />}
            iconContainerStyle={{backgroundColor: theme.color.transparent}}
            containerStyle={{backgroundColor: theme.color.transparent}}
            buttonStyle={{backgroundColor: theme.color.transparent}}
          />
        );
      }
      return null;
    };
    const mailAboutBtn = () => {
      const mailAboutProps = navigation.getParam('mailAboutProps');
      if (typeof mailAboutProps !== 'undefined') {
        const onPress = mailAboutProps?.onPress;
        const style = mailAboutProps?.style;
        return (
          <TouchableOpacity onPress={onPress}>
            <theme.SVGImg.mailAbout style={{...style}} />
          </TouchableOpacity>
          // <Button
          //   onPress={onPress}
          //   icon={<theme.SVGImg.mailAbout style={{...style}} />}
          //   iconContainerStyle={{backgroundColor: theme.color.transparent}}
          //   containerStyle={{backgroundColor: theme.color.transparent}}
          //   buttonStyle={{backgroundColor: theme.color.transparent}}
          // />
        );
      }
      return null;
    };
    const sendMailBtn = () => {
      const sendMailProps = navigation.getParam('sendMailProps');
      if (typeof sendMailProps !== 'undefined') {
        const onPress = sendMailProps?.onPress;
        const style = sendMailProps?.style;
        const showLoader = sendMailProps?.showLoader;
        // return showLoader ? (
        //   <ActivityIndicator size="small" color="red" />
        // ) : (
        //   <TouchableOpacity onPress={onPress}>
        //     <theme.SVGImg.sendMail style={{...style}} />
        //   </TouchableOpacity>
        // );
        return (
          <Button
            loading={showLoader}
            loadingProps={{color: theme.color.secondPrimary}}
            onPress={onPress}
            icon={<theme.SVGImg.sendMail style={{...style}} />}
            iconContainerStyle={{backgroundColor: theme.color.transparent}}
            containerStyle={{
              // height: getResWidth(20),
              // width: getResWidth(20),
              backgroundColor: theme.color.transparent,
            }}
            buttonStyle={{backgroundColor: theme.color.transparent}}
          />

          // <TouchableOpacity onPress={onPress}>
          //   <theme.SVGImg.sendMail style={{...style}} />
          // </TouchableOpacity>
        );
      }
      return null;
    };
    const sendBtn = () => {
      const sendProps = navigation.getParam('sendProps');
      if (sendProps) {
        return sendProps;
      }
      return null;
    };

    const logo = () => {
      const logoProps = navigation.getParam('logoProps');
      if (typeof logoProps !== 'undefined') {
        const source = logoProps?.source;
        return (
          <Image
            source={source}
            resizeMode="contain"
            style={{
              justifyContent: 'flex-start',

              width: wp('20%'),
              height: hp('10%'),
            }}
          />
        );
      } else {
        return null;
      }
    };
    const PersonImgBtn = () => {
      const PersonImgBtnProps = navigation.getParam('PersonImgBtnProps');
      if (typeof PersonImgBtnProps !== 'undefined') {
        const source = PersonImgBtnProps?.source;
        const containerStyle = PersonImgBtnProps?.containerStyle;
        const onPress = PersonImgBtnProps?.onPress;
        return (
          <TouchableOpacity onPress={onPress}>
            <Image
              source={`${source}`}
              resizeMode="contain"
              style={[
                {
                  width: wp('8%'),
                  height: hp('4%'),
                  borderRadius: 100,
                },
                containerStyle,
              ]}
            />
          </TouchableOpacity>
        );
      }
      return null;
    };
    // const PersonShortNameBtn = () => {
    //   const PersonShortNameBtnProps = navigation.getParam(
    //     ' PersonShortNameBtnProps',
    //   );
    //   if (typeof PersonShortNameBtnProps !== 'undefined') {
    //     const source = PersonShortNameBtnProps?.source;
    //     const containerStyle = PersonShortNameBtnProps?.containerStyle;
    //     const onPress = PersonShortNameBtnProps?.onPress;
    //     return (
    //       // <TouchableOpacity
    //       //   onPress={onPress}
    //       //   style={[
    //       //     {
    //       //       width: wp('8%'),
    //       //       height: wp('8%'),

    //       //       backgroundColor: '#F0F0F0',
    //       //       borderRadius: 100,
    //       //       justifyContent: 'center',
    //       //       alignItems: 'center',
    //       //     },
    //       //     ...containerStyle,
    //       //   ]}>
    //       <Text
    //         style={{
    //           color: theme.color.accent,
    //           fontSize: getFontSize(10),
    //         }}>
    //         {source}
    //       </Text>
    //       // </TouchableOpacity>
    //     );
    //   }
    //   return null;
    // };
    const headerBackground = () => {
      const headerBackProps = navigation.getParam('headerBackProps');
      const color = headerBackProps?.color;
      const style = headerBackProps?.style;
      return (
        <View
          style={[
            {
              width: wp('100%'),
              height: '100%',
              backgroundColor: color ? color : 'white',
              // marginVertical: '3%',
            },
            style,
          ]}
        />
      );
    };
    const LeaderBoardBtn = () => {
      const leaderBoardProps = navigation.getParam('leaderBoardProps');
      const containerStyle = leaderBoardProps?.containerStyle;
      const currentScore = leaderBoardProps?.currentScore;
      if (leaderBoardProps) {
        return (
          <LeaderBoard
            containerStyle={containerStyle}
            currentScore={currentScore}
          />
        );
      }
      return null;
    };
    const headerTitleStyle = () => {
      const headerTitleStyleProps = navigation.getParam(
        'headerTitleStyleProps',
      );
      if (typeof headerTitleStyleProps !== 'undefined') {
        const color = headerTitleStyleProps?.color;
        const align = headerTitleStyleProps?.align;
        // const style = headerTitleStyleProps?.style;
        return {
          fontSize: getFontSize(14),
          fontWeight: '600',
          fontFamily: theme.font.mulish,
          color: color ? color : '#263154',
          textAlign: align ? align : 'center',
        };
      }
      return null;
    };
    return {
      // headerShow:
      title: navigation.getParam('title'),
      header: navigation.getParam('header'),
      // headerTitleAlign: 'center',
      headerTitleStyle: headerTitleStyle(),
      // headerStyle: {paddingVertical: 100},
      headerBackground: headerBackground(),
      headerLeft: [logo(), backBtn(), headerTitle()],
      headerLeftContainerStyle: {
        flexDirection: 'row',
        marginLeft: '3.5%',
        alignItems: 'center',
      },
      headerRight: [
        LeaderBoardBtn(),
        bellIcon(navigation),
        imgBtn(),
        PersonImgBtn(),
        headerNameTitle(),
        readBtn(),
        clearBtn(),
        uPinBtn(),
        mailAboutBtn(),
        sendMailBtn(),
        sendBtn(),
        // sendMailBtn1(),
      ],
      headerRightContainerStyle: {
        flexDirection: 'row',
        marginRight: '3.5%',
        alignItems: 'center',
      },
    };
  };
}

export default NavHeader;
