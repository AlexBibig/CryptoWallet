import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ContextProvider } from '~context';
import RootStack from '~navigation';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ContextProvider>
        <RootStack />
      </ContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
