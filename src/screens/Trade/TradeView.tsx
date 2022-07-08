import React from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Button, Text } from '~components';
import { COLORS } from '~theme';

interface TradeViewProps {
  isTradeModalVisible: boolean;
  animatedValue: Animated.Value;
}

const TradeView: React.FC<TradeViewProps> = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Trade Screen</Text>
      </TouchableOpacity>

      {props.isTradeModalVisible ? (
        <Animated.View
          style={[
            styles.background,
            {
              opacity: props.animatedValue.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
              }),
            },
          ]}
        ></Animated.View>
      ) : null}

      <Animated.View
        style={[
          styles.buttonsContainer,
          {
            transform: [
              {
                translateY: props.animatedValue?.interpolate({
                  inputRange: [0, 100],
                  outputRange: [164, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Button
          text="Transfer"
          icon="send"
          onPress={() => {}}
          containerStyle={styles.button}
        />

        <Button
          text="Withdraw"
          icon="chevron-down"
          onPress={() => {}}
          containerStyle={styles.button}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.transparentBlack,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: COLORS.primary,
  },
  button: {
    marginBottom: 10,
  },
});

export default TradeView;
