import { createStackNavigator } from '@react-navigation/stack';
import homeScreen from '../screens/homeScreen';
import FollowScreen from '../screens/FollowScreen';

import createPost from '../screens/createPost';
import notification from '../screens/notification'
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './bottomTab';
import ChatScreen from '../screens/ChatScreen';
import Account from '../screens/Account';


const Stack = createStackNavigator();

const Homes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="homeScreen" component={homeScreen} />
      <Stack.Screen name="FollowScreen" component={FollowScreen} />
      <Stack.Screen name="createPost" component={createPost} />
      <Stack.Screen name="notification" component={notification} />
      <Stack.Screen name='ChatScreen' component={ChatScreen} />
      <Stack.Screen name='Account' component={Account} />



    </Stack.Navigator >

  )
}

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='MyTabs' component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default MyStack
