import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View ,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { Context } from '../../context/provider';

const MeusPosts = () => {
  const {idUser,urlApi} = useContext(Context)
  const [posts,setPosts] = useState([])


 
  useEffect(()=>{
    const fetchPost = async () =>{
      try{
        const response = await axios.get(`http://${urlApi}/services/getPostUsuario.php`,{
          params:{id:idUser}
        })
        console.log(response.data)
        setPosts(response.data)
      }catch(error){
        console.log(error)
      }
    
    }

    fetchPost()
  },[])
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.inner}>
        <Text style={styles.title}>Meus Posts</Text>
        <Text style={styles.title}>Em desenvolvimento</Text>

      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
  },
});

export default MeusPosts;
