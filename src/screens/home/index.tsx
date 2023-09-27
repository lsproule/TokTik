import React from "react";
import { View, Text, StyleSheet } from "react-native";
import fireship from "../../assests/RN.mp4";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Post from "../../components/posts";
import NavBar from "../../components/navbar";



const Styles = StyleSheet.create({
    container: {
        color: Colors.black,
    }
}) 



const Home = () => {
    return <View className="h-full w-full">
        <Post video={fireship}></Post>
    </View>
}

export default Home;
