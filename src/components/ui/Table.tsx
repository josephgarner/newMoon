import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

export default function Table(props: ViewProps) {
  const renderRow = (key: number) => {
    return (
      <View style={styles.row} key={key}>
        <View style={styles.cell} />
        <View style={styles.cell} />
        <View style={styles.cell} />
        <View style={styles.cell} />
        <View style={styles.cell} />
      </View>
    );
  };

  const data = [1, 2, 3, 4, 5];
  return (
    <View style={styles.table}>
      {data.map(datum => {
        return renderRow(datum);
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
  },
  cell: {
    flex: 1,
    alignSelf: 'stretch',
    borderColor: 'grey',
    borderWidth: 1,
  },
  table: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
