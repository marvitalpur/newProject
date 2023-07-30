import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeScreen from '../screens/homeScreen';
import ChatScreen from '../screens/ChatScreen';
import notification from '../screens/notification';
import { TabBar } from '../components/customtabs';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();
const MyTabs = props => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { backgroundColor: 'transparent', },
            }}
            tabBarPosition="bottom"
            barStyle={{ backgroundColor: '#0000' }}
            tabBar={props => <TabBar ar {...props} />}>
            <Tab.Screen name="homeScreen" component={homeScreen}
                options={{ headerShown: false }} />
            <Tab.Screen
                name='ChatScreen'
                component={ChatScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name='notification'
                component={notification}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name='Account'
                component={Account}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>

    );
};

export default MyTabs;