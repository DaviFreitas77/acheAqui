// App.js
import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../context/provider";

const HomeUser = () => {
  const { nomeUser } = useContext(Context);
  const {imagemUser} = useContext(Context);
  const navigation = useNavigation()
  
  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: imagemUser }}
          style={{ width: 80, height: 80, borderRadius: 100 }}
        />
        <View style={{ width: "55%" }}>
          <Text style={styles.textHeaderTiltle}>Olá,{nomeUser}</Text>
          <Text style={styles.textHeader}>Perdeu algo? </Text>
          <Text style={styles.textHeader}>
            Faça uma breve busca para reencontrar !!{" "}
          </Text>
        </View>
      </View>
      <View style={styles.inputView}>
      
        <TextInput
          placeholder="Pesquise pelo seu objeto"
          style={styles.input}
          placeholderTextColor="#fff"
        />
      </View>
      <View style={{ gap: 15 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold", paddingLeft: 10 }}>
          Nosso Catálogo
        </Text>
        <View style={styles.containerCatalogo}>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Pressable style={styles.BtnCatalogo} onPress={()=> navigation.navigate('EletronicScreen')}>
                   <Icon  name="smartphone" size={50}/>
              </Pressable>
              <Text style={styles.txtBtNCatalogo}>Eletronicos</Text>
            </View>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Pressable style={styles.BtnCatalogo}>
                <Image source={require('../../imges/homeUser/veste.png')} 
                />
              </Pressable>
              <Text style={styles.txtBtNCatalogo}>Vestimentas</Text>
            </View>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Pressable style={styles.BtnCatalogo}>
              <Image source={require('../../imges/homeUser/pessoal.png')} 
                  
                  />
              </Pressable>
              <Text style={styles.txtBtNCatalogo}>Acessorio Pessoal</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", gap: 20 }}>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Pressable style={styles.BtnCatalogo}>
              <Image source={require('../../imges/homeUser/caderno.png')} 
                  
                  />
              </Pressable>
              <Text style={styles.txtBtNCatalogo}>Material escolar</Text>
            </View>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Pressable style={styles.BtnCatalogo}>
              <Image source={require('../../imges/homeUser/documento.png')} 
                  
                  />
              </Pressable>
              <Text style={styles.txtBtNCatalogo}>Documentos</Text>
            </View>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Pressable style={styles.BtnCatalogo}>
              <Image source={require('../../imges/homeUser/pesquisa.png')} 
                  
                  />
              </Pressable>
              <Text style={styles.txtBtNCatalogo}>Outros</Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",

    gap: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 40,
  },
  textHeaderTiltle: {
    fontWeight: "bold",
    fontSize: 26,
  },
  textHeader: {
    color: "gray",
    fontSize: 20,
  },
  containerCatalogo: {
    gap: 20,
    justifyContent:"center",
    alignItems:"center"
  },
  BtnCatalogo: {
    backgroundColor: "#4787d4",
    padding: 30,
    borderRadius:100
  },
  txtBtNCatalogo: {
    fontWeight: "bold",
  },
  inputView: {
    backgroundColor: "#4786d3",
    width: "90%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    height: 45,
    paddingRight:8
  },
  input: {
    backgroundColor: "#4786d3",
    width: "100%",
    borderRadius: 15,

    borderColor: "gray",
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    height: 45,
    paddingLeft: 15,
  },
});

export default HomeUser;
