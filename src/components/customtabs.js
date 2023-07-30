import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const TabBar = props => {
    const { state } = props;
    const tabs = [
        { text: 'homeScreen', navTo: 'homeScreen', },
        { text: 'CHAT', navTo: 'ChatScreen', },
        {
            text: 'notification', navTo: 'notification',
            // img: Images.Logos.notificationIcon,
        },
        { text: 'Account', navTo: 'Account', },
    ];
    const [visible, setVisible] = useState({
        visibles: false,
        invisibles: true,
    });
    return (
        <>
            <SafeAreaView style={styles.tabBarContainer}>
                {/* <View style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}>
        <Tooltips invisible={visible.invisibles} visible={visible.visibles} />
      </View> */}
                <View
                    style={{
                        width: '90%',
                        height: 45,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',

                        shadowColor: '#28A9F633',
                        borderRadius: 20,
                        opacity: 6,
                        // marginTop: -10,
                    }}>
                    {tabs.map((item, i) => (
                        <>
                            <TouchableOpacity
                                onPress={() => {
                                    props.navigation.navigate(item.navTo),
                                        i === 2
                                            ? setVisible({
                                                ...visible,
                                                visibles: true,
                                                invisibles: false,
                                            })
                                            : setVisible({
                                                ...visible,
                                                visibles: false,
                                                invisibles: true,
                                            });
                                }}
                                style={{ alignItems: 'center', justifyContent: 'center' }}
                                key={i}>
                                <LinearGradient
                                    start={{ x: 1, y: 0.0 }}
                                    end={{ x: 1, y: 1.9 }}
                                    colors={
                                        state.index === i
                                            ? ['#89132E', '#EA0910']
                                            : ['#FFFF', '#FFF']
                                    }
                                    style={{
                                        width: 62,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 62,
                                        borderRadius: 20,
                                        backgroundColor: '#000',
                                        // marginTop: state.index === i ? -10 : -20,
                                    }}>
                                    <Image
                                        source={require('../assets/images/homeIcon.png')}
                                        resizeMode={'contain'}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            tintColor: state.index === i ? 'red' : '#4c9c',
                                        }}
                                    />
                                </LinearGradient>

                            </TouchableOpacity>
                        </>
                    ))}
                </View>
            </SafeAreaView>







        </>
    );
};

export { TabBar };

const styles = StyleSheet.create({
    tabBarContainer: {
        borderTopLeftRadius: 20,
        width: '100%',
        height: 80,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        elevation: 5,
    },
});



// <View>
// {state.index === i ? (
//     // <Text
//     //     style={{
//     //         color: state.index === i ? '#4c9c' : '#D3D3D3',
//     //         // marginTop: 5,
//     //         fontSize: 14,
//     //     }}>
//     //     {item.text}
//     // </Text>


//     <Text>
//     </Text>
// ) : null}
// </View>
