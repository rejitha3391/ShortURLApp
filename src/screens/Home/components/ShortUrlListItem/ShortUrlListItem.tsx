import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {UrlLink} from '../../../../types/url-links.interface';
import {styles} from './ShortListItem.styles';

interface Props {
  item: UrlLink;
  testId?: string;
}

const ShortUrlListItem = ({item, testId}: Props) => {
  return (
    <View testID={testId} style={styles.itemContainer}>
      <TouchableOpacity onPress={() => Linking.openURL(item.shortLink)}>
        <Text style={styles.shortLinkText}>{item.shortLink}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL(item.longLink)}>
        <Text style={styles.longLinkText}>{item.longLink}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShortUrlListItem;
