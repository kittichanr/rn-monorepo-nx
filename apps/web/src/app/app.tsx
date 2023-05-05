import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { rootStore } from "@rn-monorepo-nx/store";
import { HoroscopeCardContainer, ZodiacSignListContainer } from "@rn-monorepo-nx/ui";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <style type="text/css">{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
        }
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
      <Provider store={rootStore}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Zodiac Sign List"
              component={ZodiacSignListContainer}
            />
            <Stack.Screen
              name="Horoscope Card"
              component={HoroscopeCardContainer}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;