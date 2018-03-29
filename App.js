
// #5d6d7e grey blue
// #34495e dark blue
// #d0ece7 aqua
// #abebc6 lime
// #82e0aa darker lime
// #186a3b evergreen



import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import {app, auth, database} from './src/firebase';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider, connect} from 'react-redux';
import {StackNavigator} from 'react-navigation';

import rootReducers from './src/reducers';

// const Emergeo = StackNavigator({
//   Home: {screen: StartScreen}
// });


export default class App extends Component {
  state = { loggedIn: null, currentUser: null}
// componentWillMount(){
//   app,

//   // auth.onAuthStateChange(user =>{
//   //   if(user){
//   //   this.setState({loggedIn: true, currentUser: user.uid})
//   // } else {
//   //     this.setState({loggedIn: false, currentUser: null})
//   //   }
//   // });
// }





  render() {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    const store = createStoreWithMiddleware(rootReducers);
    const {loggedIn, currentUser} = this.state;

    return (

      
      <Provider store={store}>
        <View style={styles.container}>
          <Text> YO MAMA </Text>
        </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
