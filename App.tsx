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
import * as Speech from 'expo-speech';

type state = {
  text: string
}

export default class App extends React.Component<{}, state> {
  constructor(props: state) {
    super(props);

    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Header backgroundColor='#00BABE' centerComponent={{
            text: 'Text to Speech App',
            style: {
              color: '#000',
              fontSize: 30,
              fontWeight: 'bold'
            },
          }} />

          <TextInput
            style={styles.inputBox}
            placeholder="Word Here"
            onChangeText={text => {
              this.setState({
                text: text
              });
            }}
            value={this.state.text}
          />

          <TouchableOpacity style={styles.searchButton} onPress={() => {
            var text = this.state.text;

            Speech.speak(text);
          }}>
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
    backgroundColor: '#00BABE',
    paddingTop: 5,
    borderRadius: 25,
  },
  searchText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
