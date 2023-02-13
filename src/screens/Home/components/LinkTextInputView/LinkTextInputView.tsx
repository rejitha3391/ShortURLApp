import React, {useCallback, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import CustomButton from '../../../../common/components/CustomButton/CustomButton';
import {validateInput} from '../../../../utils/validation';
import {styles} from './LinkTextInputView.styles';

interface Props {
  onSubmit: (val: string) => void;
}

const LinkTextInputView = ({onSubmit}: Props) => {
  const [urlInputVal, setUrlInputVal] = useState<string>('');
  const [urlInputError, setUrlInputError] = useState(false);

  const handleSubmit = useCallback(() => {
    setUrlInputError(false);
    //if input is invalid set the error and set the input value to empty
    if (validateInput(urlInputVal)) {
      setUrlInputError(true);
      setUrlInputVal('');
      return;
    }

    //if input is valid call onSubmit method.
    onSubmit(urlInputVal);
    setUrlInputVal('');
  }, [onSubmit, urlInputVal, setUrlInputError, validateInput]);

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          testID="url-textbox"
          value={urlInputVal}
          placeholder="Please enter the URL to shorten"
          onChangeText={val => setUrlInputVal(val)}
          onKeyPress={() => setUrlInputError(false)}
          style={styles.textInputStyle}
        />
        <CustomButton
          testId="submit-button"
          onPressHandler={handleSubmit}
          title="SUBMIT"
          buttonTextStyle={styles.buttonStyle}
          buttonContainerStyle={styles.buttonContainer}
        />
      </View>
      {urlInputError && (
        <Text style={styles.errorText}>Please enter a valid URL</Text>
      )}
    </View>
  );
};

export default LinkTextInputView;
