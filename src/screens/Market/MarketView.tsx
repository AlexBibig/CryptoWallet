import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from '~components';

const MarketView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Market Screen</Text>
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

export default MarketView;
