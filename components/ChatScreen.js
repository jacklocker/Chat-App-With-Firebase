// import React from 'react';
// import { GiftedChat } from 'react-native-gifted-chat';
// export default class ChatScreen extends React.Component {
//   render() {
//     return (
//       <GiftedChat 
//       />
//     );
//   }
// }







import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

import Fire from '../Fire';

// type Props = {
//   name?: string,
//   email?: string,
//   avatar?: string,
// };

class ChatScreen extends React.Component {

  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.navigation.state.params.name,
      email: this.props.navigation.state.params.email,
      avatar: this.props.navigation.state.params.avatar,
      id: Fire.uid,
      _id: Fire.uid, // need for gifted-chat
    };
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.send}
        user={this.user}
      />
    );
  }

  componentDidMount() {
    Fire.refOn(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.refOff();
  }
}

export default ChatScreen;










// import React, {useState, useEffect} from 'react';
// import {Platform, KeyboardAvoidingView, SafeAreaView} from 'react-native';
// import {GiftedChat} from 'react-native-gifted-chat';
// import Fire from '../Fire';



// export default class ChatScreen extends React.Component{
//   state = {
//     message: []
//   }

//   get user(){
//     return{
//       _id: Fire.uid,
//       name: this.props.navigation.state.params.name
//     }
//   }

//   componentDidMount(){
//     Fire.get(message => this.setState(previous => ({
//       message: GiftedChat.append(previous.message, message)
//     })))
//   }

//   componentWillUnmount(){
//     Fire.off();
//   }


//   render(){
//     const chat = <GiftedChat messages={this.state.message} onSend={Fire.send} user={this.user} />;

//     if(Platform.OS ==="android"){
//       return(
//         <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset = {30} enabled>
//           {chat}
//         </KeyboardAvoidingView>
//       );
//     }

//     return <SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>;
//   }
// }























// const ChatScreen = (props) => {
//   const [messages, setMessages] = useState([]);

//   get user() {
//     return{
//       _id: Fire.uid,
//       name: props.navigation.state.params.name
//     };
//   }

//   useEffect(() => {
//     Fire.get((message) =>
//       setMessages((previous) => ({
//         messages: GiftedChat.append(previous.messages, message),
//       })),
//     );
//     return () => {
//       Fire.off();
//     };
//   }, []);

//   const chat = <GiftedChat messages={messages} onSend={Fire.send} user={1} />;

//   if (Platform.OS === 'android') {
//     return (
//       <KeyboardAvoidingView
//         style={{flex: 1}}
//         behavior="padding"
//         keyboardVerticalOffset={30}
//         enabled>
//         {chat}
//       </KeyboardAvoidingView>
//     );
//   }

//   return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>;
// };

// export default ChatScreen;
