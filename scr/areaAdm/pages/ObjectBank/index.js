import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, Pressable,TouchableOpacity,Alert} from 'react-native';
import { useContext } from 'react';
import { Context } from '../../../context/provider';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';

export default function ObjectBank() {
  const { nomeAdm } = useContext(Context);
  const { emailAdm } = useContext(Context);
  const [post,setpost] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://192.168.1.65/services/getPost.php');
            setpost(response.data);

        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        } 
    };
    fetchData();
}, [post]);

const delPost = async (id)=>{
  try{
   const response =  await axios.delete('http://192.168.1.65/services/deletarPost.php',{
    data: { id: id }
    })
     alert('Postagem excluida com sucesso')
  }catch(error){
    console.log(error)
  }

}

const confirmDelete = (id) => {
  Alert.alert(
    "Confimar Exclusão",
    "Tem certeza que deseja excluir esta postagem?",
    [
      {text:"Canelar",style: "cancel"},
      {ok:"OK",onPress: ()=> delPost(id)}

    ]
  )
}
  return (
    <View style={styles.container}>
        <View style={{width:"90%",borderBottomWidth:1,borderBottomColor:'#888888',height:100}}>
        <View style={styles.header}>
          <Image
              source={require('../../../imges/homeAdm/adm.jpeg')}
            style={{ width: 80, height: 80, borderRadius: 100 }}
          />
          <View>
            <Text style={{fontSize:22}}>{nomeAdm}</Text>
            <Text style={{fontSize:14}}>{emailAdm}</Text>
          </View>
        </View>
        
        </View>
        <View style={{width:'100%',marginTop:40,borderBottomWidth:1,borderBottomColor:'#888888',height:70,padding:15}}>
          <Text style={{fontSize:24,fontWeight:'bold'}}>
            Objetos cadastrados
          </Text>
        </View>

        <View style={styles.headerRow}>
        <Text style={styles.headerText}>excluir</Text>
        <Text style={styles.headerText}>exibir</Text>
        <Text style={styles.headerText}>ID Post</Text>
        <Text style={styles.headerText}>Nome</Text>
        <Text style={styles.headerText}>Cor</Text>
        <Text style={styles.headerText}>Data</Text>
      </View>

      {post.length > 0 ? (
        post.map((item) => (
          <View key={item.id} style={styles.dataRow}>
            <TouchableOpacity  style={styles.dataText} onPress={()=> confirmDelete(item.idPost)}>
              <Text style={{paddingLeft:25}}>
                <Icon name='trash' color="red" size={20} />
              </Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.dataText}>
              <Text style={{paddingLeft:25}}>
                <Icon name='eye' color="#4b7099" size={20} />
              </Text>
              </TouchableOpacity>
            <Text style={styles.dataText}>{item.idPost}</Text>
            <Text style={styles.dataText}>{item.nomeObjeto}</Text>
            <Text style={styles.dataText}>{item.corObjeto}</Text>
            <Text style={styles.dataText}>{item.dataRegistro}</Text>
            
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
    paddingTop:20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    gap:20
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
