import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, Alert } from 'react-native';
import { useContext } from 'react';
import { Context } from '../../../context/provider';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function ObjectBank() {
  const {urlApi} = useContext(Context)
  const { nomeAdm } = useContext(Context);
  const { emailAdm } = useContext(Context);
  const navigation = useNavigation(); 
  const [post, setpost] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${urlApi}/services/getPost.php`);
      
        setpost(response.data);

      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };
    fetchData();
  }, [post]);

  const togglePostStatus = async (id, currentStatus) => {
    const atuacao = currentStatus === "ativado" ? 'desativar' : 'ativar';
    try {
      const response = await axios.patch(`${urlApi}/services/deletarPost.php`, {
        id: id,
        atuacao: atuacao,
      });
      console.log(response.data);
      alert(`Postagem ${atuacao === 'ativar' ? 'reativada' : 'desativada'} com sucesso`);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmToggleStatus = (id, currentStatus) => {

    Alert.alert(
      "Confirmar",
      `Tem certeza?`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "OK", onPress: () => togglePostStatus(id, currentStatus) },
      ]
    );
  };

  const handleVisualizar = async (idPost) => {
  
    try {
     
      const response = await axios.get(`${urlApi}/services/getPostDetails.php`, {
        
        params: { idPost }
      });
  
      console.log(response.data); 
      navigation.navigate('PostDenunciado', { postDetails: response.data });
    
    } catch (error) {
      console.error('Erro ao buscar os detalhes do post:', error);
    }
     
    
  };
  return (
    <View style={styles.container}>
      <View style={{ width: "90%", borderBottomWidth: 1, borderBottomColor: '#888888', height: 100 }}>
        <View style={styles.header}>
          <Image
            source={require('../../../imges/homeAdm/adm.jpeg')}
            style={{ width: 80, height: 80, borderRadius: 100 }}
          />
          <View>
            <Text style={{ fontSize: 22 }}>{nomeAdm}</Text>
            <Text style={{ fontSize: 14 }}>{emailAdm}</Text>
          </View>
        </View>

      </View>
      <View style={{ width: '100%', marginTop: 40, borderBottomWidth: 1, borderBottomColor: '#888888', height: 70, padding: 15 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Objetos cadastrados
        </Text>
      </View>

      <View style={styles.headerRow}>
        <Text style={styles.headerText}>ativ/desat</Text>
        <Text style={styles.headerText}>exibir</Text>
        <Text style={styles.headerText}>ID Post</Text>
        <Text style={styles.headerText}>Nome</Text>
        <Text style={styles.headerText}>Cor</Text>
        <Text style={styles.headerText}>?</Text>
      </View>

      {post.length > 0 ? (
        post.map((item) => (
          <View key={item.id} style={styles.dataRow}>
            <TouchableOpacity style={styles.dataText} onPress={() => confirmToggleStatus(item.idPost, item.nomeStatus)}>
              <Text style={{ paddingLeft: 25 }}>
                <Icon name="trash" color={item.nomeStatus === "ativado" ? "red" : "green"} size={20} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleVisualizar(item.idPost)} style={styles.dataText}>
              <Text style={{ paddingLeft: 25 }}>
                <Icon name='eye' color="#4b7099" size={20} />
              </Text>
            </TouchableOpacity>
            <Text style={styles.dataText}>{item.idPost}</Text>
            <Text style={styles.dataText}>{item.descSubCategoria}</Text>
            <Text style={styles.dataText}>{item.descCor}</Text>


            {item.nomeStatus === "ativado" ? (
              <Text style={{ color: "green" }}> {item.nomeStatus} </Text>
            ) :
              <Text style={{ color: "red" }}> {item.nomeStatus} </Text>
            }



          </View>
        ))
      ) : (
        <Text style={styles.noDataText}>Nenhum objeto encontrado</Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#4b7099',
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#b1b1b1',
  },
  headerText: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dataRow: {
    flexDirection: 'row',
    backgroundColor: '#D4D2D2',
    paddingVertical: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#b1b1b1',
  },
  dataText: {
    flex: 1,
    textAlign: 'center',

  },

});
