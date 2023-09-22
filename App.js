import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Movie from './components/Movie';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  textcolor:{
    color:'white',
    borderWidth:3,
    borderColor:'red',
    padding:5,
    width:200,
    height:100,
    textAlign:'center',
    backgroundColor:'green',
    textAlignVertical:'center',
    margin:3
  }
});
