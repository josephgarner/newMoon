import React from 'react';
import {SafeAreaView, StyleSheet, ViewProps} from 'react-native';

// const Container = styled.SafeAreaView<{
//   direction?: string;
//   align?: string;
//   justify?: string;
//   padding?: string;
//   margin?: string;
// }>`
//   flex: 1;
//   background-color: ${props => props.theme.color.black};
//   align-items: ${props => props.align || 'center'};
//   justify-content: ${props => props.justify || 'center'};
//   padding: ${props => props.padding || '16'}px;
//   margin: ${props => props.margin || '0'}px;
//   flex-direction: ${props => props.direction || 'column'};
// `;

export default function Container(props: ViewProps) {
  const {children} = props;
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    margin: 0,
  },
});
