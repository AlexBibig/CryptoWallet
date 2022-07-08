import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import useAppContext from '~context';

import TradeView from './TradeView';

const TradeContainer: React.FC = () => {
  const {
    state: {
      modals: { isTradeModalVisible },
    },
  } = useAppContext();

  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleOpenModal = () => {
    Animated.timing(animatedValue, {
      toValue: 100,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };

  const handleCloseModal = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      useNativeDriver: true,
      duration: 100,
    }).start();
  };

  useEffect(() => {
    isTradeModalVisible ? handleOpenModal() : handleCloseModal();
  }, [isTradeModalVisible]);

  return (
    <TradeView
      animatedValue={animatedValue}
      isTradeModalVisible={isTradeModalVisible}
    />
  );
};

export default TradeContainer;
