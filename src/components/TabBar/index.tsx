import React, { useRef } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  NavigationHelpers,
  ParamListBase,
  RouteProp,
  TabNavigationState,
} from '@react-navigation/native';

import { Icon, Text } from '~components';
import { TAB_CONFIG } from '~core/constants';
import { colors } from '~theme';

interface TabBarProps {
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const TabBar: React.FC<TabBarProps> = ({ state, navigation }) => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  const onPress = (route: RouteProp<ParamListBase, string>) => {
    navigation.navigate(route.name);
  };

  const onLongPress = (route: RouteProp<ParamListBase, string>) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index: number) => (
        <Tab
          key={route.key}
          name={route.name}
          iconName={TAB_CONFIG[route.name as keyof typeof TAB_CONFIG].icon}
          isFocused={state.index === index}
          onPress={() => onPress(route)}
          onLongPress={() => onLongPress(route)}
          highlighted={route.name === TAB_CONFIG.Trade.name}
        />
      ))}
    </View>
  );
};

interface TabProps {
  name: string;
  iconName: string;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  highlighted: boolean;
}

const Tab: React.FC<TabProps> = ({
  name = '',
  iconName = '',
  isFocused = false,
  onPress = () => {},
  onLongPress = () => {},
  highlighted = false,
}): JSX.Element => {
  const styles = getStyles(null);
  const color = ((!highlighted &&
    (isFocused ? colors.white : colors.lightGray)) ||
    colors.lightGreen) as keyof typeof colors;

  const AnimatedTouhable = Animated.createAnimatedComponent(TouchableOpacity);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  // const fadeOut = () => {
  //   // Will change fadeAnim value to 0 in 3 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 3000,
  //   }).start();
  // };

  return (
    <AnimatedTouhable
      onPress={() => {
        onPress();
        fadeIn();
      }}
      onLongPress={onLongPress}
      style={[
        styles.tab,
        {
          // Bind opacity to animated value
          marginBottom: fadeAnim,
        },
      ]}
    >
      <Icon name={iconName} width={20} height={20} color={color} />

      <Text style={styles.text} size={14} color={color}>
        {name}
      </Text>
    </AnimatedTouhable>
  );
};

const getStyles = (insets: EdgeInsets | null) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingVertical: Number(insets?.bottom) > 0 ? 24 : 12,
      backgroundColor: colors.primary,
      borderColor: 'transparent',
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      marginTop: 4,
    },
  });

export default TabBar;
