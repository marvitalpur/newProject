import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Useraccount from '../components/useraccount'

const FollowScreen = () => {
    const [colorState, setColorSate] = useState(true)

    return (
        <>
            <View style={{
                paddingHorizontal: 15, paddingTop: 10,
                flexDirection: 'row', justifyContent: 'space-between'
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 38, height: 38 }}>
                        <Image source={require('../assets/images/profile.png')} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontSize: 16 }}>FollowScreen</Text>
                        <Text style={{ fontSize: 12 }}>FollowScreen</Text></View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setColorSate(!colorState)
                    }}
                    style={{ elevation: 0.5 }}>
                    <LinearGradient
                        style={{
                            // padding: 12,
                            borderRadius: 3,
                            height: 25,
                            width: 91,
                            justifyContent: 'center',
                            alignItems: 'center'
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
            </View >

            <View style={{
                paddingHorizontal: 10,
                backgroundColor: '#374378', height: 82,
                elevation: 12,
                margin: 10, borderRadius: 20,
                flexDirection: 'row', justifyContent: 'space-between',
                paddingTop: 10
            }}>
                <View style={{
                    paddingHorizontal: 10,
                    flexDirection: 'row', justifyContent: 'space-between'
                }}>
                    <View style={{ width: 38, height: 38 }}>
                        <Image source={require('../assets/images/profile.png')} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={{ fontSize: 18 }}>FollowScreen</Text>
                            <Text style={{ fontSize: 14, padding: 3 }}>upload new post.</Text>

                        </View>
                        <Text style={{ fontSize: 12, }}>FollowScreen</Text>
                    </View>
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 16 }}>Icon</Text>

                </View>
            </View>

            <Useraccount />
        </>
    )
}

export default FollowScreen

const styles = StyleSheet.create({})