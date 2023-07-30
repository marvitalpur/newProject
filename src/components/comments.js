import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Appearance,
    Dimensions,
    SafeAreaView,
    StatusBar,
    ScrollView,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import React, { useState, useEffect } from 'react';
import { Avatar, Icon } from 'react-native-paper';


const Comment = ({ image, name, time, Radius, height, typesomething }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [orientation, setOrientation] = useState(true);

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
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },

            {
                _id: 2,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                createdAt: new Date(),
                user: {
                    _id: 2,
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

        // scrollViewRef.scrollToEnd({animated: true});
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
    return (
        <View style={styles.imageContainer}>
            <View style={{ width: '90%' }}>
                {messages.map((message, i) => {
                    return (
                        <>
                            {/* <View
                  style={{
                    width: '70%',
                    backgroundColor:
                      message?.user?._id == 1 ? '#E4E4E4' : '#4059E4',
                    borderRadius: 20,
                    flexDirection:
                      message?.user?._id == 1 ? 'row' : 'row-reverse',
                    marginVertical: 10,
                    alignItems: 'flex-start',
                    alignSelf:
                      message?.user?._id == 1 ? 'flex-start' : 'flex-start',
                  }}> */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 10,
                                    width: '95%',
                                    alignSelf: 'center',
                                }}>
                                <Avatar size={50} source={image} />
                                <View>
                                    <Text
                                        style={{
                                            color: 'black',
                                            fontSize: 15,
                                            marginLeft: 10,
                                            fontWeight: 'bold',
                                        }}>
                                        {name}
                                    </Text>
                                    <Text style={{ color: '#000', marginLeft: 10 }}>
                                        {' '}
                                        {message?.text}{' '}
                                    </Text>
                                    <View style={{ marginLeft: 10, flexDirection: 'row' }}>
                                        <Text>{time}</Text>
                                        <TouchableOpacity>
                                            <Text style={{ marginLeft: 15 }}>Like</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={{ marginLeft: 15 }}>Reply</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </>
                    );
                })}
            </View>

            <View
                style={{
                    width: '100%',
                    height: height || 48,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    elevation: 1,
                    borderRadius: Radius || 50,
                    paddingLeft: 5,
                    // borderWidth: 1,
                    borderColor: '#eee',

                    // position: 'absolute',
                    // bottom: 0,
                    // marginTop: 15,
                    alignSelf: 'center',
                }}>
                <View
                    style={{
                        width: '80%',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 60,
                        marginLeft: 15,
                    }}>
                    <TextInput
                        placeholderTextColor={(colorScheme = 'dark' ? 'grey' : 'grey')}
                        multiline={true}
                        placeholder={typesomething}
                        value={message}
                        onChangeText={text => {
                            setMessage(text.trimStart());
                        }}
                        style={{
                            marginVertical: 5,
                            width: '75%',
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
                    }}>
                    <TouchableOpacity
                        disabled={message.length <= 0}
                        activeOpacity={0.7}
                        onPress={onSend}>
                        <Icon
                            name="send"
                            type="MaterialIcons"
                            style={{ color: message.length <= 0 ? 'grey' : '#4059E4' }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
export default Comment;
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        // justifyContent: 'center',
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