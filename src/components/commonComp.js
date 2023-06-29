import React from 'react';
import {
  Alert,
  Linking,
  Platform,
  Share,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
// import * as ImagePicker from 'react-native-image-crop-picker';
import * as rnfs from 'react-native-fs';
import {atob} from 'abab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../utility/theme';
import {StyleSheet, Modal} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {
  getFontSize,
  getResHeight,
  getResWidth,
  hp,
  wp,
} from '../utility/responsive';
import {asyncKeys, BASEURL} from '../config/constants';
import {store} from '../utility/store';
import {Text, IconButton, Colors, TextInput} from 'react-native-paper';

import {VectorIcon} from './VectorIcon';

export const CommonButton = props => {
  const {
    onPress,
    title,
    isLoading,
    buttonStyle,
    backgroundColor,
    titleStyle,
    disabled,
    containerStyle,
  } = props;
  return (
    <Button
      {...props}
      title={title}
      onPress={onPress}
      disabled={disabled}
      disabledStyle={{
        backgroundColor: theme.color.disabledBtn,
      }}
      disabledTitleStyle={{
        color: theme.color.accent,
        fontSize: getFontSize(16),
        fontFamily: theme.font.semiBold,
        fontWeight: 600,
      }}
      titleStyle={[
        {
          color: theme.color.accent,
          fontSize: getFontSize(14),
          fontFamily: theme.font.semiBold,
          fontWeight: 600,
        },
        titleStyle,
      ]}
      loading={isLoading}
      loadingProps={{size: 'small', color: 'white'}}
      containerStyle={[
        containerStyle,
        {
          width: '100%',
          height: getResHeight(45),
        },
      ]}
      buttonStyle={[
        {
          width: '100%',
          height: '100%',
          borderRadius: getResWidth(8),
          backgroundColor: backgroundColor
            ? backgroundColor
            : theme.color.seletedBtn,
        },
        buttonStyle,
      ]}
      letfIcon
    />
  );
};

export const CommonDigitalButton = props => {
  const {
    onPress,
    title,
    isLoading,
    buttonStyle,
    backgroundColor,
    titleStyle,
    disabled,
  } = props;
  return (
    <>
      <Button
        title={title}
        onPress={onPress}
        //disabled={disabled}
        titleStyle={{
          fontSize: getFontSize(12),
          fontFamily: theme.font.semiBold,
          fontWeight: 600,
        }}
        loading={isLoading}
        loadingProps={{size: 'small', color: 'white'}}
        containerStyle={{
          width: '93%',
          justifyContent: 'center',
        }}
        buttonStyle={{
          width: '100%',
          justifyContent: 'center',
          height: hp(5),
          borderRadius: 5,
          backgroundColor: '#2F3B75',
        }}
      />

      <View
        style={{
          position: 'absolute',
          top: -1,
          left: '5%',
          zIndex: 9999,
        }}>
        <IconButton
          icon="download"
          iconColor={'white'}
          size={18}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </>
  );
};
export const MyCardButton = props => {
  const {
    onPress,
    title,
    isLoading,
    buttonStyle,
    backgroundColor,
    titleStyle,
    disabled,
  } = props;
  return (
    <>
      <Button
        title={title}
        onPress={onPress}
        //disabled={disabled}
        titleStyle={{
          fontSize: getFontSize(14),
          fontFamily: theme.font.semiBold,
          fontWeight: 600,
        }}
        loading={isLoading}
        loadingProps={{size: 'small', color: 'white'}}
        containerStyle={{
          width: '100%',
          justifyContent: 'center',
        }}
        buttonStyle={{
          width: '100%',
          marginBottom: '5%',
          justifyContent: 'center',
          height: hp(6),
          borderRadius: 5,
          backgroundColor: '',
          borderColor: '#303254',
          borderWidth: 1,
        }}
      />
    </>
  );
};

export function BannerHeader(props) {
  const {
    title,
    descp: subTitle,
    containerStyle,
    titleStyle,
    subTitleStyle,
  } = props;
  return (
    <>
      <View
        style={[
          {
            width: '90%',
            justifyContent: 'center',
          },
        ]}>
        <Text
          style={[
            {
              fontFamily: theme.font.semiBold,
              fontSize: getFontSize(25),            
              color: 'white',
            },
            titleStyle,
          ]}>
          {title}
        </Text>
        {subTitle && (
          <>
            <Text
              style={[
                {
                  color: '#C0C0C0',
                  fontFamily: theme.font.medium,
                  fontSize: getFontSize(12),
                  marginTop: hp(1),
                },
                subTitleStyle,
              ]}>
              {subTitle}
            </Text>
          </>
        )}
      </View>
    </>
  );
}

export const CardComponent = props => {
  const {cardData, cardOnPress} = props;
  this.state = {};
  return (
    <>
      <TouchableWithoutFeedback onPress={() => cardOnPress(cardData)}>
        <View
          style={{
            paddingVertical: '5%',
            // marginTop: '5%',
            paddingHorizontal: '1%',
            borderRadius: 10,
            borderWidth: 1,
            shadowRadius: 1,
            borderColor: theme.color.primary,
            backgroundColor: '#FAFAFF',
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 1},
            shadowRadius: 5,
            shadowOpacity: 0.1,
            elevation: 5,
            marginBottom: '5%',
            width: '47%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Text
            style={{
              fontFamily: theme.font.bold,
              fontSize: getFontSize(12),
              color: '#303254',
              justifyContent: 'center',
              marginTop: '7%',
            }}>
            {cardData.cardName}
          </Text>
          <Image
            style={{width: 50, height: 50, flexDirection: 'row'}}
            source={cardData.imagePath}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
export const DigitalCardComponent = props => {
  const {cardData, cardOnPress} = props;
  this.state = {};
  return (
    <>
      <TouchableWithoutFeedback onPress={() => cardOnPress(cardData)}>
        <View
          style={{
            paddingVertical: '5%',
            marginTop: '6%',
            paddingHorizontal: '1%',
            borderRadius: 10,
            borderWidth: 1,
            shadowRadius: 1,
            //shadowColor: theme.color.black,
            borderColor: theme.color.primary,
            backgroundColor: '#FAFAFF',
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 1},
            shadowRadius: 5,
            shadowOpacity: 0.1,
            elevation: 5,
            marginBottom: '5%',
            width: '47%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Text
            style={{
              fontFamily: theme.font.bold,
              fontSize: getFontSize(12),
              color: '#303254',
              justifyContent: 'center',
              marginTop: '7%',
            }}>
            {cardData.cardName}
          </Text>
          <Image
            style={{
              width: 60,
              height: 60,
              flexDirection: 'row',
            }}
            source={cardData.imagePath}
          />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
export const ListHeader = props => {
  const {titleTextStyle} = props;
  return (
    <View
      style={[
        {
          // marginTop: '5%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.containerStyle,
      ]}>
      <Text
        style={[
          {
            flex: 1,
            color: theme.color.primary,
            fontSize: getFontSize(13.5),
            fontFamily: theme.font.bold,
            letterSpacing: 0.4,
          },
          titleTextStyle,
        ]}>
        {props.title}
      </Text>
      {props.allOnPress && (
        <Button
          disabled={props.disabled}
          onPress={props.allOnPress}
          title="View More"
          type="clear"
          iconContainerStyle={{}}
          iconPosition={'right'}
          containerStyle={[
            {
              borderRadius: 8,
            },
          ]}
          titleStyle={{
            fontFamily: theme.font.regular,
            fontSize: getFontSize(12.5),
            color: theme.color.secondary,
          }}
          buttonStyle={{}}
        />
      )}
    </View>
  );
};
export const TemplateHeader = props => {
  const {title, descp} = props;
  return (
    <>
      <View
        style={{
          height: hp(10),
          width: '90%',
          top: '60%',
          position: 'absolute',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: theme.font.bold,
            fontSize: getFontSize(13),
            color: 'white',
            zIndex: 9999,
            marginLeft: '5%',
            //marginTop:"5%"
          }}>
          {title}
        </Text>
        {descp && (
          <>
            <Text
              style={{
                fontFamily: theme.font.regular,
                fontSize: getFontSize(20),
                color: 'white',
                zIndex: 9999,
                marginLeft: '5%',
                marginTop: '2%',
              }}>
              {descp}
            </Text>
          </>
        )}
      </View>
    </>
  );
};

export const NFCCardDesign = props => {
  const {from, data, currentIndex, onPress} = props;

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.card,
            {
              marginBottom: data?.length - 1 == currentIndex ? '48%' : '4%',
              marginHorizontal: '1%',
              paddingHorizontal: '4%',
            },
          ]}>
          <View
            style={{
              width: '100%',
              height: hp(20),
              marginTop: '4%',
            }}>
            <Image
              source={theme.assets.card}
              resizeMode="cover"
              style={styles.TemStyle}
            />
          </View>
          <View style={{left: '5%', height: hp(6)}}>
            <Text
              style={{
                marginTop: '2%',
                color: '#353535',
                fontFamily: theme.font.bold,
                fontSize: getFontSize(15),
              }}>
              Visiting Card Name
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export const MyorderDesign = props => {
  const {from, data, currentIndex, onPress} = props;

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.card,
            {
              marginBottom: data?.length - 1 == currentIndex ? '48%' : '4%',
              marginHorizontal: '1%',
              paddingHorizontal: '3%',
            },
          ]}>
          <View
            style={{
              width: '100%',
              height: hp(20),
              marginTop: '4%',
            }}>
            <Image
              source={theme.assets.Foodcard}
              resizeMode="cover"
              style={styles.TemStyle}
            />
          </View>
          <View style={{left: '5%', height: hp(15)}}>
            <Text
              style={{
                marginTop: '2%',
                color: '#353535',
                fontFamily: theme.font.bold,
                fontSize: getFontSize(15),
              }}>
              Card Templates
            </Text>
            <Text
              style={{
                marginTop: '2%',
                color: '#828282',
                fontFamily: theme.font.regular,
                fontSize: getFontSize(12),
              }}>
              Business card | 8 * 5 cm
            </Text>
            <Text
              style={{
                marginTop: '2%',
                color: '#828282',
                fontFamily: theme.font.regular,
                fontSize: getFontSize(12),
              }}>
              12 Jan 2023, 02:00 PM
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export const DigitalCardDesign = props => {
  const {from, data, currentIndex, onPress} = props;

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.card,
            {
              marginBottom: data?.length - 1 == currentIndex ? '5%' : '4%',
              borderColor: '#1B1D43',
            },
          ]}>
          <View
            style={{
              borderRadius: 15,
              height: hp(50),
              borderWidth: 1,
              borderColor: '#B0B0B0',
              margin: '5%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={theme.assets.Logo}
                resizeMode="contain"
                style={{
                  marginTop: '2%',
                  width: wp(20),
                  height: hp(4),
                }}
              />

              <View style={{}}>
                <IconButton
                  style={{
                    marginTop: '6%',
                  }}
                  icon="menu"
                  iconColor={'#303254'}
                  size={25}
                  //onPress={() => console.log('Pressed')}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '4%',
                paddingHorizontal: '5%',
              }}>
              <View
                style={{
                  width: 95,
                  height: 85,
                  borderWidth: 1,
                  borderRadius: 10,
                  overflow: 'hidden',
                  shadowRadius: 1,
                  borderColor: '#FFFFFF',
                  backgroundColor: '#FFFFFF',
                  shadowColor: 'black',
                  shadowOffset: {width: 0, height: 1},
                  shadowRadius: 5,
                  shadowOpacity: 0.1,
                  elevation: 5,
                }}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
                  }}
                  style={{
                    resizeMode: 'cover',
                    height: '100%',
                    width: '100%',
                    borderRadius: 10,
                  }}
                />
              </View>

              <View
                style={{
                  marginTop: '-2%',
                  marginLeft: '5%',
                }}>
                <Text
                  style={{
                    fontFamily: theme.font.bold,
                    fontWeight: 600,
                    fontSize: getFontSize(13),
                    color: '#303254',
                  }}>
                  Abhishek Rathord
                </Text>
                <Text
                  style={{
                    color: '#828282',
                    fontFamily: theme.font.regular,
                    fontSize: getFontSize(12),
                  }}>
                  Lorem ipsum dolor
                </Text>
                <Text
                  style={{
                    color: '#9E9E9E',
                    fontFamily: theme.font.regular,
                    fontSize: getFontSize(12),
                  }}>
                  10+ Views
                </Text>
                <View style={{marginTop: '5%'}}>
                  <CommonDigitalButton
                    title="Brochure"
                    isLoading={this.state.isLoading}
                  />
                </View>
              </View>
            </View>

            <View style={{paddingHorizontal: '4%'}}>
              <Text
                style={{
                  color: '#303254',
                  fontFamily: theme.font.bold,
                  fontSize: getFontSize(14),
                  marginTop: '2%',
                }}>
                Lorem ipsum
              </Text>
              <Text
                style={{
                  color: '#B0B0B0',
                  fontFamily: theme.font.regular,
                  fontSize: getFontSize(12),
                  marginTop: '2%',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit. Tortor
                turpis sodales nulla velit. Nunc cum vitae, rhoncus leo id.
                Volutpat Duis tinunt pretium luctus pulvinar pretium.
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};
export const SectionHeader = props => {
  const {text, textStyle} = props;

  return (
    <>
      <View style={{}}>
        <Text
          style={
            textStyle
              ? textStyle
              : {
                  fontSize: getFontSize(15),
                  fontFamily: theme.font.bold,
                  color: '#353535',
                }
          }>
          {text}
        </Text>
      </View>
    </>
  );
};
export const CommonAlertModal = props => {
  const {
    onClick,
    navigateToBooking,
    message,
    nobtn,
    firstName,
    lastName,
    SaveBtnPressed,
    typeOfModal,
    isVisible,
    sessionModal,
    data,
    loading,
    center,
    alertTitle,
    addBookMark,
    removeBookMark,
  } = props;

  // const [modalVisisle , setModalVisislbe] = React.useState(false)
  console.log(alertTitle);
  const conditionCheck = () => {
    if (
      sessionModal == true ||
      addBookMark == true ||
      removeBookMark == true ||
      nobtn
    ) {
      return true;
    }
  };
  if (sessionModal == true) {
    setTimeout(async () => {
      store.dispatch({type: 'RESSET_STORE'});
      await setUserSession(false);
      props.navigation.navigate('Login');
      await GoogleSignin.signOut();
    }, 800);
  }

  return (
    <Modal
      visible={isVisible}
      // visible = {true}
      // isVisible={isVisible}
      onRequestClose={props.onRequestClose}
      // onSwipeComplete={props.onRequestClose}
      animationType={'fade'}
      // swipeDirection="up"
      // animationIn={'SlideInUP'}
      // coverScreen={true}
      // backdropTransitionInTiming={1000}
      // backdropTransitionOutTiming={2000}
      transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            backgroundColor: 'white',
            //backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
          }}>
          <View
            style={{
              justifyContent: conditionCheck() ? 'center' : 'flex-start',
              alignItems: conditionCheck() ? 'center' : 'flex-start',
            }}>
            {conditionCheck() ? (
              <>
                <VectorIcon
                  type={'Ionicons'}
                  name={
                    sessionModal == true
                      ? 'close-circle-sharp'
                      : addBookMark == true
                      ? 'checkmark-circle-sharp'
                      : 'checkmark-circle-sharp'
                  }
                  size={getFontSize(50)}
                  color={
                    addBookMark == true || removeBookMark == true || nobtn
                      ? theme.color.primary
                      : theme.color.orange
                  }
                />
              </>
            ) : (
              <>
                <Text
                  style={{
                    fontSize: getFontSize(17),
                    fontFamily: theme.font.semiBold,
                    color: theme.color.primary,
                  }}>
                  Alert
                </Text>
              </>
            )}

            <Text
              style={{
                fontSize: getFontSize(12),
                fontFamily: conditionCheck()
                  ? theme.font.semiBold
                  : theme.font.regular,
                marginTop: '3%',
                color: 'black',
                textAlign: conditionCheck() ? 'center' : 'left',
              }}>
              {message
                ? message
                : sessionModal
                ? `Your Session has beesn expired!`
                : addBookMark == true
                ? 'Property has been shortlisted'
                : removeBookMark == true
                ? 'Property has been removed from shortlisted'
                : alertTitle}
            </Text>
            {conditionCheck() ? null : (
              <>
                <View
                  style={{
                    width: '100%',
                    marginTop: '10%',
                  }}>
                  <CommonButton title={'OK'} onPress={onClick} />
                </View>
              </>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const EmptyDataComponet = props => {
  const {title, desc} = props;
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: '2%',
          paddingVertical: '2%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            top: '15%',
            fontFamily: theme.font.medium,
            color: theme.color.primary,
            fontSize: getFontSize(14),
          }}>
          {title}
        </Text>

        {desc !== undefined && (
          <>
            <Text
              style={{
                top: '15%',
                fontFamily: theme.font.medium,
                color: theme.color.black,
                fontSize: getFontSize(12),
              }}>
              {desc}
            </Text>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  card: {
    width: '99%',
    marginBottom: '4%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    shadowRadius: 1,
    borderColor: '#D1D1D1',
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.1,
    elevation: 2,
    margin:5,
    borderRadius: 10,
  },
  TemStyle: {
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 20,
    height: '100%',
    width: '100%',
  },
  logoStyle: {
    height: '50%',
    width: '40%',
  },
});
