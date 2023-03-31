import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  useColorScheme, 
} from 'react-native';
import NavBar from './src/components/navbar';
import Home from './src/screens/home';


/// <reference types="nativewind/types" />
function App(): JSX.Element {
  //const isDarkMode = useColorScheme() === 'dark';

  return (
    <View className='flex-1'>
    <SafeAreaView style={{flex:.92}} className='w-full '>
      <Home></Home>
    </SafeAreaView>
    <NavBar ></NavBar>
    </View>
  );
}


export default App;
