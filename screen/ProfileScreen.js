import React from 'react';
import { SafeAreaView, Text, AsyncStorage, TextInput, TouchableOpacity, Alert } from 'react-native';
import User from '../User';
import firebase from 'firebase';
import styles from '../constants/styles';


export default class ProfileScreen extends React.Component{
    static navigationOptions = {
        title:'Profile'
    }

    state = {
        name : User.name
    }

    handelChange = Key => val => {
        this.setState({[key]: val})
    }


    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
      };

    changeName = async () => {
        if(this.state.name.length<3){
            Alert.alert('Error', 'Please enter valid name');
        }else if(User.name !== this.state.name){
            firebase.database().ref('users').child(User.phone).set({name: this.state.name});
            User.name = this.state.name;
            Alert.alert('Success', 'Name changed successfully')
        }
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Text style={{fontSize: 20, marginBottom: 20}}>
                    {User.phone}
                </Text>
                <TextInput 
                style={styles.input}
                value={this.state.name}
                onChangeText={this.handelChange('name')}
                />
                <TouchableOpacity style={{marginTop: 10}} onPress={this.changeName}>
                    <Text style={styles.btnText}>Change Name</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 10}} onPress={this._logOut}>
                    <Text style={styles.btnText}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}