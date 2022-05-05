import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';

import { colors } from '~theme';

interface TabbarProps {
  state: TabNavigationState<ParamListBase>;
}

const MyTabBar: React.FC<TabbarProps> = ({ state }) => {
  const tabs = [...state.routes];

  console.log('tabs', tabs);

  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  return (
    <View style={styles.container}>
      {tabs.map(({ name, key }, index: number) => (
        <Tab
          key={key}
          name={name}
          inFocus={state.index === index}
          // iconName={TabConfig[tabName].iconName}
          // onPress={() => onPressTab(tabName)}
        />
      ))}
    </View>
  );
};

export { MyTabBar };

// export default TabBar;

// // interface TabProps {
// //   label: string;
// //   iconName: string;
// //   inFocus: boolean;
// //   onPress: () => void;
// // }

const Tab: React.FC<any> = ({
  name = '',
  iconName = '',
  inFocus = false,
  onPress = () => {},
}): JSX.Element => {
  const styles = getStyles(undefined);

  return (
    <TouchableOpacity onPress={onPress} style={styles.tabWrapper}>
      <Text
        style={{
          color: inFocus ? '#81C17D' : '#555555',
          marginTop: 2,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const getStyles = (insets: EdgeInsets | undefined) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingBottom: Number(insets?.bottom) > 0 ? 12 : 0,
      backgroundColor: colors.primary,
    },
    tabWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
    },
  });

// // const TabConfig: any = {
// //   //redo
// //   Home: {
// //     label: 'Home',
// //     iconName: 'house',
// //   },
// //   Profile: {
// //     label: 'Profile',
// //     iconName: 'user',
// //   },
// //   SignOut: {
// //     label: 'Sign Out',
// //     iconName: 'sign-out',
// //   },
// // };

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// const index = (props: any) => {
//   return (
//     <View>
//       <Text>index</Text>
//     </View>
//   );
// };

// export default index;

// const styles = StyleSheet.create({});

// ================================================================================================= //

// import React from 'react';
// import { TouchableOpacity, View, Text } from 'react-native';
// import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

// /**
//  * BottomBar component
//  * @prop {type} example - example description
//  */
// const BottomBar = ({ state, descriptors, navigation }) => {
//   const home = state.routes[0];
//   const calendar = state.routes[1];
//   const interesting = state.routes[2];
//   const profile = state.routes[3];

//   const onPressTab = (tabName) => {
//     navigation.navigate(tabName, { screen: tabName });
//   };

//   const renderTab = (tabName, index) => {
//     switch (tabName) {
//       case 'Home':
//         return (
//           <BottomTab
//             key={index}
//             label="Главная"
//             iconName="home"
//             inFocus={state.index === 0}
//             onPress={() => onPressTab(tabName)}
//           />
//         );
//       case 'Calendar':
//         return (
//           <BottomTab
//             key={index}
//             label="Занятия"
//             iconName="calendar"
//             inFocus={state.index === 1}
//             onPress={() => onPressTab(tabName)}
//           />
//         );
//       case 'Interesting':
//         return (
//           <BottomTab
//             key={index}
//             label="Интересное"
//             iconName="interesting"
//             inFocus={state.index === 2}
//             onPress={() => onPressTab(tabName)}
//           />
//         );
//       case 'Profile':
//         return (
//           <BottomTab
//             key={index}
//             label="Профиль"
//             iconName="profile"
//             inFocus={state.index === 3}
//             onPress={() => onPressTab(tabName)}
//           />
//         );
//     }
//   };
//   const BottomTab = ({
//     label = '',
//     iconName = '',
//     inFocus = false,
//     onPress = () => {},
//   }) => {
//     return (
//       <TouchableOpacity onPress={onPress} style={[styles.tabWrapper]}>
//         <Icon
//           width={24}
//           height={24}
//           color={inFocus ? colors.primary.default : colors.grayscale[40]}
//           name={iconName}
//         />
//         <Text
//           size="11"
//           style={styles.label}
//           color={inFocus ? colors.primary.default : colors.grayscale[40]}
//           weight="500"
//         >
//           {label}
//         </Text>
//       </TouchableOpacity>
//     );
//   };
//   return (
//     <SafeAreaInsetsContext.Consumer>
//       {(insets) => (
//         <View
//           style={[
//             styles.container,
//             { paddingBottom: insets.bottom > 0 ? 18 : 0 },
//           ]}
//         >
//           {state.routes.map((el, index) => renderTab(el.name, index))}
//         </View>
//       )}
//     </SafeAreaInsetsContext.Consumer>
//   );
// };

// const styles = RNStyles.create({
//   container: {
//     backgroundColor: colors.grayscale[0],
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   tabWrapper: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 4,
//   },
//   label: {},
// });

// export default BottomBar;

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
