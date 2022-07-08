import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Icon, Text } from '~components';
import { COLORS, SIZES } from '~theme';

interface ButtonProps {
  text: string;
  icon?: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  text = '',
  icon = '',
  onPress = () => {},
  containerStyle = {},
}) => {
  const styles = getStyles(icon);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}
    >
      <View style={styles.content}>
        {icon ? <Icon width={16} height={16} name={icon} /> : null}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const getStyles = (icon: string) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 56,
      width: '100%',
      backgroundColor: COLORS.white,
      borderRadius: SIZES.radius,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      marginLeft: icon ? 6 : 0,
    },
  });

export default Button;
