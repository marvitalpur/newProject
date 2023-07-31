import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post from '../components/post'
import Header from '../components/header'


const PostScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'pink', alignItems: 'center' }}>
            <Header headertext2 header2 visibleText />
            <Post />
        </View>
    )
}

export default PostScreen

const styles = StyleSheet.create({})