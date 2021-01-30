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

          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchText}>Press to hear Speech</Text>
          </TouchableOpacity>
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
  searchButton: {
    width: '25%',
    height: 55,
    alignSelf: 'center',
    margin: 20,
    borderWidth: 5,
    borderRadius: 20,
  },
  searchText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
