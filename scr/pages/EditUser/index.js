import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Context } from '../../context/provider';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../../service/firebaseConection';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

export default function EditUser() {
   
    const { nomeUser, setNomeUser, emailUser, numeroUser, setImagemUser, imagemUser, nascUser, idUser,setNumeroUser } = useContext(Context);
      console.log(nomeUser)
      console.log(imagemUser)
    const [edit, setEdit] = useState(false);
    const [newName, setNewName] = useState(nomeUser);
    const[newNumero,setNewNumero] = useState(numeroUser)
  

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

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

    const pickImage = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Desculpe, precisamos de permissões para acessar a galeria!');
            return;
        }
    
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        });
    
        if (!result.canceled) {
            const uri = result.assets[0].uri;
            const url = await uploadImage(uri); 
            if (url) {
               
                console.log('URL da imagem após o upload:', url);
                try {
                    
                    const response = await axios.put(`http://192.168.1.72/services/atualizaRegistro.php`, {
                        id: idUser,         
                        imagem: url         
                    });
                    
                    if (response.status === 200) {
                        console.log('Imagem do usuário atualizada com sucesso:', response.data);
                        setImagemUser(url)
                    } else {
                        console.log('Erro', response.data);
                    }
                } catch (error) {
                    console.error( error);
                }
            } else {
                console.log('Falha no upload da imagem.');
            }
        }
    };
    const requestBody = () => {
        const body = {
            id: idUser,
            ...(newName !== nomeUser && { nome: newName }),
            ...(newNumero !== numeroUser && { numeroCelular: newNumero })
        };
        return body;
    };

    const updateName = async () => {
        const body = requestBody();
        if (Object.keys(body).length === 1) { 
            alert('Nenhuma alteração foi feita.');
            return;
        }

        try {
            const response = await fetch('http://192.168.1.65/services/atualizaRegistro.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                let result = await response.json();
                if (result.status === "success") { 
                    if (newName !== nomeUser) setNomeUser(newName);
                    if (newNumero !== numeroUser) setNumeroUser(newNumero);
                    setEdit(false)
                    alert('Informações atualizadas com sucesso!');
                } else {
                    alert('Erro na atualização: ' + result.message);
                }
            } else {
                alert('Erro: ' + response.statusText);
            }
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao tentar atualizar suas informações.');
        }   
    };

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
                <Pressable onPress={() => setEdit(!edit)} style={styles.input}>
                    <View style={{flexDirection:"row",gap:280}}> 
                        <Text style={styles.tittleInput}>Nome</Text>
                        <Text style={[styles.tittleInput,{color:'red',fontWeight:'bold'}]}>Editar</Text>
                    </View>
                    {edit ? (
                        <TextInput
                        style={styles.txtInput} 
                            placeholder='Novo nome'
                            value={newName}
                            onChangeText={setNewName}
                            autoFocus
                        />
                    ) : (
                        <Text style={styles.txtInput}>{nomeUser}</Text>
                    )}
                </Pressable>

                <View style={styles.input}>
                    <Text style={styles.tittleInput}>Email</Text>
                    <Text style={styles.txtInput}>{emailUser}</Text>
                </View>

                <View style={styles.input}>
                <View style={{flexDirection:"row",gap:260}}> 
                        <Text style={styles.tittleInput}>Telefone</Text>
                        <Text style={[styles.tittleInput,{color:'red',fontWeight:'bold'}]}>Editar</Text>
                    </View>
                    <TextInput 
                        style={styles.txtInput} 
                        value={newNumero} 
                        onChangeText={setNewNumero}
                        placeholder='Novo número'
                    />
                </View>

                <View style={styles.input}>
                    <Text style={styles.tittleInput}>Data de nascimento</Text>
                    <Text style={styles.txtInput}>{formatDate(nascUser)}</Text>
                </View>
                <Pressable onPress={updateName} style={styles.btn}>
                    <Text style={styles.txtBtn}>Atualizar Informações</Text>
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
    overlayImage: {
        position: 'absolute',
        width: 110,
        height: 110,
        borderRadius: 100,
        top: 0,
        left: -60,
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
    },
    btn: {
        backgroundColor: "#4786d3",
        height: 58,
        borderRadius: 13,
        alignItems: "center",
        justifyContent: 'center',
        width: '70%'
    },
    txtBtn: {
        color: '#fff',
        fontSize: 20
    },
});