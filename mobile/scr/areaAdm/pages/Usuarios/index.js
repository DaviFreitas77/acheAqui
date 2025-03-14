import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList,View,Image,Pressable} from 'react-native';
import axios from 'axios';
import { Context } from '../../../context/provider';

const Usuarios = () => {
    const [users,setUsers]= useState([])
    const { urlApi } = useContext(Context)
    const { nomeAdm } = useContext(Context);
    const { emailAdm } = useContext(Context);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${urlApi}/services/getUsuarios.php`)
   
                setUsers(response.data)
            } catch (error) {
                console.log(error)
            }

        }
        fetchUsers()
    }, [urlApi])

    const renderItem = ({ item }) => (
        <View style={{height:50,justifyContent:"center",marginBottom:25}}>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:20,gap:10,justifyContent:"space-between"}}>
                <View style={{flexDirection:"row",alignItems:"center",marginTop:20,gap:10}}>
                  <Image
                      source={{uri:item.imagem}}
                      style={{width:60,height:60,borderRadius:30,marginBottom:10}}
                  />
                   <View style={{marginBottom:10}}>
                     <Text style={{marginLeft:10}} >{item.nome}</Text>
                     <Text style={{color:'gray',marginLeft:10}}>{item.email}</Text>
                   </View>
                </View>

                 <Pressable style={styles.btn}>
                  <Text style={{color:"white"}}>Remover</Text>
                 </Pressable>
            </View>

        </View>
      );
    

    return (
        <SafeAreaView style={styles.container}>
              <View style={{ width: "90%", borderBottomWidth: 1, borderBottomColor: '#888888', height: 100,marginTop:50 }}>
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
      

            <FlatList
               data={users}
               renderItem={renderItem}
               keyExtractor={item=> item.id.toString()}
                style={{width:"90%",flex:1}}
                showsVerticalScrollIndicator={false}
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
        gap:70
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
      },
      btn:{
        backgroundColor:"red",
        padding:8,
    
      }
});

export default Usuarios;
