import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~components';
import { COLORS } from '~theme';

type ProfileViewProps = {
  config: string[];
  onPressListItem: (routeName: string) => void;
};

const ProfileView: React.FC<ProfileViewProps> = (props) => {
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.header}>
        <Text>Profile Screen</Text>
      </View>

      <FlatList
        data={props.config}
        keyExtractor={(item) => item}
        style={styles.list}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => props.onPressListItem(item)}
          >
            <Text>{`${index + 1}. ${item}`}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
  item: {
    backgroundColor: COLORS.transparentLightBlack,
    padding: 12,
    marginBottom: 4,
    borderWidth: 1,
  },
});

export default ProfileView;
