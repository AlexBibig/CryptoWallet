import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { TabBar } from '~components';
import { Home, Market, Portfolio, Trade } from '~screens';

import { ProfileStack } from './stacks';

const { Navigator, Screen } = createBottomTabNavigator();

const RootStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="RootStack"
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Portfolio" component={Portfolio} />
        <Screen name="Trade" component={Trade} />
        <Screen name="Market" component={Market} />
        <Screen name="ProfileStack" component={ProfileStack} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
