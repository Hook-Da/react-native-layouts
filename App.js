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
  Keyboard,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  SafeAreaView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const listOfHeroes = [
  'Hook', 'Hulk', 'Sentry', 'Void'
];

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const images = [
  { id: 1, src: require('./assets/hulk2003.jpg') },
  { id: 2, src: require('./assets/void.png') },
  { id: 3, src: require('./assets/hulk2003.jpg') },
  { id: 4, src: require('./assets/hulk2003.jpg') },
  { id: 5, src: require('./assets/hulk2003.jpg') },
]

class App extends React.Component {
/* 
  state = {
    searchBarFocused: false
  }
 */
  constructor() {
    super();
    this.state = {
      activeImage: null
    }

    this.allImages = {};
    this.oldPosition = {};
    this.position = new Animated.ValueXY();
    this.dimensions = new Animated.ValueXY();
  }

  /* componentDidMount() {
    this.allImages = {};
    this.oldPosition = {};
    this.position = new Animated.ValueXY();
    this.dimensions = new Animated.ValueXY();
  } */
/* 
  componentWillMount() {
    this.allImages = {};
    this.oldPosition = {};
    this.position = new Animated.ValueXY();
    this.dimensions = new Animated.ValueXY();
  } */
  /* 
  * работают только 2 even keyboardDidShow, keyboardDidHide
   */
  openImage = (index) => {
    this.allImages[index].measure((x,y, width, height, pageX, pageY) => {
      this.oldPosition.x = pageX;
      this.oldPosition.y = pageY;
      this.oldPosition.width = width;
      this.oldPosition.height = height;

      this.position.setValue({
        x: pageX, y: pageY
      })

      this.position.setValue({
        x: width, y: height
      })

      this.setState({
        activeImage: images[index]
      })
    })
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{ flex: 1 }}>
          {
            images.map((image, index) => {
              return (
                <TouchableWithoutFeedback key={image.id} onPress={()=>this.openImage(index)}>
                  <Animated.View 
                    style={{
                      height: SCREEN_HEIGHT - 150,
                      width: SCREEN_WIDTH,
                      padding: 15
                    }}
                  >
                    <Image source={image.src} 
                      ref={(image)=>(this.allImages[index] = image)}
                      style={{
                        flex: 1,
                        height: null,
                        width: null,
                        resizeMode: 'cover',
                        borderRadius: 20
                      }}
                    />
                  </Animated.View>
                </TouchableWithoutFeedback>
              )
            })
          }
        </ScrollView>
        <View style={StyleSheet.absoluteFill}
          pointerEvents={this.state.activeImage ? "auto" : "none"}
        >

        </View>
      </SafeAreaView>
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
