import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './src/HomeScreen';
import UploadScreen from './src/Upload';
import HistoryScreen from './src/HistoryScreen';
import ScreenshotScreen from './src/ScreenshotScreen';
import UploadTips from './src/UploadTips';
import SingleTip from './src/SingleTip';
const Stack = createStackNavigator();


export default function App() {
  React.useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Upload" component={UploadScreen}  options={{ headerShown:false }}/>
        <Stack.Screen name="History" component={HistoryScreen}   options={{ headerShown:false }}/>
        <Stack.Screen name="Screenshot" component={ScreenshotScreen}   options={{ headerShown:false }}/>
        <Stack.Screen name="UploadTips" component={UploadTips}   options={{ headerShown:false }}/>
        <Stack.Screen name="SingleTip" component={SingleTip}   options={{ headerShown:false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

