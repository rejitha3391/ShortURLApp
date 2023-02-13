import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './TitleView.styles';

const TitleView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>URL Shortener App</Text>
    </View>
  );
};
export default TitleView;
