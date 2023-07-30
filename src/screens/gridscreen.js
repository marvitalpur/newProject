import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Gridscreen = () => {

    const [colorState, setColorSate] = useState(true)
    const users = [
        { text: "user1" },
        { text: "user1" },
        { text: "user1" },
        { text: "user1" },
        { text: "user1" },

    ]
    return (
        <View style={{ flex: 1, marginVertical: 30 }}>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                {users.map((item) =>
                    <View style={styles.itemstyle}>
                        <View style={{ backgroundColor: 'pink', width: 50, height: 50 }}>
                            <Image source={require('../assets/images/profile.png')}
                                resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                        </View>
                        <Text style={styles.temstext}>{item.text}</Text>
                        <TouchableOpacity style={{ backgroundColor: '#1492E6', padding: 5, paddingHorizontal: 14, backgroundColor: '#1492E6', borderRadius: 100 }}
                        ><Text style={styles.btntext}>View</Text></TouchableOpacity>
                    </View>)}
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flex: 3, flexDirection: 'row', flexWrap: 'wrap', marginTop: 150, backgroundColor: '#1492E6', }}>
                    {users.map((item) =>
                        <>

                            <View style={[styles.itemstyle,]}>
                                <View style={{
                                    backgroundColor: 'pink', width: 50, height: 50,
                                    borderWidth: 2, borderRadius: 10, borderColor: 'red',
                                }}>
                                    <Image source={require('../assets/images/profile.png')}
                                        resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                                </View>
                                <Text style={styles.temstext}>{item.text}</Text>
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
                            </View>

                        </>
                    )}
                </View>
            </ScrollView>
        </View>


    )
}
export default Gridscreen

const styles = StyleSheet.create({
    itemstyle: {
        fontSize: 25,
        backgroundColor: 'green', margin: 5, padding: 5,
        height: 140,
        width: 120,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    temstext: {
        fontSize: 25,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'

    },
    btntext: {
        color: '#ffff'
    }
})