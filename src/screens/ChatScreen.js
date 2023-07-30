import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Appearance,
    Dimensions,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TextInput,
    TouchableOpacity,
    statusBarStyle,
    statusBarTransition,
    hidden,
} from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';


const ChatScreen = props => {

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [orientation, setOrientation] = useState(true);
    const [Visible, setVisible] = useState(true);

    const pickerGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            // setimg(image.path);
            console.log(image);
            setVisible(true);
        });
    };
    const pickerCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            // setimg(image.path);
            console.log(image);
            setVisible(true);
        });
    };
    const isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };
    useEffect(() => {
        Dimensions.addEventListener('change', () => {
            setOrientation(isPortrait());
        });
    }, [Dimensions]);
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                createdAt: new Date(),
                // user: {
                //     _id: 1,
                //     name: 'React Native',
                //     avatar: 'https://placeimg.com/140/140/any',
                // },
            },

            {
                _id: 1,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },

        ]);
    }, []);
    const onSend = () => {
        setMessages([
            ...messages,
            {
                _id: 1,
                text: message,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]);
        setMessage('');
        scrollViewRef.scrollToEnd({ animated: true });
    };
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    let [scrollViewRef, setRef] = useState({});
    let colorScheme = Appearance.getColorScheme();
    console.log(colorScheme);

    const [isVisible, setIsVisible] = React.useState(null);
    const [show, setshow] = React.useState(true);
    const [emoji, setemoji] = React.useState({
        value: null,
    });
    console.log(emoji, 'emoji');
    return (

        <SafeAreaView style={styles.screenContainer}>

            <View
                style={{
                    width: '100%',
                    alignSelf: 'center',
                    // paddingTop: 20,
                    // marginTop: 20,
                    height: '100%',
                    // backgroundColor: 'red',
                }}>
                <View
                    style={{
                        width: '100%',
                        height: orientation ? '90%' : '85%',
                        paddingBottom: 10,
                    }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        ref={ref => setRef(ref)}
                        onContentSizeChange={() =>
                            scrollViewRef.scrollToEnd({ animated: true })
                        }>
                        <View
                            style={{ width: '90%', alignSelf: 'center', paddingBottom: 20 }}>
                            {messages.map((message, i) => {
                                return (
                                    <>
                                        {isVisible === i ? (
                                            show === true ? (
                                                <View
                                                    key={i}
                                                    style={{
                                                        width: '50%',
                                                        height: '10%',
                                                        marginLeft: 10,
                                                        justifyContent: 'space-evenly',
                                                        backgroundColor: 'white',
                                                        flexDirection:
                                                            message?.user?._id == 1 ? 'row' : 'row-reverse',
                                                        marginVertical: 10,
                                                        alignItems: 'center',
                                                        elevation: 3,
                                                        alignSelf:
                                                            message?.user?._id == 1
                                                                ? 'flex-start'
                                                                : 'flex-end',
                                                        borderRadius: 10,
                                                    }}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            setemoji({
                                                                ...emoji,
                                                                // value: Images.Pictures.ic_like_fill,
                                                            });
                                                        }}>

                                                        <Text>hhgsgdhjgfdf</Text>

                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            setemoji({
                                                                ...emoji,
                                                                value: Images.Pictures.love2,
                                                            }),
                                                                setshow(false);
                                                        }}>
                                                        <Text>hhgsgdhjgfdf</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            setemoji({
                                                                ...emoji,
                                                                value: Images.Pictures.haha2,
                                                            }),
                                                                setshow(false);
                                                        }}>

                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            setemoji({
                                                                ...emoji,
                                                                value: Images.Pictures.wow2,
                                                            }),
                                                                setshow(false);
                                                        }}>

                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            setemoji({
                                                                ...emoji,
                                                                value: Images.Pictures.sad2,
                                                            }),
                                                                setshow(false);
                                                        }}>

                                                    </TouchableOpacity>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            setemoji({
                                                                ...emoji,
                                                                value: Images.Pictures.angry2,
                                                            }),
                                                                setshow(false);
                                                        }}>

                                                    </TouchableOpacity>
                                                </View>
                                            ) : null
                                        ) : null}
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                flexDirection:
                                                    message?.user?._id == 1 ? 'row' : 'row-reverse',
                                                marginVertical: 10,
                                                alignItems: 'flex-start',
                                                alignSelf:
                                                    message?.user?._id == 1 ? 'flex-start' : 'flex-end',
                                            }}>
                                            <TouchableOpacity
                                                onLongPress={() => {
                                                    setIsVisible(i);
                                                    setemoji({ ...emoji, value: null });
                                                    setshow(true);
                                                }}
                                                style={{
                                                    width: '70%',
                                                    backgroundColor:
                                                        message?.user?._id == 1 ? '#E4E4E4' : '#4059E4',
                                                    borderRadius: 20,
                                                }}>
                                                <View
                                                    style={{
                                                        minHeight: 50,
                                                        paddingVertical: 15,
                                                        overflow: 'hidden',

                                                        // height: '90%',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderRadius: 25,
                                                        paddingHorizontal: 10,
                                                        minWidth: 80,
                                                        // backgroundColor: 'pink',
                                                    }}>
                                                    <Text
                                                        style={{
                                                            color:
                                                                message?.user?._id == 1 ? 'black' : 'white',
                                                        }}>
                                                        {' '}
                                                        {message?.text}{' '}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                            <View
                                                style={{
                                                    alignSelf: 'center',
                                                    position: 'relative',
                                                    right: 10,
                                                }}>

                                            </View>

                                        </View>
                                    </>
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>

                <View
                    style={{
                        width: '90%',
                        height: 48,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        elevation: 2,
                        borderRadius: 50,
                        paddingLeft: 5,
                        borderWidth: 1,
                        borderColor: '#F36C29',
                        backgroundColor: '#fff',
                        position: 'absolute',
                        bottom: 10,
                        alignSelf: 'center',
                    }}>
                    <View
                        style={{
                            width: '70%',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'row',
                            height: 60,
                            // marginLeft: 15,
                        }}>
                        {Visible === true ? (
                            <TouchableOpacity
                                // disabled={message.length <= 0}
                                // activeOpacity={0.7}
                                // onPress={onSend}
                                onPress={() => setVisible(false)}
                                style={{

                                }}>
                                <LinearGradient
                                    style={{

                                        // padding: 12,
                                        borderRadius: 100,
                                        height: 45,
                                        width: 45,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                    start={{ x: 1, y: 0.0 }}
                                    end={{ x: 1, y: 1.9 }}
                                    colors={['#89132E', '#EA0910']}>
                                    <Text>+</Text>
                                </LinearGradient>

                            </TouchableOpacity>
                        ) : (
                            <View style={{ flexDirection: 'row' }}>
                                <LinearGradient
                                    start={{ x: 1, y: 0.0 }}
                                    end={{ x: 1, y: 1.9 }}
                                    colors={['#89132E', '#EA0910']}
                                    style={{
                                        // width: '100%',
                                        height: 35,
                                        borderRadius: 15,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                    }}>
                                    <TouchableOpacity
                                        style={{ backgroundColor: 'yellow', }}
                                        // disabled={message.length <= 0}
                                        // activeOpacity={0.7}
                                        // onPress={onSend}
                                        onPress={() => pickerCamera()}>
                                        <Text>gggg</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{ backgroundColor: 'green', }}
                                        // disabled={message.length <= 0}
                                        // activeOpacity={0.7}
                                        // onPress={onSend}
                                        onPress={() => pickerGallery()}>
                                        <Text>dhjkfdgdj</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{ backgroundColor: 'pink', }}
                                        // disabled={message.length <= 0}
                                        // activeOpacity={0.7}
                                        // onPress={onSend}
                                        onPress={() => Gif()}>
                                        <Text>dhjkfdgdj</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        )}
                        <TextInput
                            placeholderTextColor={(colorScheme = 'dark' ? 'grey' : 'grey')}
                            multiline={true}
                            placeholder="Type Message"
                            value={message}
                            onChangeText={text => {
                                setMessage(text.trimStart());
                            }}
                            style={{
                                width: '65%',
                                color: '#000',
                            }}
                        />
                    </View>
                    <View
                        style={{
                            // width: '8%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            paddingRight: 10,
                            backgroundColor: 'green',
                        }}>
                        <TouchableOpacity
                            disabled={message.length <= 0}
                            activeOpacity={0.7}
                            onPress={onSend}
                            style={{ backgroundColor: 'yellow', }}
                        >
                            <Text>mic</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled={message.length <= 0}
                            activeOpacity={0.7}
                            onPress={onSend}>
                            <Text>click btn</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#e7e',
    },
    screenContainer: {
        flex: 1,
    },

    topComponent: {
        width: '100%',
        backgroundColor: '#e7e',
        height: 90,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        zIndex: 99,
    },
});

export default ChatScreen;