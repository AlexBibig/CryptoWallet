import React, { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as TextComponent,
  TextStyle,
} from 'react-native';

import { colors } from '~theme';

interface TextProps {
  children: ReactNode;
  weight?: TextStyle['fontWeight'];
  size?: TextStyle['fontSize'];
  lineHeight?: TextStyle['lineHeight'];
  color?: keyof typeof colors;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  selectable?: boolean;
}

const Text: React.FC<TextProps> = ({
  children,
  weight = 'normal',
  size = 16,
  lineHeight = 24,
  color = colors.black,
  numberOfLines = 1,
  style = {},
  selectable = false,
}) => {
  const styles = getStyles(weight, size, lineHeight, color);

  return (
    <TextComponent
      style={[styles.text, style]}
      numberOfLines={numberOfLines}
      selectable={selectable}
    >
      {children}
    </TextComponent>
  );
};

const getStyles = (
  weight: TextStyle['fontWeight'],
  size: TextStyle['fontSize'],
  lineHeight: TextStyle['lineHeight'],
  color: TextStyle['color'],
) =>
  StyleSheet.create({
    text: {
      fontSize: size,
      fontWeight: weight,
      lineHeight,
      color,
    },
  });

export default Text;
