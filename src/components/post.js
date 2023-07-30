import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Post = () => {

    const users = [
        { text: "user1" },

    ]
    return (

        <>
            <View style={{ marginTop: 20 }} />
            <View style={styles.boxCpntainer}>
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        marginTop: 15,
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Homes', { screen: 'account' })}
                            style={{ width: 40, height: 40 }}>
                            <Image
                                source={require('../assets/images/profile.png')}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </TouchableOpacity>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={{ color: '#4B4B4B', fontSize: 16, fontWeight: '400' }}>
                                Name
                            </Text>
                            <Text style={{ color: '#4B4B4B', fontSize: 10 }}>postTime</Text>
                        </View>
                    </View>

                    <Text>right Icon</Text>
                </View>
                <View style={{ alignSelf: 'center', paddingHorizontal: 10, paddingVertical: 10 }}>
                    <Text numberOfLines={1} adjustsFontSizeToFit={true}>Talent Name</Text>
                    <Text numberOfLines={2} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Image source={require('../assets/images/post.png')} />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        // height: '100%',
                        paddingTop: 10,
                        paddingHorizontal: 10,
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
                                source={require('../assets/images/starIcon.png')}
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
                                source={require('../assets/images/shareIcon.png')}
                                style={{ width: 19.07, height: 18.74 }}
                            />
                            <Text style={{ color: 'black', paddingLeft: 5 }}>2.4K</Text>
                        </View>

                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Image
                            source={require('../assets/images/favoriteIcon.png')}
                            style={{ width: 14, height: 17 }}
                        />
                    </View>
                </View>

            </View>
            <View style={{ marginTop: 20 }} />
            <View style={styles.boxCpntainer}>
                <View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        marginTop: 15,
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Homes', { screen: 'account' })}
                            style={{ width: 40, height: 40 }}>
                            <Image
                                source={require('../assets/images/profile.png')}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </TouchableOpacity>
                        <View style={{ marginLeft: 5 }}>
                            <Text style={{ color: '#4B4B4B', fontSize: 16, fontWeight: '400' }}>
                                Name
                            </Text>
                            <Text style={{ color: '#4B4B4B', fontSize: 10 }}>postTime</Text>
                        </View>
                    </View>

                    <Text>right Icon</Text>
                </View>
                <View style={{ alignSelf: 'center', paddingHorizontal: 10, paddingVertical: 10 }}>
                    <Text numberOfLines={1} adjustsFontSizeToFit={true}>Talent Name</Text>
                    <Text numberOfLines={2} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Image source={require('../assets/images/post.png')} />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        // height: '100%',
                        paddingTop: 10,
                        paddingHorizontal: 10,
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
                                source={require('../assets/images/starIcon.png')}
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
                                source={require('../assets/images/shareIcon.png')}
                                style={{ width: 19.07, height: 18.74 }}
                            />
                            <Text style={{ color: 'black', paddingLeft: 5 }}>2.4K</Text>
                        </View>

                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Image
                            source={require('../assets/images/favoriteIcon.png')}
                            style={{ width: 14, height: 17 }}
                        />
                    </View>
                </View>

            </View>
        </>

    )
}

export default Post

const styles = StyleSheet.create({

    boxCpntainer: {

        fontSize: 25,
        backgroundColor: 'green', padding: 5,
        height: 406,
        width: '90%',
        borderRadius: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
        textAlign: 'center'

    }
})