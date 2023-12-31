import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
    Dimensions,
} from 'react-native';
import { Images } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';




const PostBox = ({
    profileImg,
    profileTitle,
    postTime,
    boxTitle,
    boxDetail,
    gridImg,
    gridImg1,
    gridImg2,
    gridImg3,
    gridImg4,
    staricon,
    heart,
    singleImg,
    Video,
    price,
    checksingle,
    ImgPress,
    feture,
    GetFeture,
    press,
    Press1,
    profileonpress,
    ImgPress1,
    star,
}) => {
    const [Grid, setGrid] = useState();
    console.log('Grid', Grid);

    const navigation = useNavigation();

    const Dispatch = useDispatch();
    const [icon, setIcon] = useState(
        star === true ? Images.Icons.heart : Images.Icons.Star,
    );

    return (
        <View style={styles.container}>
            <View style={{ width: '95%', alignSelf: 'center', height: '100%' }}>
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        marginTop: 15,
                        justifyContent: 'space-between',
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Homes', { screen: 'account' })}
                            style={{ width: 40, height: 40 }}>
                            <Image
                                source={Images.Pictures.profile}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </TouchableOpacity>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={{ color: '#4B4B4B', fontSize: 16, fontWeight: '400' }}>
                                {profileTitle}
                            </Text>
                            <Text style={{ color: '#4B4B4B', fontSize: 10 }}>{postTime}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ alignSelf: 'flex-end', marginTop: -35, marginRight: 5 }}>
                    <Tip tooltipdata3={true} content1={true} />
                </View>
                <View style={{ width: '100%', marginTop: 20 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>
                        {boxTitle}
                    </Text>
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 13,
                                color: 'black',
                            }}>
                            {boxDetail}
                            {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor... */}
                            <Text style={{ color: '#4A91D5' }}> see more</Text>
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: '100%',
                        height: 170,
                        borderRadius: 20,
                        marginTop: 10,
                    }}>
                    {Grid === false ? (
                        <View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly',
                                    width: '100%',
                                    height: '100%',
                                }}>
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('Homes', {
                                            screen: 'talentscreen',
                                            pararms: {
                                                text1: false,
                                            },
                                        })
                                    }
                                    // onPress={() => navigation.navigate("Homes", { screen: 'talentscreen' })}
                                    style={{ width: '45%', height: '100%' }}>
                                    <Image
                                        source={gridImg}
                                        style={{ width: '100%', height: '100%', borderRadius: 10 }}
                                    // resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                <View
                                    style={{
                                        width: '50%',
                                        height: '100%',
                                    }}>
                                    {/* <Image
                    source={Images.Pictures.postImg1}
                    style={{width: '100%', height: '30%'}}
                  />
                  <Image
                    source={Images.Pictures.postImg1}
                    style={{width: '100%', height: '30%', marginTop: 15}}
                  />
                  <Image
                    source={Images.Pictures.postImg1}
                    style={{width: '100%', height: '30%', marginTop: 15}}
                  /> */}

                                    <View
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            flexDirection: 'row',
                                            justifyContent: 'space-evenly',
                                            alignItems: 'center',
                                        }}>
                                        <View
                                            style={{
                                                width: '45%',
                                                height: '100%',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                            <Image
                                                source={gridImg1}
                                                style={{ width: '100%', height: '45%', borderRadius: 10 }}
                                            />
                                            <Image
                                                source={gridImg4}
                                                style={{
                                                    width: '100%',
                                                    height: '45%',
                                                    marginTop: 15,
                                                    borderRadius: 10,
                                                }}
                                            />
                                        </View>
                                        <View
                                            style={{
                                                width: '45%',
                                                height: '100%',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                            <Image
                                                source={gridImg2}
                                                style={{ width: '100%', height: '45%', borderRadius: 10 }}
                                            />
                                            <Image
                                                source={gridImg3}
                                                style={{
                                                    width: '100%',
                                                    height: '45%',
                                                    marginTop: 15,
                                                    borderRadius: 10,
                                                    backgroundColor: 'black',
                                                    opacity: 0.5,
                                                }}
                                            />
                                            <Text
                                                style={{
                                                    color: 'white',
                                                    position: 'absolute',
                                                    bottom: 20,
                                                    textAlign: 'center',
                                                    fontSize: 15,
                                                }}>
                                                {'30\n More'}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View>
                            <ImageBackground
                                source={singleImg}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                resizeMode="stretch">
                                <TouchableOpacity
                                    // onPress={Press}
                                    onPress={() =>
                                        navigation.navigate(
                                            'Homes',
                                            {
                                                screen: 'talentscreen',
                                            },
                                            Dispatch(addlocation(icon)),
                                        )
                                    }
                                    // title="Go to notifications"
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 10,
                                        borderWidth: 35,
                                        backgroundColor: '#eee',
                                        justifyContent: 'center',
                                        alignSelf: 'center',
                                        opacity: 0.45,
                                    }}>
                                    <Image
                                        source={Images.Icons.play}
                                        resizeMode="contain"
                                        style={{ alignSelf: 'center' }}
                                    />
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                    )}
                </View>
                <View

                    style={{
                        height: 25,
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        bottom: -15,
                    }}>
                    <Text
                        style={{
                            color: 'black',
                            marginTop: 3,
                            fontSize: 10,
                            marginLeft: 10,
                            marginTop: 10,
                            fontSize: 13,
                        }}>
                        {price}
                    </Text>
                    <View
                        style={{
                            width: '0%',
                            height: '70%',
                            marginTop: 0,
                            alignSelf: 'flex-end',
                            flex: 1,
                            marginTop: 10,
                            borderradius: 20,
                        }}>
                        {feture === true ? null : (
                            <View
                                style={{
                                    width: '50%',
                                    height: '100%',
                                    alignSelf: 'flex-end',
                                    borderRadius: 5,
                                    marginBottom: 15,
                                    marginRight: 10,
                                }}>
                                <AppButton
                                    LinearColor1={GetFeture === true ? '#5DF7B8' : 'white'}
                                    LinearColor2={GetFeture === true ? '#3109FB' : 'white'}
                                    color={GetFeture === true ? 'white' : 'black'}
                                    height={'130%'}
                                    borderWidth={GetFeture === true ? 0.5 : 0.8}
                                    borderRadius={GetFeture === true ? 0 : 12}
                                    borderColor={GetFeture === true ? '#707070' : 'black'}
                                    backgroundColor={'#FFFFFF'}
                                    label={GetFeture === true ? 'Get it Featured' : 'Featured'}
                                    onPress={
                                        () =>
                                            GetFeture === true
                                                ? navigation.replace('Homes', { screen: 'getfeatured' })
                                                : navigation.replace('Homes', {
                                                    screen: 'productdetails',
                                                })
                                        // navigation.replace('MyTabs', { screen: 'profile' })
                                    }
                                />
                            </View>
                        )}
                    </View>
                </View>

                <LinearGradient
                    start={{ x: 1.5, y: 1.0 }}
                    end={{ x: 1.5, y: 2.5 }}
                    colors={['#28A9F61A', '#4C9BD2']}
                    style={{
                        width: '105%',
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        alignSelf: 'center',
                        elevation: 0.3,
                        height: 50,
                        position: 'absolute',
                        bottom: 0,
                    }}>
                    <View
                        style={{
                            width: '90%',
                            height: '100%',
                            alignSelf: 'center',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                height: '100%',
                                justifyContent: 'space-between',
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginLeft: 5,
                                    }}>
                                    <Image
                                        source={Images.Logos.msgColorIcon}
                                        style={{ width: 19.07, height: 18.74 }}
                                    />
                                    <Text style={{ color: 'black', paddingLeft: 5 }}>120</Text>
                                </View>

                                <View
                                    style={{
                                        marginLeft: 10,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Image
                                        source={Images.Logos.shareIcon}
                                        style={{ width: 19.07, height: 18.74 }}
                                    />
                                    <Text style={{ color: 'black', paddingLeft: 5 }}>2.4K</Text>
                                </View>
                                {staricon && (
                                    <View
                                        style={{
                                            marginLeft: 10,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Image
                                            source={Images.Icons.Star}
                                            style={{ width: 19.07, height: 18.74 }}
                                        />
                                        <Text style={{ color: 'black', paddingLeft: 5 }}>4.2K</Text>
                                    </View>
                                )}

                                <View
                                    style={{
                                        marginLeft: 10,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    {heart === true ? (
                                        <Icon
                                            type="AntDesign"
                                            name="heart"
                                            style={{
                                                color: '#4059E4',
                                                fontSize: 20,
                                            }}
                                        />
                                    ) : (
                                        <Icon
                                            type="AntDesign"
                                            name="star"
                                            style={{
                                                color: '#4059E4',
                                                fontSize: 20,
                                            }}
                                        />
                                    )}

                                    <Text style={{ color: 'black', paddingLeft: 5 }}>4.2K</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Image
                                    source={Images.Logos.favoriteIcon}
                                    style={{ width: 14, height: 17 }}
                                />
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
};

export default PostBox;

const styles = StyleSheet.create({
    postToolDrop: {
        minWidth: 100,
        zIndex: 1000,
        minHeight: 50,
        position: 'absolute',
        backgroundColor: '#EFF2F7',
        top: 40,
        borderRadius: 14,
        right: '5%',
        padding: 10,
    },

    container: {
        width: '100%',
        height: 406,
        borderRadius: 20,
        elevation: 2,
        backgroundColor: 'white',
    },
    mainContainer: {
        width: '90%',
        height: '100%',
        alignSelf: 'center',
        paddingBottom: 50,
    },
    header: {
        width: '100%',
        height: 100,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statusBox: {
        marginLeft: 5,
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#F54F84',
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusBtn: {
        width: 24,
        height: 24,
        borderRadius: 24,
        borderWidth: 3,
        borderColor: '#F54F84',
        position: 'absolute',
        bottom: -3,
        right: -8,
        backgroundColor: 'white',
    },
    newFeed: {
        fontSize: 20,
        color: '#191919B8',
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold',
    },
    PostVIew: {
        width: '100%',
        height: 442.03,
        zIndex: 1000,
        marginTop: 15,
        borderRadius: 24,
        backgroundColor: '#FFFFFF',
        elevation: 5,
        shadowOffset: 40,
    },
    postHeader: { width: '90%', height: '100%', alignSelf: 'center' },
    postHeaderContentLeft: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    postHeaderImg: {
        width: 29.89,
        height: 29.89,
        borderWidth: 2,
        borderColor: '#F54F84',
        borderRadius: 29,
    },
    postHeaderContentRight: {
        fontSize: 13,
        paddingLeft: 10,
        fontWeight: 'bold',
        color: '#19295C',
    },
    postIcon: {
        height: 22.64,
        width: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    dotLine: {
        width: 22.64,
        height: 22.64,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EFF2F7',
        borderRadius: 20,
    },
    savedImage: {
        width: 12.68,
        height: 3.62,
    },

    icons: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    likeBtn: {
        width: 30.8,
        height: 30.8,
        alignItem: 'center',
        justifyContent: 'center',
    },
    iconBtn: {
        width: 30.8,
        height: 30.8,
        alignItem: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    rightIconBtn: {
        width: 19.93,
        height: 19.93,
        alignItem: 'center',
        justifyContent: 'center',
        backgroundColor: '#1977F3',
        borderRadius: 15,
    },
    rightIconBtn2: {
        width: 19.93,
        height: 19.93,
        alignItem: 'center',
        justifyContent: 'center',
        backgroundColor: '#F31954',
        borderRadius: 15,
    },
});
