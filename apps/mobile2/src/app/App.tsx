import * as React from 'react';
import { ZodiacSignList } from '@rn-monorepo-nx/ui';
import { Header } from '@rneui/base';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Header centerComponent={{ text: 'Daily Horoscope' }} />
      <ZodiacSignList />
    </SafeAreaView>
  );
};

export default App;