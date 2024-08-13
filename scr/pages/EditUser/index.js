import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Context } from '../../context/provider';
import * as ImagePicker from 'expo-image-picker';
import { useContext } from 'react';
export default function EditUser() {
    const [image,setImage] = useState(null)
    const { nomeUser } = useContext(Context);
    const { emailUser } = useContext(Context);
    const { numeroUser } = useContext(Context);
    const {imagemUser} = useContext(Context);

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

        if (!result.canceled){
            setImage(result.assets[0].uri);

        }
        console.log(image)
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
