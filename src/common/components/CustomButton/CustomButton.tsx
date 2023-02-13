import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface Props {
  onPressHandler: () => void;
  title: string;
  buttonContainerStyle: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  testId?: string;
}

const CustomButton = ({
  onPressHandler,
  title,
  buttonContainerStyle,
  buttonTextStyle,
  testId,
}: Props) => {
  return (
    <TouchableOpacity
      style={buttonContainerStyle}
      onPress={onPressHandler}
      testID={testId}>
      <Text style={buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
