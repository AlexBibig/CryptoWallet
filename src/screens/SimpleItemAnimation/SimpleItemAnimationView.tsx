import React from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';

type SimpleItemAnimationViewProps = {
  startAnimate: () => void;
  translateX: Animated.AnimatedInterpolation;
  translateY: Animated.AnimatedInterpolation;
  opacity: Animated.AnimatedInterpolation;
};

const SimpleItemAnimationView: React.FC<SimpleItemAnimationViewProps> = (
  props,
) => {
  return (
    <View style={styles.container}>
      <Text>Simple Item Animation</Text>

      <Animated.View
        style={[
          styles.animatedWrapper,
          {
            transform: [
              {
                translateX: props.translateX,
              },
              {
                translateY: props.translateY,
              },
            ],
            opacity: props.opacity,
          },
        ]}
      >
        <Button title="start animate" onPress={props.startAnimate} />
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
  animatedWrapper: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    backgroundColor: '#4649ad',
  },
});

export default SimpleItemAnimationView;
