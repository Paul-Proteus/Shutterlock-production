import React, {Component} from 'react';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import styles from './StyleSheet'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    };
    
  }

  login = () => {
    const { username, password } = this.state;

    fetch('http://192.168.0.126:8080/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(response => {console.log('fetched response ', response);})
      .catch(err => console.log('error ', err));
  }

  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <View style={styles.container}>
      <Image style={{width: 200, height: 200, marginBottom: 30}} source={{uri: 'https://i.imgur.com/PCVFXZH.png'}}/>

        <TextInput placeholder='Username' style={styles.login} onChangeText={(input) => {
          this.setState({username: input})
        }} value={this.state.username}/>

        <TextInput placeholder='Password' style={styles.login} onChangeText={(input) => {
          this.setState({password: input})
        }} value={this.state.password}/>

        <TouchableOpacity style={styles.button} 
          onPress={() => {
            console.log(this.login());
            this.props.navigation.navigate('Main')
          }}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Signup')}}>

          <Text>Signup</Text>
        </TouchableOpacity>

      </View>
    )
  }
}