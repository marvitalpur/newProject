import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


const Header = ({
    threedost,
    left,
    right,
    text,
    visibleText,
    hiddinText,
    backgroundColor,
    color,
    fontSize,
    fontWeight,
    textAlign,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    borderRadius,
    borderWidth,
    borderColor,
    onPress,
    HeaderText,
    BAckButton,
    headertext2,
    hiddinText1,
    header2,
    text1,
    press,
    barICon,
    onPress1,
    onPress2,
    dots

}) => {
    return (
        <>
            <View style={{ width: '100%', justifyContent: 'center' }}>
                <View style={{}}>
                    <View style={{ flexDirection: 'row', width: '95%', alignItems: 'center' }}>
                        {HeaderText && (
                            <View style={{
                                flexDirection: 'row', width: '100%',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <View>
                                    {hiddinText1 && (
                                        <TouchableOpacity onPress={press} >
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    fontWeight: 'bold',
                                                    color: 'black',
                                                    marginLeft: 10,
                                                    color: '#000'
                                                }}>
                                                {text1}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                                {barICon && (
                                    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                                        <LinearGradient
                                            start={{ x: 1, y: 0.0 }}
                                            end={{ x: 1, y: 1.9 }}
                                            colors={['#5DF7B8', '#3109FB']}
                                            style={{
                                                width: 35,
                                                height: 35,
                                                borderRadius: borderRadius || 5,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                            <Text>nj</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                )}
                            </View>
                        )}
                        {BAckButton && (
                            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                                <LinearGradient
                                    start={{ x: 1, y: 0.0 }}
                                    end={{ x: 1, y: 1.9 }}
                                    colors={['#5DF7B8', '#3109FB']}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        borderRadius: borderRadius || 5,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Text>jjjkk</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        )}
                        {hiddinText && (
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: 'black',
                                    marginLeft: 10,
                                }}>
                                jhdsjgdsjkfgdjks
                            </Text>
                        )}
                    </View>
                    <View style={{}}>
                        {visibleText && (
                            <Text
                                style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    color: 'black',
                                    marginTop: 30,
                                }}>
                                {text}
                            </Text>
                        )}

                    </View>
                    {header2 && (
                        <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ flexDirection: 'row' }} activeOpacity={0.8} onPress={onPress1}>
                                <LinearGradient
                                    start={{ x: 1, y: 0.0 }}
                                    end={{ x: 1, y: 1.9 }}
                                    colors={['#89132E', '#EA0910']}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        borderRadius: borderRadius || 5,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Text>hhh</Text>
                                </LinearGradient>
                                {headertext2 && (
                                    <Text style={{
                                        justifyContent: 'center', textAlign: 'center',
                                        color: '#000', fontSize: 22, marginLeft: 5
                                    }}>Details</Text>
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} onPress={onPress2}
                                style={{ alignSelf: 'flex-end', }}>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </>
    );
};

export default Header;

const styles = StyleSheet.create({});

