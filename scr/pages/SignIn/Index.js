import { StatusBar } from 'expo-status-bar';
import { useState, useContext,useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Pressable,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context/provider';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();
  const { setNomeUser } = useContext(Context);
  const { setEmailUser } = useContext(Context)
  const { setNumeroUser } = useContext(Context);
  const { setImagemUser } = useContext(Context)
  const { setNascUser } = useContext(Context)
  const { setIdUser } = useContext(Context)
  const { setLogAdm } = useContext(Context)
  const {setUrlApi} = useContext(Context)
  const {urlApi} = useContext(Context)

 
  useEffect(() => {
    setUrlApi('192.168.56.1'); 
  }, [setUrlApi])


  async function loginUser() {
    try {
      const response = await fetch(`http://${urlApi}/services/login.php`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });
      const result = await response.json();
      if (response.ok) {
        if (result.success === false) {
          alert('Usuário ou senha incorretos');
        } else {
          setNomeUser(result.nome);
          setEmailUser(result.email)
          setNumeroUser(result.numeroCelular)
          setImagemUser(result.imagem)
          setIdUser(result.id)
          setNascUser(result.dataNascimento)
          
          navigation.replace('Drawer')
          setSenha('')
        }
      } else {
        alert('Erro na resposta da API');
      }
    } catch (error) {
      alert('aa', error);
    }
  }

  return (
    <ScrollView style={{backgroundColor:"white"}}>
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
        <View style={styles.containerInput}>
          <View style={{ width: '85%' }}>
            <Text style={styles.txtEntrar}>Entrar</Text>
          </View>
          <View style={{ width: '85%', gap: 5 }}>
            <View style={{ gap: 20 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name='at-outline' size={25} color="#707070" />
                <TextInput
                  placeholder='Entre com o seu email'
                  placeholderTextColor="#707070"
                  style={styles.input}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name='lock-closed-outline' size={25} color="#707070" />
                <TextInput
                  placeholder='Digite sua senha'
                  placeholderTextColor="#707070"
                  style={styles.input}
                  secureTextEntry={true}
                  onChangeText={(text) => setSenha(text)}
                  value={senha}
                />
              </View>
            </View>
            <View style={styles.containerEsqSenha}>
              <Text style={styles.txtEsqSenha}>
                Esqueceu a senha?
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerBtn}>
          <Pressable style={styles.btn} onPress={loginUser}>
            <Text style={styles.txtBtn}>Acessar</Text>
          </Pressable>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>ou</Text>
          <Pressable style={styles.btnGoogle}>
            <Icon name='logo-google' size={30} />
            <Text style={styles.txtBtn}>Entrar com o Google</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
              Ainda não tem uma conta? CADASTRE-SE
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Code')} style={styles.btnAdm}>
            <Text style={{ fontSize: 10, color: 'white' }}>Admins</Text>
          </Pressable>
        </View>
        
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80,
    gap: 40
  },
  gradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  containerInput: {
    width: '100%',
    gap: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderBottomWidth: 1,
    width: "95%"
  },
  txtEntrar: {
    fontWeight: "bold",
    fontSize: 30
  },
  containerEsqSenha: {
    alignItems: "flex-end"
  },
  txtEsqSenha: {
    color: "#707070"
  },
  containerBtn: {
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: 30
  },
  btn: {
    width: '85%',
    backgroundColor: "#4786d3",
    borderRadius: 30,
    height: 58,
    alignItems: "center",
    justifyContent: "center"
  },
  txtBtn: {
    color: "#fff",
    fontSize: 18
  },
  btnGoogle: {
    width: '85%',
    backgroundColor: "#99b9e4",
    borderRadius: 30,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    paddingRight: 20
  },
  btnAdm: {
    width: '30%',
    backgroundColor: '#23374f',
    height: 46,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
  }
});
