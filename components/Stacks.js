import React from 'react';
import {createSwitchNavigator, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {Image, TouchableOpacity, Button} from 'react-native';
import HomeScreen from './Home';
import AlbumsScreen from './Albums';
import ModalScreen from './Modal';
import LoginScreen from './Login';
import SignupScreen from './Signup';
import CameraScreen from '../cam/Camera';

const ModalStack = createStackNavigator(
  {
    Modal: CameraScreen
  },
  {
    headerMode: 'none',
    tabBarVisible: false
  }
);

// ModalStack.navigationOptions = () => {
//   console.log('he')
//   return {
//     headerMode: 'none',
//     tabBarVisible: false
//   }
// }

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerStyle: {
            backgroundColor: 'dodgerblue',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: 'Home',
          headerLeft: (
            <Button
              onPress={() => navigation.navigate('Login')}
              title="Logout"
              color="#fff"
            />
          ),
          headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
              <Image
              source={{uri: 'https://www.peace.edu/wp-content/uploads/Camera-icon-White-SMALL.png'}}
              style={{width: 42, height: 30, marginRight: 20}}/>
            </TouchableOpacity>
          ) 
        }
      }
    },
    Modal: ModalStack
  },
  {
    mode: 'modal',
  }
);

const AlbumsStack = createStackNavigator({Albums: AlbumsScreen})

//don't edit below
const BottomStack = createBottomTabNavigator(
  {
    Home: RootStack,
    Albums: AlbumsStack
  }
)

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
  }
)

const FrontStack = createSwitchNavigator(
  {
    Front: LoginStack,
    Main: BottomStack
  },
  {
    initialRouteName: 'Front',
  }
)

export default FrontStack;
