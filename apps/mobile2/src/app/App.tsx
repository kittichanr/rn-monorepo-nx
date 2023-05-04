import * as React from 'react';
import { ZodiacSignList } from '@rn-monorepo-nx/ui';
import { Header } from '@rneui/base';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { rootStore } from '@rn-monorepo-nx/store';

import 'react-native-devsettings';

const App = () => {
  return (
    <Provider store={rootStore}>
      <SafeAreaView>
        <Header centerComponent={{ text: 'Daily Horoscope' }} />
        <ZodiacSignList />
      </SafeAreaView>
    </Provider>
  );
};

export default App;