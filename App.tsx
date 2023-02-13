/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
}
export default App;
