import React from 'react';

import { Card, Text } from '@rneui/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppSelector } from '@rn-monorepo-nx/store';

/* eslint-disable-next-line */
export interface HoroscopeCardProps { }

export function HoroscopeCard(props: HoroscopeCardProps) {
  const horoscope = useAppSelector(item => item.horoscope)
  return (
    <Card>
      {
        horoscope.zodiacSignItem?.icon &&
        <Card.Title>
          <Icon name={horoscope.zodiacSignItem?.icon} size={40} />
        </Card.Title>
      }
      <Card.Title>{horoscope.zodiacSignItem?.zodiacSign}</Card.Title>
      <Card.Divider />
      <Text h4 style={{ width: '100%', textAlign: 'center' }}>
        Your Horoscope for Today
      </Text>
    </Card>
  );
}

export default HoroscopeCard;
