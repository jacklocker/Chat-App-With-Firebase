
// import React from 'react';
// import Providers from './src/navigation';

// export default function App() {
//   return <Providers />;
// }






// import LoginScreen from './components/LoginScreen';
// import ChatScreen from './components/ChatScreen';
// // Import React Navigation
// import { createStackNavigator } from 'react-navigation-stack'
// // Create the navigator
// export default createStackNavigator({
//   LoginScreen: LoginScreen,
//   ChatScreen: ChatScreen,
// });









// import {createAppContainer} from "react-navigation";
// import {createStackNavigator} from "react-navigation-stack";

// import LoginScreen from "./components/LoginScreen";
// import ChatScreen from "./components/ChatScreen";
// //import CreateAccount from './components/CreateAccount';

// const AppNavigator = createStackNavigator(
//   {
//     Login: LoginScreen,
//    // Create: CreateAccount,
//     Chat: ChatScreen
//   },
//   {
//     headerMode: "none"
//   }
// );

// export default createAppContainer(AppNavigator);























// const Stack = createStackNavigator();

// const LoginScreens = ({navigation}) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
//       <LoginScreen name={navigation} />
//     </View>
//   );
// };

// const ChatScreens = ({navigation}) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
//       <ChatScreen />
//     </View>
//   );
// };

// const MyStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen name="Login" component={LoginScreens} />
//       <Stack.Screen name="Chat" component={ChatScreens} />
//     </Stack.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   );
// };

// export default App;





import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import AuthLoadingScreen from './screen/AuthLoadingScreen';
import ChatScreen from './screen/ChatScreen';
import ProfileScreen from './screen/ProfileScreen';


const AppStack = createStackNavigator({Home: HomeScreen, Chat: ChatScreen, Profile: ProfileScreen});
const AuthStack = createStackNavigator({Login: LoginScreen});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));