import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {store} from '../../utility/store';
import {tabActive} from '../../features/auth';
import {
  SCREENHEIGHT,
  SCREENWIDTH,
  getResHeight,
  getResWidth,
  getFontSize,
} from '../../utility/responsive';
import theme from '../../utility/theme';
import InputBox from '../../components/InputBox';

import {Formik} from 'formik';
import {CommonButton} from '../../components/commonComp';
import NavigationBar from '../../navigation/navHeader';
import {Image} from 'react-native-elements/dist/image/Image';
import {VectorIcon} from '../../components/VectorIcon';
export class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };
    // this.props.navigation.setOptions(
    //   NavigationBar({
    //       title: 'My Insights',
    //       navigation: props.navigation,
    //     notificationProps: {onPress: () => {
    //       this.props.navigation.navigate("Notification")
    //     }},
    //   }),)
  }
  componentDidMount() {}
  render() {
    const authState = store.getState();

    return (
      <Modal
        isVisible={this.props.isModalVisible}
        onBackButtonPress={this.props.onRequestClose}
        deviceWidth={SCREENWIDTH}
        deviceHeight={SCREENHEIGHT}
        style={{flex: 1, margin: 0}}
        coverScreen={true}
        backdropOpacity={0.7}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            // backgroundColor: 'red',
            padding: 10,
          }}>
          <Text
            style={{
              fontFamily: theme.font.bold,
              fontWeight: 'bold',
            }}>
            Add Product
          </Text>

          <Formik
            initialValues={{
              email: 'ramesh@gmail.com',
              password: '12345',
            }}
            onSubmit={() => {}}>
            {({
              values,
              isValid,
              dirty,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
              setFieldTouched,
            }) => (
              <>
                <ScrollView
                  bounces={false}
                  style={
                    {
                      // paddingHorizontal:"3%8
                      // flex: 1,
                    }
                  }>
                  <View
                    style={{
                      width: '100%',
                      alignSelf: 'center',
                      paddingTop: getResHeight(10),
                    }}>
                    <View
                      style={{
                        width: '100%',
                        // padding:"4%",
                        borderWidth: 1,
                        borderRadius: 10,
                        minHeightheight: getResHeight(210),
                        // justifyContent: 'center',
                        // alignItems: 'center',
                      }}>
                      {/* <TouchableOpacity style={{
                        justifyContent:"center",
                        alignItems: 'center'
                      }}>
                        <VectorIcon
                          type={'MaterialIcons'}
                          name={'cloud-upload'}
                          size={getFontSize(45)}
                          color={'black'}
                        />
                        <Text style={{
                          fontSize: getFontSize(15),
                          fontFamily: theme.font.bold,
                          color:"#000000"
                        }}>Click here to upload</Text>
                      </TouchableOpacity> */}

                      <View style={{
                        flexDirection:"row",
                        flexWrap:"wrap",
                        alignItems:"center",
                        justifyContent:"center",
                      }}>
                        {[1, 1, 1, 1, 1, 1, 1, 1,1].map((item, index) => {
                          return (
                            <>
                              <View style={{
                                margin:"2%"
                              }}>
                                <Image
                                  source={{
                                    uri: 'https://www.shutterstock.com/search/product',
                                  }}
                                  style={{
                                    height: getResHeight(80),
                                    width: getResWidth(80),
                                    borderRadius: 5,
                                  }}
                                />

                                <TouchableOpacity
                                  style={
                                    {
                                      // justifyContent: 'center',
                                      // alignItems: 'center',
                                      position: 'absolute',
                                      right: 0,
                                      top: 0,
                                    }
                                  }>
                                  <VectorIcon
                                    type={'Ionicons'}
                                    name={'md-close-circle'}
                                    size={getFontSize(25)}
                                    color={'black'}
                                  />
                                </TouchableOpacity>
                              </View>
                            </>
                          );
                        })}
                      </View>
                    </View>
                    <InputBox
                      multiline
                      label={'Product Name'}
                      placeholder={'Enter product name'}
                      value={values.productName}
                      errorText={errors.productName}
                      onChangeText={handleChange('productName')}
                      onFocus={() => setFieldTouched('productName')}
                      onBlur={() => handleBlur('productName')}
                    />
                    <InputBox
                      multiline
                      label={'Product Description'}
                      placeholder={'Enter product description'}
                      value={values.productDescription}
                      errorText={errors.productDescription}
                      onChangeText={handleChange('productDescription}')}
                      onFocus={() => setFieldTouched('productDescription}')}
                      onBlur={() => handleBlur('productDescription}')}
                    />
                  </View>
                </ScrollView>
                <View style={{}}>
                  <CommonButton
                    title="Login"
                    onPress={() => {}}
                    isLoading={this.state.isLoading}
                    containerStyle={{
                      marginTop: getResHeight(20),
                    }}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </Modal>
    );
  }
}

export default AddProduct;
