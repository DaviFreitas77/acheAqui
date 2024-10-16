import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View, Image, TouchableOpacity } from 'react-native';
import { Context } from '../../../context/provider';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const AdmDenuncia = () => {
  const { urlApi } = useContext(Context);
  const [denuncias, setDenuncias] = useState([]);
  const navigation = useNavigation(); 
  useEffect(() => {
    const fetchDenuncia = async () => {
      try {
        const response = await axios.get(`${urlApi}/services/getDenunciaAdm.php`);
        console.log(response.data);
        setDenuncias(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchDenuncia();
  }, []);

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

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.containerNome}>
          <Image
            source={{ uri: item.imagem }}
            style={{ width: 57, height: 57, borderRadius: 50 }}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.tipoDenunicia}</Text>
            <Text style={styles.idPost}>ID POST: {item.idPost}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.visualizarButton}
                onPress={() => handleVisualizar(item.idPost)}
              >
                <Text style={styles.buttonText}>Visualizar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={denuncias}
        renderItem={renderItem}
        keyExtractor={(item) => item.idPost.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  itemContainer: {
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 16,
  },
  containerNome: {
    flexDirection: "row",
    gap: 15,
   
  },
  infoContainer: {
    width: '85%',
  },
  nome: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  idPost: {
    color: "red",
  },
  buttonContainer: {
    width: "90%",
    alignItems: "flex-end",
  },
  visualizarButton: {
    backgroundColor: '#4786d3',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default AdmDenuncia;