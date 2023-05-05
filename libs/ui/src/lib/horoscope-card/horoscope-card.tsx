import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';

import { Card, Text } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { horoscopeActions, horoscopeSelectors, useAppDispatch, useAppSelector } from '@rn-monorepo-nx/store';

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
          {zodiacItem?.icon && <Card.Title>
            <Icon name={zodiacItem?.icon} size={40} />
          </Card.Title>}

          <Card.Title>{zodiacItem?.zodiacSign}</Card.Title>
          <Card.Divider />
          <Text h4 style={{ width: '100%', textAlign: 'center' }}>
            Your Horoscope for Today
          </Text>
          {loadingStatus === 'loaded' ? (
            <>
              <Text style={{ marginTop: 10 }}>{horoscope?.description}</Text>
              <Text style={{ marginTop: 10 }}>Mood: {horoscope?.mood}</Text>
              <Text style={{ marginTop: 10 }}>Color: {horoscope?.color}</Text>
              <Text style={{ marginTop: 10 }}>
                Compatibility: {horoscope?.compatibility}
              </Text>
              <Text style={{ marginTop: 10 }}>
                Lucky Number: {horoscope?.luckyNumber}
              </Text>
              <Text style={{ marginTop: 10 }}>
                Lucky Time: {horoscope?.luckyTime}
              </Text>
            </>
          ) : loadingStatus === 'error' ? (
            <Text h2>Oops! Something went wrong. Please try agian.</Text>
          ) : (
            <ActivityIndicator />
          )}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HoroscopeCardContainer;
