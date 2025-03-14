// App.js
import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


import Provider, { Context } from './scr/context/provider';
import SignUp from './scr/pages/SignUp';
import SignIn from './scr/pages/SignIn/Index';
import HomeScreen from './scr/pages/HomeUser';
import MeusPosts from './scr/pages/MeusPosts/index.js';
import Chat from './scr/pages/chat/index.js';
import CustomDrawerContent from './scr/CustomDrawer/customDrawer';
import EditUser from './scr/pages/EditUser';
import RegisterObject from './scr/pages/RegisterObject';
import CharactObject from './scr/pages/RegisterObject/CharacteristicObject';
import FinalRegister from './scr/pages/RegisterObject/finalRegister';
import RegisterComplempeted from './scr/pages/RegisterObject/registerCompleted';
import EletronicScreen from './scr/pages/HomeUser/categorias/eletronicScreen';
import Roupas from './scr/pages/HomeUser/categorias/vestes.js';
import LostObject from './scr/pages/HomeUser/LostObject';
import Acessorio from './scr/pages/HomeUser/categorias/acessorioPessoal.js';
import MaterialEscolar from './scr/pages/HomeUser/categorias/materialEscolar.js';
import Documento from './scr/pages/HomeUser/categorias/documentos.js';
import Outros from './scr/pages/HomeUser/categorias/outros.js';
import Conversations from './scr/pages/Conversas/index.js';

