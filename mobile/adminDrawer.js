import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeAdm from './scr/areaAdm/pages/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerAdmin from './scr/CustomDrawer/customDrawerAdm';

const Drawer = createDrawerNavigator();

import InfoObject from './scr/areaAdm/pages/InfoObject';


function AdminDrawerNavigator() {
    return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerAdmin {...props} />}  >
        <Drawer.Screen name="HomeAdm" component={HomeAdm} options={{ headerTitle: '' }} />
        <Drawer.Screen name="InfoObject" component={InfoObject} options={{ headerTitle: '' }} />
       
     
      </Drawer.Navigator>
    );
  }


  export default AdminDrawerNavigator;