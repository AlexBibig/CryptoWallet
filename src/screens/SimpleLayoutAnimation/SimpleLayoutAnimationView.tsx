import React from 'react';
import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';

const SimpleLayoutAnimationView: React.FC<any> = (props) => {
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: props.height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: props.backgroundColor,
        }}
      >
        <Text>SimpleLayoutAnimation Screen</Text>
      </Animated.View>

      <FlatList
        // onLayout={(e) => props.setWindowHeight(e.nativeEvent.layout.height)}
        // onContentSizeChange={(contentWidth, contentHeight) =>
        //   props.setContentHeight(contentHeight)
        // }
        onScroll={props.onScroll}
        onEndReached={() => console.log(1)}
        onEndReachedThreshold={0.1}
        data={props.config}
        keyExtractor={(item: any) => item}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: 'gray',
              marginVertical: 20,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SimpleLayoutAnimationView;
