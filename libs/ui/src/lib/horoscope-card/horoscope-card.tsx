import React, { useEffect } from 'react';
import {  ScrollView } from 'react-native';

import { ActivityIndicator, Avatar, Card, DataTable, Divider, Text } from 'react-native-paper';
import { horoscopeActions, horoscopeSelectors, useAppDispatch, useAppSelector } from '@rn-monorepo-nx/store';
import { SafeAreaView } from 'react-native-safe-area-context';

export function HoroscopeCardContainer() {
  const dispatch = useAppDispatch()

  const { horoscope, loadingStatus, zodiacItem } = useAppSelector(state => ({
    zodiacItem: horoscopeSelectors.getUserZodiacItem(state),
    horoscope: horoscopeSelectors.getUserHoroscope(state),
    loadingStatus: horoscopeSelectors.getHoroscopeLoadingStatus(state),
  }))

  useEffect(() => {
    if (zodiacItem?.zodiacSign) {
      dispatch(horoscopeActions.fetchHoroscope({ zodiacSign: zodiacItem.zodiacSign, day: 'today' }));
    }
  }, [zodiacItem, horoscope, dispatch]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Card>
          {zodiacItem && (
            <>
              <Avatar.Icon icon={zodiacItem?.icon} size={40} />
              <Card.Title title={zodiacItem?.zodiacSign}></Card.Title>
            </>
          )}
          <Divider />
          <Text>Your Horoscope for Today</Text>
          {loadingStatus === 'loaded' && horoscope ? (
            <>
              <Text variant="bodyLarge">{horoscope.description}</Text>
              <DataTable>
                <DataTable.Row>
                  <DataTable.Cell>Mood</DataTable.Cell>
                  <DataTable.Cell>{horoscope.mood}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Color</DataTable.Cell>
                  <DataTable.Cell>{horoscope.color}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Compatibility</DataTable.Cell>
                  <DataTable.Cell>{horoscope.compatibility}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Lucky Number</DataTable.Cell>
                  <DataTable.Cell>{horoscope.luckyNumber}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Lucky Time</DataTable.Cell>
                  <DataTable.Cell>{horoscope.luckyTime}</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </>
          ) : loadingStatus === 'error' ? (
            <Text variant="displayMedium">
              Oops! Something went wrong. Please try again.
            </Text>
          ) : (
            <ActivityIndicator animating={true} size="large" />
          )}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HoroscopeCardContainer;
