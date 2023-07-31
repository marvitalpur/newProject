import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { Images, Themes } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';


const Talent = ({ feture, navigation }) => {
    const Talent = [
        {
            // profileImg: Images.Pictures.statusImg1,
            profileTitle: 'Veni Paul',
            postTime: '1 hour ago',
            boxTitle: 'Talent Name',
            boxDetail:
                ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',

            // singleImg: Images.Pictures.talent,
            checksingle: 'false',
            // feture: feture ? false : true,
            feture: true,

            Press: () => {
                navigation.navigate('login');
            },
        },
        {
            // profileImg: Images.Pictures.statusImg3,
            profileTitle: 'Alex',
            postTime: '1 hour ago',
            boxTitle: 'Talent Name',
            boxDetail:
                ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor...',

            // singleImg: Images.Pictures.talent,
            checksingle: 'false',

            Press: () => {
                navigation.navigate('login');
            },
            // feture: feture ? false : true,
            feture: false,
        },
    ];

    return (
        <View>
            <FlatList
                data={Talent}
                renderItem={({ item }) => {
                    return (
                        <View style={{ marginTop: 10 }}>
                            <PostBox
                                heart={true}
                                profileTitle={item.profileTitle}
                                postTime={item.postTime}
                                boxTitle={item.boxTitle}
                                boxDetail={item.boxDetail}
                                gridImg={item.gridImg}
                                gridImg1={item.gridImg1}
                                gridImg2={item.gridImg2}
                                gridImg3={item.gridImg3}
                                gridImg4={item.gridImg4}
                                singleImg={item.singleImg}
                                checksingle={item.checksingle}
                                price={''}
                                Press={item.Press}
                                GetFeture={item.feture}
                                feture={feture ? true : false}
                                star={true}

                            // GetFeture={item.feture}
                            // feture={feture ? true : false}
                            />
                        </View>
                    );
                }}
            />
        </View>
    );
};
export { Talent };
