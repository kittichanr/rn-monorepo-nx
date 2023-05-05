import React from 'react';
import { FlatList } from 'react-native';
import {
  AdhZodiacSignItem,
  AdhZodiacSignList,
  AppRoutes,
} from '@rn-monorepo-nx/models';
import { List } from 'react-native-paper';
import { horoscopeActions, useAppDispatch } from '@rn-monorepo-nx/store';

import { useNavigation } from '@react-navigation/native'

export const ZodiacSignListContainer = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigation()

  const keyExtractor = (item: AdhZodiacSignItem) => item.zodiacSign;

  const onPress = (item: AdhZodiacSignItem) => {
    dispatch(horoscopeActions.setUserZodiacSignItem(item))
    navigate.navigate(AppRoutes.card)
  }

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={AdhZodiacSignList}
      renderItem={({ item }) => (
        <List.Item
        title={item.zodiacSign}
        left={(props) => <List.Icon {...props} icon={item.icon} />}
        right={(props) => <List.Icon {...props} icon='chevron-right' />}
        onPress={() => onPress(item)}
      ></List.Item>
      )}
    />
  );
}