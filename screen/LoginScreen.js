import React from 'react';
import { Text, TextInput, View, AsyncStorage} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import User from '../User';
import styles from '../constants/styles';
import firebase from 'firebase';

export default class LoginScreen extends React.Component{

    static navigationOptions = {
        header : null
    }

  state={
    phone: '',
    name: ''
  }

  handelchange= key => val =>{
    this.setState({[key]: val})
  }

  submitForm = async () =>{
    if(this.state.phone.length<10){
      alert(  "Wrong Number")
    }else if(this.state.name.length<3){
      alert("Wrong Name")
    }else{
      await AsyncStorage.setItem('userPhone', this.state.phone);
      User.phone = this.state.phone;
      firebase.database().ref('users/' + User.phone).set({name: this.state.name});
      this.props.navigation.navigate('App');
    }
    //alert(this.state.phone +'\n' +this.state.name)
  }


  render() {
    return(
      <View style={styles.container}>
        <TextInput
        placeholder="Phone Number"
        style={styles.input}
        value={this.state.phone}
        onChangeText={this.handelchange('phone')}
        />
        <TextInput
        placeholder="Name"
        style={styles.input}
        value={this.state.name}
        onChangeText={this.handelchange('name')}
        />
        <TouchableOpacity style={{backgroundColor:'#cac7c7', marginTop: 20, width: 150, height: 45, borderRadius: 15 , justifyContent: 'center', alignItems: 'center'}} onPress={this.submitForm}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color:"#727272"}}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

