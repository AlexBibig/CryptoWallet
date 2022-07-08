import React, { useRef } from 'react';
import { Animated } from 'react-native';

import SimpleLayoutAnimationView from './SimpleLayoutAnimationView';

const SimpleLayoutAnimationContainer: React.FC = () => {
  const config = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const [start, end] = [0, 100];
  const animatedValue = useRef(new Animated.Value(start)).current;

  const height = animatedValue.interpolate({
    inputRange: [start, end],
    outputRange: ['30%', '10%'],
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [start, end],
    outputRange: ['#4649ad', 'blue'],
  });

  const startAnimate = () => {
    Animated.timing(animatedValue, {
      toValue: end,
      useNativeDriver: false,
      duration: 100,
    }).start();
  };

  const onScroll = () => {
    startAnimate();
    // console.log(e.nativeEvent);
  };

  return (
    <SimpleLayoutAnimationView
      config={config}
      height={height}
      backgroundColor={backgroundColor}
      onScroll={onScroll}
    />
  );
};

export default SimpleLayoutAnimationContainer;
