import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Useraccount = () => {
    const [colorState, setColorSate] = useState(true)
    return (
        <View>
            <View>
                <View>
                    <View style={styles.bioBox}>
                        <View style={styles.profilerow}>
                            <View style={{ flexDirection: 'row', width: '90%' }}>
                                <View style={{ backgroundColor: 'pink', width: 50, height: 50 }}>
                                    <Image source={require('../assets/images/profile.png')}
                                        resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                                </View>
                                <View style={styles.userInfo}>
                                    <View>
                                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: -10 }}>
                                            <View>
                                                <Text style={styles.UserName}>userName</Text>
                                                <Text style={{ fontSize: 12 }}>UserEmail</Text>
                                            </View>
                                        </View>
                                        <View style={styles.followerText}>
                                            <View style={{ marginTop: 10 }}>
                                                <Text style={styles.UserPostNumber}>111</Text>
                                                <Text style={styles.UserPost}>Post</Text>
                                            </View>
                                            <TouchableOpacity style={{ marginLeft: 12, marginTop: 10 }}>
                                                <Text style={styles.UserPostNumber}>70</Text>
                                                <Text style={styles.UserPost}>Followers</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ marginLeft: 12, marginTop: 10 }}>
                                                <Text style={styles.UserPostNumber}>56</Text>
                                                <Text style={styles.UserPost}>Following</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                // onPress={pressme}
                                style={{ width: '10%' }}>
                                <LinearGradient
                                    start={{ x: 1, y: 0.0 }}
                                    end={{ x: 1, y: 1.9 }}
                                    colors={['#5DF7B8', '#3109FB']}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        borderRadius: 10,
                                    }}>
                                    <Text>icon</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', height: '40%' }}>
                            <View>
                                <Text style={styles.Bios}>Bio</Text>
                                <Text style={styles.Descriprion}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{ top: -5, backgroundColor: '#fff', justifyContent: 'space-between', borderRadius: 10, height: 35, justifyContent: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setColorSate(!colorState)
                                    }}
                                    style={{ elevation: 0.5, }}>
                                    <LinearGradient
                                        style={{
                                            // padding: 12,
                                            borderRadius: 3,
                                            height: 30,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            paddingHorizontal: 25,
                                        }}
                                        start={{ x: 1, y: 0.0 }}
                                        end={{ x: 1, y: 1.9 }}
                                        colors={[
                                            colorState === true ? '#89132E' : '#eeee',
                                            colorState === true ? '#89132E' : '#ffff',
                                        ]}>
                                        <Text style={{ color: colorState === true ? '#fff' : "#000" }}>{colorState === true ? "follow" : "Unfollow"}</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ borderWidth: 1, height: 29, paddingHorizontal: 15, borderRadius: 5, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', color: '#000' }}>Message</Text>
                            </TouchableOpacity>
                            <View>
                            </View>
                            <TouchableOpacity style={{ borderWidth: 1, paddingHorizontal: 15, height: 29, borderRadius: 5, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', color: '#000' }}>Contact</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View>
                    </View>
                </View>

            </View>
        </View >
    )
}

export default Useraccount

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    screenHeader: {
        width: '90%',
        height: 80,
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    headingTextView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    screenBody: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
    whitebox: {
        width: '90%',
        height: '80%',
        borderRadius: 10,
        backgroundColor: '#fff',
        alignSelf: 'center',
        elevation: 2,
    },

    premiumicon: {
        width: 110,
        height: 65,
        // marginRight: 80

    },
    Image1: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    textbox: {
        width: '100%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    txt1: {
        marginVertical: 10,
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
    },
    txt2: {
        marginVertical: 5,
        color: '#000',
        fontSize: 12,
    },
    rowstyle: {
        width: '95%',
        alignSelf: 'center',
        marginTop: 5,
        padding: 4,
        paddingVertical: 10,
        // borderBottomWidth: 0.70,
        // borderBottomColor: '#aaa',
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    texts: {
        flexDirection: 'row',
        width: '74%',
    },
    btns: {
        width: 91,
        height: 25,
    },
    Pictures: {
        width: 38,
        height: 38,
    },
    textes: {
        justifyContent: 'center',
        marginLeft: 7,
        marginTop: -7,
    },
    bioBox: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        height: 350,
        borderRadius: 20
    },

    profilerow: {
        marginVertical: 15,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    Profilepic: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },

    userInfo: {
        marginLeft: 20,
    },
    UserName: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    UserEmail: {

    },
    followerText: {


        flexDirection: 'row',
        marginTop: -10
    },
    UserPostNumber: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center',
        fontSize: 14,

    },
    UserPost: {
        alignSelf: 'center',
        fontSize: 10,
        letterSpacing: 0.7,
        color: '#000',
        // marginLeft: 20
    },
    Bios: {
        fontSize: 18,
        color: '#000',
        fontWeight: '600',
    },
    Descriprion: {
        fontSize: 14,
        color: '#000',
        marginVertical: 2,
        letterSpacing: 1,
        fontWeight: 'bold',
    },
    btnw: { fontWeight: 'bold', color: 'black' },

    profilerow: {
        marginVertical: 15,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Profilepic: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },

    userInfo: {
        marginLeft: 20,
    },
    UserName: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    UserEmail: {
        marginVertical: 2,
    },
    followerText: {
        flexDirection: 'row',
    },
    UserPostNumber: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center',
        fontSize: 14,
    },
    UserPost: {
        alignSelf: 'center',
        fontSize: 10,
        letterSpacing: 0.7,
        color: '#000',
        // marginLeft: 20
    },
    Bios: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
    },
    Descriprion: {
        fontSize: 12,
        color: '#000',
        marginVertical: 2,
        letterSpacing: 1,
    },
    overlayStyles: {
        width: '90%',
        height: 267,
        // backgroundColor: '#eae',
        borderRadius: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    headertext: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
        color: '#000', textAlign: 'center',
        marginVertical: 10
    },
    contentView: {
        width: '80%',
        alignSelf: 'center',
        // marginVertical: 5

    },
    headertext1: {
        // marginTop: 30,
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
        marginTop: 15,
        // marginVertical: 5


    },
    lighterText: {
        // fontWeight: 'bold',
        fontSize: 14,
        // marginVertical: 5


    },
});
