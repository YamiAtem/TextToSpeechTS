import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Header backgroundColor='#008103' centerComponent={{
            text: 'Pocket Dictionary',
            style: { color: '#fff', fontSize: 20 },
          }} />

          <TextInput
            style={styles.inputBox}
            placeholder="Word Here"
          />
        </View>
      </SafeAreaProvider>

    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 100,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
});
