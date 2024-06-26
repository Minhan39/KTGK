import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './BottomTabs';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ToDo from '../screens/ToDo';
import Lab3Tabs from './Lab3Tabs';
import Add from '../screens/Add';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ToDo" component={ToDo} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Lab3Tabs" component={Lab3Tabs} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
