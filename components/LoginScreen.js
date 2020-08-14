// import React from 'react';
// import { Text, View, Button } from 'react-native';
// export default class LoginScreen extends React.Component {
//   render() {
//     return (
//       <View>
//         <Text>My Login Screen</Text>
//         <Button title="Navigate to Chat"
//           onPress = {()=>this.props.navigation.navigate('Chat')}
//         />
//       </View>
//     );
//   }
// }






// import React from 'react';
// //import { Constants, ImagePicker, Permissions } from 'expo';
// import {
//   StyleSheet, Text,
//   TextInput,  TouchableOpacity, View,
//   Button, ImageEditor,
// } from 'react-native';
// import Fire from '../Fire';

// class LoginScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Scv Chatter',
//   };

//   state = {
//     name: 'Alex B',
//     email: 'freedas09@gmail.com',
//     password: 'qwerty@12',
//   };

//   // using Fire.js
//   onPressLogin = async () => {
//     console.log('pressing login... email:' + this.state.email);
//     const user = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//     };

//     const response = Fire.login(
//       user,
//       this.loginSuccess,
//       this.loginFailed
//     );
//   };

//   loginSuccess = () => {
//     console.log('login successful, navigate to chat.');
//     this.props.navigation.navigate('Chat', {
//       name: this.state.name,
//       email: this.state.email,
//     });
//   };
//   loginFailed = () => {
//     console.log('login failed ***');
//     alert('Login failure. Please tried again.');
//   };


//   onChangeTextEmail = email => this.setState({ email });
//   onChangeTextPassword = password => this.setState({ password });


//   render() {
//     return (
//       <View>
//         <Text style={styles.title}>Email:</Text>
//         <TextInput
//           style={styles.nameInput}
//           placeHolder="test3@gmail.com"
//           onChangeText={this.onChangeTextEmail}
//           value={this.state.email}
//         />
//         <Text style={styles.title}>Password:</Text>
//         <TextInput
//           style={styles.nameInput}
//           onChangeText={this.onChangeTextPassword}
//           value={this.state.password}
//         />
//         <Button
//           title="Login 2"
//           style={styles.buttonText}
//           onPress={this.onPressLogin}
//         />

//         {/* <Button
//           title="Go to create new account"
//           style={styles.buttonText}
//           onPress={() => this.props.navigation.navigate("Create")}
//         /> */}
//       </View>
//     );
//   }
// }

// const offset = 16;
// const styles = StyleSheet.create({
//   title: {
//     marginTop: offset,
//     marginLeft: offset,
//     fontSize: offset,
//   },
//   nameInput: {
//     height: offset * 2,
//     margin: offset,
//     paddingHorizontal: offset,
//     borderColor: '#111111',
//     borderWidth: 1,
//     fontSize: offset,
//   },
//   buttonText: {
//     marginLeft: offset,
//     fontSize: 42,
//   },
// });

// export default LoginScreen;










import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import Fire from '../Fire';
export default class LoginScreen extends React.Component{
  state = {
    name:"Ram"
  }



    continue = async () => {
    console.log('pressing login... email:' + this.state.name);
    const user = {
      name: this.state.name,
    };

    const response = Fire.checkAuth(
      user,
      this.loginSuccess,
      this.loginFailed
    );
  };

  loginSuccess = () => {
    console.log('login successful, navigate to chat.');
    this.props.navigation.navigate('Chat', {
      name: this.state.name,
    });
  };
  loginFailed = () => {
    console.log('login failed ***');
    alert('Login failure. Please tried again.');
  };






  // continue = () => {
  //   this.props.navigation.navigate("Chat", {name:this.state.name})
  // }

  render(){
    return(
      <View>
        <Text>User Name</Text>
        <TextInput placeholder="DD in Code" onChangeText={name => {this.setState({name})}} value={this.state.name} />
        <View>
          <TouchableOpacity onPress={this.continue}>
            <Text>Button</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}















// const LoginScreen = (props) => {
//   const [name, SetName] = useState('');

//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <View>
//           <Text>User Name</Text>
//           <TextInput
//             placeholder="Put here"
//             onChangeText={(name) => {
//               SetName(name);
//             }}
//             value={name}
//           />
//           <View>
//             <TouchableOpacity onPress={() => props.name.navigate('Chat', {name: name})}>
//               <Text>Press Here To Go</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const offset = 24;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   title: {
//     marginTop: offset,
//     marginLeft: offset,
//     fontSize: offset,
//   },
//   nameInput: {
//     height: offset * 2,

//     margin: offset,
//     paddingHorizontal: offset,
//     borderColor: '#111111',
//     borderWidth: 1,
//   },
//   buttonText: {
//     marginLeft: offset,
//     fontSize: offset,
//   },
// });

// export default LoginScreen;
