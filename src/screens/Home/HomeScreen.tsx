import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {UrlLink} from '../../types/url-links.interface';
import {getShortUrl} from '../../utils/apis';
import LinkTextInputView from './components/LinkTextInputView/LinkTextInputView';
import ShortUrlList from './components/ShortUrlList/ShortUrlList';
import TitleView from './components/TitleView/TitleView';
import {styles} from './HomeScreen.styles';

const HomeScreen = () => {
  const [recentShortUrls, setRecentShortUrls] = useState<UrlLink[]>([]);

  const onSubmit = useCallback(
    async (urlInput: string) => {
      try {
        const result = await getShortUrl(urlInput);
        if (result) {
          const tempLink = {shortLink: result.short_url, longLink: urlInput};
          //add only 5 elements to the recentArray
          setRecentShortUrls([tempLink, ...recentShortUrls.slice(0, 4)]);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [recentShortUrls, setRecentShortUrls],
  );

  return (
    <View style={styles.container}>
      <TitleView />
      <LinkTextInputView onSubmit={onSubmit} />
      {recentShortUrls.length > 0 && (
        <ShortUrlList urlLinks={recentShortUrls} />
      )}
    </View>
  );
};

export default HomeScreen;
