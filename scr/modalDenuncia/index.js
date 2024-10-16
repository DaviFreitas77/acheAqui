import React, { useContext, useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View,FlatList } from 'react-native';
import Foundation from '@expo/vector-icons/Foundation';
import axios from 'axios';
import { Context } from '../context/provider';
import LottieView from 'lottie-react-native';
const Denuncia = ({ visible, onClose }) => {
    const {urlApi,idUser} = useContext(Context);
    const [denuncia,setDenuncia] = useState([])
    const {data} = useContext(Context)
    const[idPost,setIdPost] = useState(null)
    
    const[sucessoMsg,setSucessoMsg] = useState(false)
   
    const [activeDenuncia,setActiveDenuncia] = useState('')
    const [idDenuncia,setIdDenuncia] = useState('')
    const originalColor = '#ffffff';
    const activeTagColor = '#fc6666';

    useEffect(() => {
      
      if (data.length > 0) {
          const idPosts = data.map(post => post.idPost);
          setIdPost(idPosts[0]); 
      }
  }, [data]);

     const pressDenuncia = (item) => {
        setActiveDenuncia(item.tipoDenunicia);
        setIdDenuncia(item.idTipoDenuncia)
    };
 
    
 
 
    useEffect(() => {
        const fetchDenuncia = async () => {
            try {
                const response = await axios.get(`${urlApi}/services/getDenuncia.php`);

                setDenuncia(response.data)
            } catch (error) {
                console.log(error); 
            }
        };

        fetchDenuncia(); 
    }, []);

    const enviarDenuncia =async () =>{
      try {
        const response = await axios.post(`${urlApi}/services/postDenuncia.php`, {
            idDenuncia: idDenuncia, 
            idUsuario: idUser,   
            idPost: idPost
        });

        setSucessoMsg(true)
        console.log(response.data); 
    } catch(error){
            console.log(error)
        }

    }

    const renderItem = ({item}) =>{
        return(

            <Pressable onPress={()=>pressDenuncia(item)} style={[styles.renderitem,{backgroundColor:activeDenuncia === item.tipoDenunicia ? activeTagColor : originalColor }]}>
                <Text style={{fontWeight:'bold',fontSize:20}}>{item.tipoDenunicia}</Text>
            </Pressable>
        )
    }
  return (
    
    <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
>
    <View style={styles.overlay}>
        <View style={styles.modalView}>
            {sucessoMsg ? (
                <View style={{flex:1,justifyContent:"space-between",alignItems:"center",width:"100%"}}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                    
                        <Text style={styles.modalText}>Denúncia Realizada com Sucesso!</Text>
                    </View>
                    <LottieView 
                      source={require('../lottieFiles/correto.json')}
                      autoPlay
                      loop={false}
                      style={{ width: 250, height: 250 }}
                    />
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {
                            setSucessoMsg(false); 
                            onClose();
                        }}
                    >
                        <Text style={styles.textStyle}>Fechar</Text>
                    </Pressable>
                </View>
            ) : (
                <>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                        <Foundation name="alert" size={50} color="red" style={{ marginBottom: 15 }} />
                        <Text style={styles.modalText}>Denúncia</Text>
                    </View>
                    <FlatList 
                        data={denuncia}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.idTipoDenuncia.toString()}
                        style={{ marginTop: 10, width: "100%" }}
                    />
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={enviarDenuncia}
                    >
                        <Text style={styles.textStyle}>Enviar</Text>
                    </Pressable>
                </>
            )}
        </View>
    </View>
</Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  },

  modalView: {
    flex:.5,
    width:"80%",
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height:60,
    width:"100%",
    justifyContent:"center"
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:20
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight:"bold",
    fontSize:22
  },
  renderitem:{
    borderColor:'black',
    borderWidth:1,
    marginTop:30,
    borderRadius:8,
    height:60,
    alignItems:"center",
    justifyContent:"center"
  }
});

export default Denuncia;