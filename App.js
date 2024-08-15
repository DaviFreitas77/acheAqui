// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


import Provider from './scr/context/provider';
import SignUp from './scr/pages/SignUp';
import SignIn from './scr/pages/SignIn/Index';
import HomeScreen from './scr/pages/HomeUser';
import ChatScreen from './scr/pages/ChatScreen';
import CustomDrawerContent from './scr/CustomDrawer/customDrawer';
import EditUser from './scr/pages/EditUser';
import RegisterObject from './scr/pages/RegisterObject';
import CharactObject from './scr/pages/RegisterObject/CharacteristicObject';
import FinalRegister from './scr/pages/RegisterObject/finalRegister';

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#cecece",
          height: 60
        },
        tabBarLabel: () => null
      }}
    >
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),

        }} />

      <Tab.Screen
        name='ChatScreen'
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="comments" color={color} size={size} />
          ),
        }} />

    </Tab.Navigator>
  );
}


function StackInsideDrawer() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="EditUser"
        component={EditUser}
        options={{
          headerShown: true,
          headerTitle: 'Editar Perfil',

        }}
      />

      <Stack.Screen
        name="RegisterObject"
        component={RegisterObject}
        options={{
          headerShown: false
        }} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="StackInsideDrawer" component={StackInsideDrawer} options={{
        headerTitle: ''
      }} />
    </Drawer.Navigator>
  );
}




// Navegador de Pilha Dentro do Drawer

// Definir o Stack Navigator
function MyStack() {

  return (
    <Provider>
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />

        <Stack.Screen name="EditUser" component={EditUser} options={{
          headerShown: true,
          headerTitle: "Editar Perfil",

          headerStyle: {
            backgroundColor: '#005AC5',

          },
          headerTitleContainerStyle: {
            paddingLeft: '50%'
          },
          headerTitleStyle: {
            fontSize: 22
          }
        }} />
        <Stack.Screen name="RegisterObject" component={RegisterObject} options={{
          headerShown: true,
          headerTitle: 'Registrar Achado',
          headerStyle: {
            backgroundColor: '#005AC5',

          },
          headerTitleContainerStyle: {
            paddingLeft: '40%'
          },
          headerTitleStyle: {
            fontSize: 22
          }



        }} />

        <Stack.Screen name="CharactObject" component={CharactObject} options={{
          headerShown: true,
          headerTitle: 'Registrar Achado',
          headerStyle: {
            backgroundColor: '#005AC5',

          },
          headerTitleContainerStyle: {
            paddingLeft: '40%'
          },
          headerTitleStyle: {
            fontSize: 22
          }

        }}
        />

        <Stack.Screen name="FinalRegister" component={FinalRegister} options={{
          headerShown: true,

          headerTitle: 'Registrar Achado',
          headerStyle: {
            backgroundColor: '#005AC5',

          },
          headerTitleContainerStyle: {
            paddingLeft: '40%'
          },
          headerTitleStyle: {
            fontSize: 22
          }

        }}
        />

      </Stack.Navigator>
    </Provider>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
