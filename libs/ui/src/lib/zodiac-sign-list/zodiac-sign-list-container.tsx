import React from 'react';
import { FlatList } from 'react-native';
import {
  AdhZodiacSignItem,
  AdhZodiacSignList,
} from '@rn-monorepo-nx/models';
import { ListItem } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { horoscopeActions, useAppDispatch } from '@rn-monorepo-nx/store';

import { useNavigation } from '@react-navigation/native'

export const ZodiacSignListContainer = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigation<any>()

  const keyExtractor = (item: AdhZodiacSignItem) => item.zodiacSign;

  const onPress = (item: AdhZodiacSignItem) => {
    dispatch(horoscopeActions.setUserZodiacSignItem(item))
    navigate.navigate('Horoscope Card')
  }

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={AdhZodiacSignList}
      renderItem={({ item }) => (
        <ListItem bottomDivider onPress={() => onPress(item)}>
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