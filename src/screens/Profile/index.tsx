import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ProfileStackParamList } from '~navigation/stacks/ProfileStack';

import ProfileView from './ProfileView';

const config = ['SimpleItemAnimation', 'SimpleLayoutAnimation'];

export type NavigationProps = StackNavigationProp<
  ProfileStackParamList,
  'Profile'
>;

const ProfileContainer: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  const onPressListItem = (routeName: string) => {
    navigation.navigate(routeName as keyof ProfileStackParamList);
  };

  return <ProfileView config={config} onPressListItem={onPressListItem} />;
};

export default ProfileContainer;
