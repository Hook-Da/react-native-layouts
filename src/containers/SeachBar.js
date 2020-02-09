/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    FlatList,
    Text,
    Keyboard
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const listOfHeroes = [
    'Hook', 'Hulk', 'Sentry', 'Void'
];

class App extends React.Component {

    state = {
        searchBarFocused: false
    }

    /* 
    * работают только 2 even keyboardDidShow, keyboardDidHide
     */

    componentDidMount() {
        this.handlerDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);

        this.handlerDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);

        this.handlerWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }
    keyboardDidShow = () => {
        this.setState({ searchBarFocused: true });
        console.log('%c++', 'background:red', 'keyboardVisible');
    }

    keyboardDidHide = () => {
        this.setState({ searchBarFocused: false });
        console.log('%c++', 'background:blue', 'sdfasdfas');
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    height: 80,
                    backgroundColor: '#c45653',
                    justifyContent: 'center',
                    paddingHorizontal: 5
                }}>
                    <Animatable.View animation="slideInRight" duration={1000} style={{
                        height: 50,
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 5
                    }}>
                        <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
                            <Icon name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{ fontSize: 24 }} />
                        </Animatable.View>
                        <TextInput
                            placeholder="Поиск..."
                            style={{
                                fontSize: 24,
                                marginLeft: 15,
                                flex: 1
                            }} />
                    </Animatable.View>
                </View>
                <FlatList
                    style={{ backgroundColor: this.state.searchBarFocused ? 'rgba(0, 0, 0, 0.3)' : 'white' }}
                    data={listOfHeroes}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    renderItem={({ item }) => {
                        return <Text style={{
                            padding: 20,
                            fontSize: 20
                        }}>{item}</Text>
                    }}
                />
            </View>
        );
    }
}
/* 
const App = () => {

  state = {
    searchBarFocused: true
  }

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
  }

  keyboardDidShow = () => {
    console.log('%c++','background:red','keyboardVisible');
  }

  return (
    <View style={{flex:1}}>
      <View style={{
          height:80,
          backgroundColor:'#c45653',
          justifyContent: 'center',
          paddingHorizontal: 5
        }}>
        <Animatable.View animation="slideInRight" duration={1000} style={{
          height:50, 
          backgroundColor:'white',
          flexDirection:'row',
          alignItems: 'center',
          paddingHorizontal: 5
        }}>
          <Icon name="ios-search" style={{fontSize:24}} />
          <TextInput 
            placeholder="Поиск..."
            style={{
              fontSize:24,
              marginLeft:15
            }} />
        </Animatable.View>
      </View>
      <FlatList 
          style={{backgroundColor: this.state.searchBarFocused ? 'rgba(0, 0, 0, 0.3)' : 'white'}}
          data={listOfHeroes}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item}) => {
              return <Text style={{
                padding: 20,
                fontSize: 20
              }}>{item}</Text>
        }}
      />
    </View>

  );
};
 */
const styles = StyleSheet.create({

});

export default App;
