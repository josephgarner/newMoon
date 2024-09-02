import React from 'react';
import {DimensionValue, StyleSheet, View, ViewProps} from 'react-native';

// const Paper = styled.SafeAreaView<{
//   height?: string;
//   direction?: string;
//   align?: string;
//   justify?: string;
//   padding?: number;
//   margin?: number;
//   backgroundColor?: string;
// }>`
//   height: ${props => props.height || '100%'};
//   width: 100%;
//   background-color: ${props =>
//     props.backgroundColor || props.theme.color.paper};
//   align-items: ${props => props.align || 'center'};
//   justify-content: ${props => props.justify || 'center'};
//   padding: ${props => props.padding || '16'}px;
//   margin: ${props => props.margin || '0'}px;
//   flex-direction: ${props => props.direction || 'column'};
// `;

export default function Paper(props: ViewProps & {height?: DimensionValue}) {
  const {children, height, testID} = props;
  return (
    <View
      testID={testID}
      style={{...styles.container, maxHeight: height || 'auto'}}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 0,
  },
});
