import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Context } from '../../context/provider';
import * as ImagePicker from 'expo-image-picker';
import { useContext } from 'react';
import { storage } from '../../../service/firebaseConection';
import { ref,getDownloadURL,uploadBytes } from 'firebase/storage';
export default function EditUser() {

    const { nomeUser } = useContext(Context);
    const { emailUser } = useContext(Context);
    const { numeroUser } = useContext(Context);
    const {imagemUser} = useContext(Context);
    const {setImagemUser} = useContext(Context)
    const {idUser} = useContext(Context)

    console.log(idUser)

    async function updateInfo() {
       
    }
    const uploadImage = async (uri) => {
        try {
            const filename = uri.split('/').pop();
            const storageRef = ref(storage, `images/${filename}`);
        
            const response = await fetch(uri);
            if (!response.ok) throw new Error('Falha ao buscar imagem');
        
            const blob = await response.blob();
        
            await uploadBytes(storageRef, blob);
        
            const url = await getDownloadURL(storageRef);
        
            return url;
        } catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
            return null;
        }
    };

    const pickImage = async () =>{
        //pedir permição
        const {status} = await ImagePicker.requestCameraPermissionsAsync();
        if(status !== 'granted') {
            alert('Desculpe, precisamos de permissões para acessar a galeria!');
            return;
        }

        //abrir galeria
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:1
        })

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setImagemUser(uri); 
            console.log('Imagem selecionada:', uri); 
    
            const url = await uploadImage(uri); 
            if (url) {
                setImagemUser(url); 
                console.log('URL da imagem após o upload:', url);
            } else {
                console.log('Falha no upload da imagem.');
            }
        }
    
    } 
    return (
        <View style={styles.container}>
            <View style={styles.editImage}>
                <Icon name='user-circle' size={110} />
                <Image
          source={imagemUser ? { uri: imagemUser } : require('../../imges/signUp/logo.png')}
          style={styles.overlayImage}
        />
               

                <Pressable onPress={pickImage}>
                    <Text style={styles.txtEditFoto}>Editar Foto</Text>
                </Pressable>

            </View>
            <View style={{ width: '90%', alignItems: "center", gap: 25 }}>

                <View style={styles.input}>
                    <Text style={styles.tittleInput}>Nome</Text>
                    <Text style={styles.txtInput}>{nomeUser}</Text>
                </View>

                <View style={styles.input}>
                    <Text style={styles.tittleInput}>Email</Text>
                    <Text style={styles.txtInput}>{emailUser}</Text>
                </View>

                <View style={styles.input}>
                    <Text style={styles.tittleInput}>Telefone</Text>
                    <Text style={styles.txtInput}>{numeroUser}</Text>
                </View>
                <Pressable onPress={updateInfo}>
                    <Text>Atualizar informções</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 80,
        gap: 30
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    overlayImage: {
        position: 'absolute',
        width: 110,
        height: 110,
        borderRadius: 100,
        top: 0, // Ajusta a posição em relação ao ícone
        left: -60, // Ajusta a posição em relação ao ícone
    },
    editImage: {
        gap: 20
    },
    txtEditFoto: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#005AC5",
        borderBottomWidth: 1,
        borderBottomColor: '#005AC5'
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        justifyContent: 'center',
        paddingLeft: 15,
    },
    txtInput: {
        fontSize: 18,
        fontWeight: '600'

    },
    tittleInput: {
        fontSize: 12
    }

});
