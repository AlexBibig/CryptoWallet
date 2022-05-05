import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from '~components';

const TradeView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Trade Screen</Text>
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

export default TradeView;
