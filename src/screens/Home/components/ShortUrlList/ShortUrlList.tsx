import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {UrlLink} from '../../../../types/url-links.interface';
import ShortUrlListItem from '../ShortUrlListItem/ShortUrlListItem';
import {styles} from './ShortUrlList.styles';

interface Props {
  urlLinks: UrlLink[];
}

const ShortUrlList = ({urlLinks}: Props) => {
  const renderItem = ({item}: {item: UrlLink}) => {
    return <ShortUrlListItem testId="ShortUrlListItem" item={item} />;
  };

  const renderHeaderComponent = () => {
    return (
      <View style={styles.headerTitleContainer}>
        <Text style={styles.flatlistHeaderText}>
          Your last 5 shortened URLs
        </Text>
      </View>
    );
  };
  return (
    <FlatList
      testID="flat-list"
      ListHeaderComponent={renderHeaderComponent}
      contentContainerStyle={styles.container}
      data={urlLinks}
      keyExtractor={(_, index) => `item-${index}`}
      renderItem={renderItem}
    />
  );
};

export default ShortUrlList;
