import * as React from 'react';
import 'react-native-gesture-handler';
// import {View, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomSidebarMenu from './src/components/CustomSidebarMenu';
import Dashboard from './src/pages/Dashboard';
import Akun from './src/pages/Akun';

const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 280,
        },
      }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Dashboard"
          options={{drawerLabel: 'Dashboard'}}
          component={Dashboard}
        />
        <Drawer.Screen
          name="Akun"
          options={{drawerLabel: 'Akun'}}
          component={Akun}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
