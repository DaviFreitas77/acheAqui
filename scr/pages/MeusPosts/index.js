import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Context } from '../../context/provider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const MeusPosts = () => {
  const { idUser, urlApi } = useContext(Context);
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`${urlApi}/services/getPostUsuario.php`, {
        params: { id: idUser },
      });
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const renderItem = ({ item }) => {
    let images = [];
    try {
      images = JSON.parse(item.images) || [];
    } catch (error) {
      console.error('Erro ao converter images:', error);
      alert('Erro ao carregar imagens.');
    }

    return (
      <View style={{ marginBottom: 20 }}>
        {images.length > 0 ? (
          <Image source={{ uri: images[0] }} style={styles.image} />
        ) : (
          <Text>Imagem não disponível</Text>
        )}
        <View style={{ padding: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.objeto}>Nome: {item.descSubCategoria}</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Objeto devolvido</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.objeto}>Marca: {item.descMarca}</Text>
          <Text style={styles.objeto}>Cor: {item.descCor}</Text>
          <Text style={styles.objeto}>Andar encontrado: {item.descAndar}</Text>
          <Text style={styles.objeto}>Local encontrado: {item.descLocal}</Text>
          <Text style={styles.objeto}>Data de registro: {item.dataRegistro}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        
        <TouchableOpacity onPress={fetchPost}>
          <MaterialIcons name="refresh" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.inner}>
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.idPost.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  objeto: {
    color: '#000',
    fontWeight: 'bold',
    margin: 2,
    fontSize: 20,
  },
  image: {
    width: 400,
    height: 500,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: '#82d26d',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MeusPosts;