//adm
import Code from './scr/areaAdm/pages/Code';
import AdminDrawerNavigator from './adminDrawer';
import InfoObject from './scr/areaAdm/pages/InfoObject';
import HomeAdm from './scr/areaAdm/pages/SignIn';
import ObjectBank from './scr/areaAdm/pages/ObjectBank';
import Usuarios from './scr/areaAdm/pages/Usuarios/index.js';
import AdmDenuncia from './scr/areaAdm/pages/Denuncia';
import PostDenunciado from './scr/areaAdm/pages/Denuncia/denuncia.js';

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
        name='MeusPosts'
        component={MeusPosts}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./scr/imges/post.png')}
              style={{width:280,height:300}}
            />
            
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
      <Drawer.Screen name="StackInsideDrawer" component={StackInsideDrawer} options={({ navigation }) => ({
        headerTitle: '',
        headerRight: () => (
          <Pressable style={{ paddingRight: 20 }} onPress={() => navigation.navigate('Conversations')}>
            <Feather name="message-circle" size={30} color="#005AC5" />
          </Pressable>
        )
      })}
      />
    </Drawer.Navigator>
  );
}

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
          headerTintColor: "#fff",

          headerStyle: {
            backgroundColor: '#005AC5',
          },
          headerTitleContainerStyle: {
            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
          headerTitleStyle: {
            fontSize: 22
          }
        }} />

        <Stack.Screen name="RegisterObject" component={RegisterObject} options={{
          headerShown: true,
          headerTitle: 'Registrar Achado',
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: '#005AC5',
          },
          headerTitleContainerStyle: {
            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
          headerTitleStyle: {
            fontSize: 22
          }
        }} />

        <Stack.Screen name="CharactObject" component={CharactObject} options={{
          headerShown: true,
          headerTitle: 'Registrar Achado',
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: '#005AC5',
          },
          headerTitleContainerStyle: {
            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
          headerTitleStyle: {
            fontSize: 22
          }
        }}
        />

        <Stack.Screen name="FinalRegister" component={FinalRegister} options={{
          headerShown: true,
          headerTitle: 'Registrar Achado',
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: '#005AC5',
          },
          headerTitleContainerStyle: {
            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
          headerTitleStyle: {
            fontSize: 22
          }
        }}
        />

        <Stack.Screen name="Code" component={Code} options={{
          headerShown: true,
          headerTitle: 'Autentificando-se',
          headerTintColor: "#fff",
          headerTitleContainerStyle: {
            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
          headerStyle: {
            backgroundColor: '#6d9fdc'
          }
        }} />

        <Stack.Screen name="AdminDrawer" component={AdminDrawerNavigator} options={{ headerShown: false }} />


        <Stack.Screen name="RegisterComplempeted" component={RegisterComplempeted} options={{
          headerShown: true, headerTitle: 'Registrar achado', headerTintColor: "#fff", headerStyle: {
            backgroundColor: "#4786d3",
          }, headerTitleContainerStyle: {
            paddingLeft: '30%'
          },
          headerLeft: () => null
        }} />

        <Stack.Screen name='InfoObject' component={InfoObject} options={{ headerShown: false }} />

        <Stack.Screen name='HomeAdm' component={HomeAdm} options={{ headerShown: false }} />

        <Stack.Screen name='ObjectBank' component={ObjectBank} options={{
          headerTitle: 'Banco de objetos', headerTintColor: 'white', headerStyle: {
            backgroundColor: "#4786d3"
          },
          headerTitleContainerStyle: {

            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
        }} />

        <Stack.Screen name='EletronicScreen' component={EletronicScreen} options={{
          headerTitle: 'Eletrônicos', headerTintColor: 'white', headerStyle: {
            backgroundColor: "#4786d3"
          },
          headerTitleContainerStyle: {
            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
        }} />

        <Stack.Screen name='LostObject' component={LostObject} options={{
          headerTitle: 'Achados', headerTintColor: 'white', headerStyle: {
            backgroundColor: "#4786d3"
          },
          headerTitleContainerStyle: {
            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
        }} />

        <Stack.Screen name='Roupas' component={Roupas} options={{
          headerTitle: 'Roupas', headerTintColor: 'white', headerStyle: {
            backgroundColor: "#4786d3"
          },
          headerTitleContainerStyle: {
            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
        }} />
        <Stack.Screen name='Acessorio' component={Acessorio} options={{
          headerTitle: 'Acesório Pessoal', headerTintColor: 'white', headerStyle: {
            backgroundColor: "#4786d3"
          },
          headerTitleContainerStyle: {
            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
        }} />

        <Stack.Screen name='MaterialEscolar' component={MaterialEscolar} options={{
          headerTitle: 'Material Escolar', headerTintColor: 'white', headerStyle: {
            backgroundColor: "#4786d3"
          },
          headerTitleContainerStyle: {
            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
        }} />

        <Stack.Screen name='Documento' component={Documento} options={{
          headerTitle: 'Documentos', headerTintColor: 'white', headerStyle: {
            backgroundColor: "#4786d3"
          },
          headerTitleContainerStyle: {
            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
        }} />

        <Stack.Screen name='Outros' component={Outros} options={{
          headerTitle: 'Outros', headerTintColor: 'white', headerStyle: {
            backgroundColor: "#4786d3"
          },
          headerTitleContainerStyle: {
            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
        }} />

        <Stack.Screen name='Conversations' component={Conversations} options={{
          headerTitle: 'Conversa', headerTintColor: 'white', headerStyle: {
            backgroundColor: "#4786d3"
          },
          headerTitleContainerStyle: {
            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
        }} />

        <Stack.Screen name='Usuarios' component={Usuarios} options={{
          headerTitle: 'Banco de usuarios', headerTintColor: 'white', headerStyle: {
            backgroundColor: "#4786d3"
          },
          headerTitleContainerStyle: {

            width: '70%',
            justifyContent: "center",
            alignItems: "center",
          },
        }} />

        <Stack.Screen
          name="Chat"
          component={Chat}
          options={({ route }) => ({
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

                <Image
                  source={{ uri: route.params.userImagem }}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
                <Text style={{ fontSize: 20, marginRight: 10, color: "white" }}>{route.params ? route.params.userNome : 'Chat'}</Text>

              </View>
            ),
            headerStyle: {
              backgroundColor: "#4786d3",
            },
          })}
        />
        <Stack.Screen name='AdmDenuncia' component={AdmDenuncia} options={{
          headerTitle: 'Denúncias', headerTintColor: 'white', headerStyle: {
            backgroundColor: "#4786d3"
          },
          headerTitleContainerStyle: {

            width: '70%',
            justifyContent: "center",
            alignItems: "center",

          },
        }} />

        <Stack.Screen
          name="PostDenunciado" component={PostDenunciado}
          options={{
            headerTitle: 'Objeto', headerTintColor: 'white', headerStyle: {
              backgroundColor: "#4786d3"
            },
            headerTitleContainerStyle: {

              width: '70%',
              justifyContent: "center",
              alignItems: "center",

            },
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
