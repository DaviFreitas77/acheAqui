import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeAdm from './scr/areaAdm/pages/SignIn';
import CustomDrawerAdmin from './scr/CustomDrawer/customDrawerAdm';

const Drawer = createDrawerNavigator();


function AdminDrawerNavigator() {
    return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerAdmin {...props} />}>
        <Drawer.Screen name="HomeAdm" component={HomeAdm} options={{ headerTitle: '' }} />
       
      </Drawer.Navigator>
    );
  }

  export default AdminDrawerNavigator;