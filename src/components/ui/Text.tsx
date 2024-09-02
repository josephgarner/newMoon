import React from 'react';
import {StyleSheet, TextProps, Text as RNText} from 'react-native';

export default function Text(props: TextProps) {
  const {children} = props;
  return <RNText style={styles.text}>{children}</RNText>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Chakra Petch',
  },
});
