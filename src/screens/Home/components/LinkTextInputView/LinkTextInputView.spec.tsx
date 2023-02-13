import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LinkTextInputView from './LinkTextInputView';

describe('LinkTextInputView', () => {
  it('should render the component with initial values', () => {
    const {getByPlaceholderText, getByTestId, getByText} = render(
      <LinkTextInputView onSubmit={jest.fn()} />,
    );

    const textInput = getByTestId('url-textbox');
    expect(textInput).toBeTruthy();

    const placeHolderValue = getByPlaceholderText(
      'Please enter the URL to shorten',
    );
    expect(placeHolderValue).toBeTruthy();

    const submitButton = getByText('SUBMIT');
    expect(submitButton).toBeTruthy();
  });

  it('should show error message if empty url is entered', () => {
    const {getByTestId, getByText} = render(
      <LinkTextInputView onSubmit={jest.fn()} />,
    );

    const textInput = getByTestId('url-textbox');
    fireEvent.changeText(textInput, '   ');

    const submitButton = getByText('SUBMIT');
    fireEvent.press(submitButton);

    const errorText = getByText('Please enter a valid URL');
    expect(errorText).toBeTruthy();
  });

  it('should show error message if invalid url is entered', () => {
    const {getByTestId, getByText} = render(
      <LinkTextInputView onSubmit={jest.fn()} />,
    );

    const textInput = getByTestId('url-textbox');
    fireEvent.changeText(textInput, '//ivalid-url-link/');

    const submitButton = getByText('SUBMIT');
    fireEvent.press(submitButton);

    const errorText = getByText('Please enter a valid URL');
    expect(errorText).toBeTruthy();
  });

  it('should call onSubmit prop with correct value', () => {
    const onSubmit = jest.fn();
    const {getByTestId, getByText} = render(
      <LinkTextInputView onSubmit={onSubmit} />,
    );

    const textInput = getByTestId('url-textbox');
    fireEvent.changeText(textInput, 'https://www.example.com');

    const submitButton = getByText('SUBMIT');
    fireEvent.press(submitButton);

    expect(onSubmit).toHaveBeenCalledWith('https://www.example.com');
  });
});
