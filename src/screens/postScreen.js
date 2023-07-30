import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post from '../components/post'


const PostScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'pink', alignItems: 'center' }}>
            <Post />
        </View>
    )
}

export default PostScreen

const styles = StyleSheet.create({})