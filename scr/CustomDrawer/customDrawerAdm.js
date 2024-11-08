// CustomDrawerContent.js
import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../context/provider';
import { useContext } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Feather from '@expo/vector-icons/Feather';


function CustomDrawerAdmin(props) {
    const navigation = useNavigation();
    const { nomeAdm } = useContext(Context);
    const { emailAdm } = useContext(Context)
    
    
    const handleLogout = () => {
        navigation.navigate('SignIn');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Image
            source={require('../imges/homeAdm/adm.jpeg')}
          style={{ width: 80, height: 80, borderRadius: 100 }}
        />
                <Text style={styles.nomeUser}>{nomeAdm}</Text>
                <Text style={styles.emailUser}>{emailAdm}</Text>
            </View>
            <View style={styles.linha}><Text>a</Text></View>

            <View style={styles.main}>

                <Pressable onPress={() => props.navigation.navigate('ObjectBank')} style={styles.menuItem}>
                <Icon   name='user' size={30}/>
                    <Text>Banco de objetos</Text>
                </Pressable>
                <Pressable onPress={() => props.navigation.navigate('Usuarios')} style={styles.menuItem}>
                <Icon name="users" size={30} color="black" />
                    <Text>Banco de usuarios</Text>
                </Pressable>
                <Pressable onPress={() => props.navigation.navigate('RegisterObject')} style={styles.menuItem}>
                    <Icon  name='upload-cloud' size={30}/>
                    <Text>Registrar achado</Text>
                </Pressable>
                <Pressable onPress={() => props.navigation.navigate('AdmDenuncia')} style={styles.menuItem}>
                <Feather name="alert-triangle" size={30} color="black" />
                    <Text>Denuncias</Text>
                </Pressable>
               
                <Pressable onPress={handleLogout} style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Sair</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    menuItem: {
        paddingVertical: 15,
        flexDirection:"row",
        alignItems:"center",
        gap:7
    },
    logoutButton: {
        marginTop: 'auto',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
    },
    logoutText: {
        color: 'red',
        fontWeight: 'bold',
    },
    nomeUser: {
        fontWeight: 'bold',
        fontSize: 25
    },
    emailUser: {
        color: '#5E5E5E',
        fontWeight: "500"
    },
    linha: {
        backgroundColor: 'gray',
        height: 1,
        marginTop: 10,
        width: '80%'
    },
    header: {
        paddingHorizontal: 15
    },
    main: {
        flex: 1,
        paddingHorizontal: 15
    }
});

export default CustomDrawerAdmin;
