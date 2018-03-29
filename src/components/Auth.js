import React, { Component } from 'react';
import { StyleSheet,
	    Text,
	    Button,
      TextInput,
	    View,
	    TouchableHighlight, TouchableOpacity,
	    } from 'react-native';





class Auth extends Component{
    render(){  
        return(
          <View style={styles.containerStyle}>

            <View>
              <TextInput placeholder="email" style={styles.inputStyle}></TextInput>
              <TextInput placeholder="password" style={styles.inputStyle} ></TextInput>
            </View>

            <View>
            <TouchableOpacity onPress={() => alert('hi')} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>
                Sign In
                </Text>
            </TouchableOpacity>
            </View>

          </View>

     );   
    };
};


const styles = {
  containerStyle:{
    
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle:{
    backgroundColor: '#00A95B',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'orange',
    marginLeft: 5,
    marginRight: 5,
    color: '#fff',
    width: 100,
    marginTop:20
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  inputStyle: {
    padding:10,
    marginTop:10,
    textAlign: 'center',
    backgroundColor: 'white',
    width:250,
    borderRadius: 5,

  }
};


export default Auth;


