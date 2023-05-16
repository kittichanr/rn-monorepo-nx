import * as React from 'react';
import { HoroscopeCardContainer, ZodiacSignListContainer } from '@rn-monorepo-nx/ui';

import { Provider } from 'react-redux';
import { rootStore } from '@rn-monorepo-nx/store';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={rootStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Zodiac Sign List"
            component={ZodiacSignListContainer}
          />
          <Stack.Screen name="Horoscope Card" component={HoroscopeCardContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;