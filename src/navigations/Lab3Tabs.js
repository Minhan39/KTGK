import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from 'react-native-paper';

import Home from '../screens/Home';

const Tab = createMaterialBottomTabNavigator();

const Lab3Tabs = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      barStyle={{backgroundColor: '#fff'}}
      activeColor={theme.colors.primary}
      inactiveColor="rgba(1,1,1,0.5)"
      theme={{colors: {secondaryContainer: '#fff'}}}>
      <Tab.Screen
        name="Home1"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home2"
        component={Home}
        options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({color}) => (
            <FontAwesome name="money" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home3"
        component={Home}
        options={{
          tabBarLabel: 'Customer',
          tabBarIcon: ({color}) => (
            <FontAwesome name="users" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Home4"
        component={Home}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <FontAwesome name="gear" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Lab3Tabs;
