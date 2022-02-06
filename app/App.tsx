/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer, Provider, React, SafeAreaProvider } from '@app/shared-import';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Text, ThemeProvider } from 'react-native-paper';
import { LoaderAtom } from './components/atoms';
import { navigationRef } from './core/services/navigation/navigation.service';
import store from './redux';
import MyStack from './routes';
import theme from './theme/app.theme';
import { colors } from './theme/colors';


const App = () => {
  return (
    <Provider store={store}>
      <StatusBar translucent barStyle="light-content" />
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <LoaderAtom />
          <NavigationContainer
            ref={navigationRef}
          >
            <MyStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
