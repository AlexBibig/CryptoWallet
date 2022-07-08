import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
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
import { COLORS, FONTS } from '~theme';
import useAppContext from '~context';
import { animateLayout } from '~core/utils';

interface TabBarProps {
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const TabBar: React.FC<TabBarProps> = ({ state, navigation }) => {
  const {
    state: {
      modals: { isTradeModalVisible },
    },
    actions: { setTradeModalVisibility },
  } = useAppContext();
  const styles = getStyles();

  const onPress = (route: RouteProp<ParamListBase, string>) => {
    navigation.navigate(route.name);
    if (isTradeModalVisible) {
      setTradeModalVisibility(false);
    }
  };

  const onLongPress = (
    route: RouteProp<ParamListBase, string>,
    highlighted: boolean,
  ) => {
    if (highlighted) {
      navigation.navigate(route.name);
      setTradeModalVisibility(true);
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index: number) => {
        const highlighted = route.name === TAB_CONFIG.Trade.name;

        return (
          <Tab
            key={route.key}
            name={TAB_CONFIG[route.name as keyof typeof TAB_CONFIG].name}
            iconName={
              !highlighted || !isTradeModalVisible
                ? TAB_CONFIG[route.name as keyof typeof TAB_CONFIG].icon
                : 'close'
            }
            isFocused={state.index === index}
            onPress={() => onPress(route)}
            onLongPress={() => onLongPress(route, highlighted)}
            highlighted={highlighted}
          />
        );
      })}
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
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets, highlighted);
  const color = ((!highlighted &&
    (isFocused ? COLORS.white : COLORS.lightGray)) ||
    COLORS.lightGreen) as keyof typeof COLORS;

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.tab]}
    >
      <Icon name={iconName} width={20} height={20} color={color} />

      <Text color={color} style={[FONTS.h4, styles.text]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const getStyles = (
  insets: EdgeInsets | null = null,
  highlighted: boolean = false,
) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: COLORS.primary,
      height: 100,
      paddingVertical: Number(insets?.bottom) > 0 ? 24 : 12,
    },
    tab: {
      alignItems: 'center',
      justifyContent: 'center',
      ...(highlighted && {
        width: 68,
        height: 68,
        borderRadius: 34,
        backgroundColor: COLORS.black,
      }),
    },
    text: {
      marginTop: 4,
    },
  });

export default TabBar;
