import React from 'react';
import {ActivityIndicator, AsyncStorage, StatusBar, View} from 'react-native';
import User from '../User';
import firebase from 'firebase';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  UNSAFE_componentWillMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyAYBMs9ratj4G1wI6syYifDZVD8WUc4bqE',
      authDomain: 'final-426da.firebaseapp.com',
      databaseURL: 'https://final-426da.firebaseio.com',
      projectId: 'final-426da',
      storageBucket: 'final-426da.appspot.com',
      messagingSenderId: '370799926646',
      appId: '1:370799926646:web:793939561d56204941ae57',
      measurementId: 'G-R6N0FB373T',
    };
    firebase.initializeApp(firebaseConfig);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
