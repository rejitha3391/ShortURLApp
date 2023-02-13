import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Linking} from 'react-native';
import ShortUrlListItem from './ShortUrlListItem';

describe('ShortUrlListItem', () => {
  const item = {
    shortLink: 'https://short.ly/1',
    longLink: 'https://www.example.com/',
  };

  it('should open the short link when the short link text is pressed', () => {
    const {getByText} = render(<ShortUrlListItem item={item} />);
    fireEvent.press(getByText(item.shortLink));
    expect(Linking.openURL).toHaveBeenCalledWith(item.shortLink);
  });

  it('should open the long link when the long link text is pressed', () => {
    const {getByText} = render(<ShortUrlListItem item={item} />);
    fireEvent.press(getByText(item.longLink));
    expect(Linking.openURL).toHaveBeenCalledWith(item.longLink);
  });
});
