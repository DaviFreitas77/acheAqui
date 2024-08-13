import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Switch, ScrollView, } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import CustomModal from '../../ModalSignUp';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { storage } from '../../../service/firebaseConection';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import * as ImagePicker from 'expo-image-picker';

const SignUp = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')
  const [senha, setSenha] = useState('')
  const [data, setData] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [imagem, setImage] = useState(null)

  async function registerUser() {
    if (nome.length < 5 || numero.length <= 10 || senha.length <= 5 || data.length <= 9 || !isEnabled) {
      alert('Preecha todos os campos corretamente')
      return;
    } else {
      try {
        let response = await fetch('http://192.168.1.67/services/register.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
            numero: numero,
            dataNascimento: data,
            imagem: imagem
          })
        });
        if (response.ok) {
          let result = await response.json(); // Aguarde a resposta JSON
          if (result.success === false) {
            alert(result.message);
          } else {
            setModalVisible(true);
          }


        }
      } catch (error) {
        console.log(error)
      }
    }
  }


  const uploadImage = async (uri) => {
    try {
      const filename = uri.split('/').pop();
      const storageRef = ref(storage, `images/${filename}`);

      const response = await fetch(uri);
      const blob = await response.blob();

      await uploadBytes(storageRef, blob);

      const url = await getDownloadURL(storageRef);
      setImage(url); 
      return url;
    } catch (error) {
      console.error('Erro ao fazer upload da imagem:', error);
    }
  };

  const pickImage = async () => {
    // Solicitar permissões
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Desculpe, precisamos de permissões para acessar a galeria!');
      return;
    }

    // Abrir a galeria
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);

      const url = await uploadImage(uri);
      if (url) {
        console.log('URL da imagem:', url);
      } else {
        console.log('Falha no upload da imagem.');
      }
    }
  };
  return (
    <ScrollView>

      <View style={styles.container}>
        <LinearGradient
          colors={['#fff', '#4786d3']}
          style={styles.gradient}
          start={{ x: 2, y: 1 }}
          end={{ x: 3, y: 0 }}
        />

        <Image
          source={require('../../imges/signUp/logo.png')}
          style={{ width: 238, height: 238 }}
        />
        <View style={styles.editImage}>
          <Icon name='user-circle' size={110} />
          {imagem && <Image source={{ uri: imagem}} style={styles.overlayImage} />}


          <Pressable onPress={pickImage}>
            <Text style={styles.txtEditFoto}>Editar Foto</Text>
          </Pressable>

        </View>
        <View style={styles.ContainerInput}>

          <View style={styles.viewInput}>
            <Text style={styles.labelInput}>Seu Nome</Text>
            <TextInput
              placeholder='Nome e Sobrenome'
              placeholderTextColor="#707070"
              style={styles.input}
              onChangeText={(text) => setNome(text)}
              value={nome}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.labelInput}>Numero do Celular</Text>
            <TextInput
              placeholder='ex: 11964928492'

              placeholderTextColor="#707070"
              style={styles.input}
              onChangeText={(text) => setNumero(text)}
              value={numero}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.labelInput}>Email institucional etec</Text>
            <TextInput
              placeholder='ex: clodoaldo@gmail.com'
              placeholderTextColor="#707070"
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.labelInput}>Senha</Text>
            <TextInput
              placeholder='No minimo 6 caracteres'
              placeholderTextColor="#707070"
              style={styles.input}
              onChangeText={(text) => setSenha(text)}
              secureTextEntry={true}
              value={senha}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.labelInput}>Insira sua Data de nascimento</Text>
            <TextInput
              placeholder='Data de nacsimento'
              placeholderTextColor="#707070"
              style={styles.input}
              onChangeText={(text) => setData(text)}
              value={data}
            />
          </View>
          <Pressable style={styles.btn} onPress={registerUser}>
            <Text style={styles.txtBtn}>Cadastrar</Text>
          </Pressable>
          <View style={{ alignItems: "center", flexDirection: 'row', gap: 10 }}>
            <Switch
              value={isEnabled}

              thumbColor={isEnabled ? '#4adb3f' : '#f4f3f4'}
              onValueChange={toggleSwitch}

            />
            <Text style={styles.txtTerms}>
              Ao criar a conta, você concorda com as nossas Politicas de Uso e Privacidade e Notificações.
            </Text>
          </View>
        </View>
        <CustomModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
        <StatusBar style="auto" />
      </View>
    </ScrollView>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
    paddingTop: 60
  },
  gradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  ContainerInput: {
    width: '100%',
    padding: 40,
    gap: 15
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 45,
    paddingLeft: 10
  },
  labelInput: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 6
  },
  viewInput: {
    gap: 8,
  },
  btn: {
    backgroundColor: "#4786d3",
    height: 58,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: 'center'
  },
  txtBtn: {
    color: '#fff',
    fontSize: 20
  },
  txtTerms: {
    width: '80%',

  },
  overlayImage: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 100,
    top: 0, // Ajusta a posição em relação ao ícone
    left: -60, // Ajusta a posição em relação ao ícone
  },
  txtEditFoto: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#005AC5",
    borderBottomWidth: 1,
    borderBottomColor: '#005AC5'
  },
});

export default SignUp;
