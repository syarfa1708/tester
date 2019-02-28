import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>Syarfa Shahirah bt Mohamad 1611586</Text>
        <Text>Name : Nurul Khalida binti Isa</Text>
        <Text>Matric No : 1612390</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
