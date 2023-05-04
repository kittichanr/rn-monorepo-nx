import React from 'react';
import { FlatList } from 'react-native';
import {
  AdhZodiacSignItem,
  AdhZodiacSignList,
} from '@rn-monorepo-nx/models';
import { ListItem } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ZodiacSignList = () => {
  const keyExtractor = (item: AdhZodiacSignItem) => item.zodiacSign;

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={AdhZodiacSignList}
      renderItem={({ item }) => (
        <ListItem bottomDivider>
          <Icon name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.zodiacSign}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      )}
    />
  );
}