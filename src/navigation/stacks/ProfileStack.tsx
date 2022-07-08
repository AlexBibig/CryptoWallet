import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Profile, SimpleItemAnimation, SimpleLayoutAnimation } from '~screens';

const { Navigator, Screen } = createStackNavigator();

const ProfileStack: React.FC = (): JSX.Element => {
  return (
    <Navigator
      initialRouteName="ProfileStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Profile" component={Profile} />
      <Screen name="SimpleItemAnimation" component={SimpleItemAnimation} />
      <Screen name="SimpleLayoutAnimation" component={SimpleLayoutAnimation} />
    </Navigator>
  );
};

export type ProfileStackParamList = {
  Profile: undefined;
  SimpleItemAnimation: undefined;
  SimpleLayoutAnimation: undefined;
};

export default ProfileStack;
