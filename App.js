import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Gridscreen from './src/screens/gridscreen';
import PostScreen from './src/screens/postScreen';
import ChatScreen from './src/screens/ChatScreen';
import FollowScreen from './src/screens/FollowScreen';
import MyStack from './src/navigation/stack';
import { Post } from './src/screens/Post';
import { Talent } from './src/screens/Talent';

const app = (props) => {
  return (
    // <Gridscreen />
    <Talent />
    // <PostScreen />
    // <ChatScreen />
    // <FollowScreen />
    // <Post />

    // <MyStack  {...props} />

  )
}

export default app

const styles = StyleSheet.create({})