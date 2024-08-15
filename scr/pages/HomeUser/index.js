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
import Icon from 'react-native-vector-icons/FontAwesome';

import { Context } from "../../context/provider";

const HomeUser = () => {
  const { nomeUser } = useContext(Context);
  const {imagemUser} = useContext(Context);
  
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
        <Icon name="at-outline" size={25} color="#707070" />
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
              <Pressable style={styles.BtnCatalogo}>
                   <Text>aaa</Text>
                   
              </Pressable>
              <Text style={styles.txtBtNCatalogo}>Eletronicos</Text>
            </View>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Pressable style={styles.BtnCatalogo}>
                <Text>aa</Text>
              </Pressable>
              <Text style={styles.txtBtNCatalogo}>Eletronicos</Text>
            </View>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Pressable style={styles.BtnCatalogo}>
                <Text>aa</Text>
              </Pressable>
              <Text style={styles.txtBtNCatalogo}>Eletronicos</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", gap: 20 }}>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Pressable style={styles.BtnCatalogo}>
                <Text>aa</Text>
              </Pressable>
              <Text style={styles.txtBtNCatalogo}>Eletronicos</Text>
            </View>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Pressable style={styles.BtnCatalogo}>
                <Text>aa</Text>
              </Pressable>
              <Text style={styles.txtBtNCatalogo}>Eletronicos</Text>
            </View>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Pressable style={styles.BtnCatalogo}>
                <Text>aa</Text>
              </Pressable>
              <Text style={styles.txtBtNCatalogo}>Eletronicos</Text>
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
  },
  BtnCatalogo: {
    backgroundColor: "#4787d4",
    padding: 45,
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
