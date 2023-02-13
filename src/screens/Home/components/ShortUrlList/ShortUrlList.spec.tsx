import React from 'react';
import {render} from '@testing-library/react-native';
import ShortUrlList from './ShortUrlList';
import {UrlLink} from '../../../../types/url-links.interface';

const urlLinks: UrlLink[] = [
  {shortLink: 'short-url-1', longLink: 'long-url-1'},
  {shortLink: 'short-url-2', longLink: 'long-url-2'},
  {shortLink: 'short-url-3', longLink: 'long-url-3'},
  {shortLink: 'short-url-4', longLink: 'long-url-4'},
  {shortLink: 'short-url-5', longLink: 'long-url-5'},
];

describe('ShortUrlList component', () => {
  it('renders a FlatList component with header component and url links', () => {
    const {getByTestId, getByText} = render(
      <ShortUrlList urlLinks={urlLinks} />,
    );

    const flatList = getByTestId('flat-list');
    expect(flatList).toBeTruthy();

    const headerTitle = getByText(/Your last 5 shortened URLs/i);
    expect(headerTitle).toBeTruthy();
  });
});
