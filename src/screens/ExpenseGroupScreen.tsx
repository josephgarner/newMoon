import React from 'react';
import {Button, Container, Paper, Table, Text} from '../components';

const ExportGroupScreen = () => {
  return (
    <Container>
      <Paper height={70}>
        <Text>Planned Expenses</Text>
      </Paper>
      <Paper>
        <Table />
      </Paper>
      <Paper height={100}>
        <Button title="Add New Group" onPress={() => {}} />
      </Paper>
    </Container>
  );
};

export default ExportGroupScreen;
