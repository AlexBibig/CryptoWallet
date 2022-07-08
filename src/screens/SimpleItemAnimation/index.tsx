import React, { useRef } from 'react';
import { Animated, Easing } from 'react-native';

import SimpleItemAnimationView from './SimpleItemAnimationView';

const SimpleItemAnimationContainer: React.FC = () => {
  const [start, end] = [0, 100];
  const animatedValue = useRef(new Animated.Value(start)).current;

  const startAnimate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: end,
          useNativeDriver: true,
          easing: Easing.ease,
        }),
        Animated.timing(animatedValue, {
          toValue: start,
          useNativeDriver: true,
          duration: 1000,
          easing: Easing.cubic,
        }),
      ]),
    ).start();
  };

  const translateX = animatedValue.interpolate({
    inputRange: [start, end],
    outputRange: [0, 50],
  });

  const translateY = animatedValue.interpolate({
    inputRange: [start, end],
    outputRange: [0, 200],
  });

  const opacity = animatedValue.interpolate({
    inputRange: [start, end],
    outputRange: [1, 0.2],
  });

  return (
    <SimpleItemAnimationView
      startAnimate={startAnimate}
      translateX={translateX}
      translateY={translateY}
      opacity={opacity}
    />
  );
};

export default SimpleItemAnimationContainer;
