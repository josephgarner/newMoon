import React, {useState} from 'react';
import {Text, StyleSheet, Pressable, ButtonProps} from 'react-native';

export default function Button(props: ButtonProps) {
  const {onPress, title = 'Save'} = props;
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  let pressableStyle = {...styles.button};
  if (hovering) {
    pressableStyle = {...pressableStyle, ...styles.buttonHover};
  }
  if (clicking) {
    pressableStyle = {...pressableStyle, ...styles.buttonClick};
  }

  return (
    <Pressable
      role="button"
      style={pressableStyle}
      onTouchStart={() => setClicking(true)}
      onTouchEnd={() => setClicking(false)}
      onPress={onPress}
      onHoverIn={() => setHovering(true)}
      onHoverOut={() => setHovering(false)}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  buttonHover: {
    backgroundColor: '#ececec',
  },
  buttonClick: {
    transform: 'translateY(2px)',
  },
  text: {
    fontFamily: 'Chakra Petch',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});
