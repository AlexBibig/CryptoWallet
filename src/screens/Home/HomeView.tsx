import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, Text } from '~components';

const HomeView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeView;
