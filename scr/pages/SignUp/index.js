import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Switch, ScrollView, TouchableOpacity} from 'react-native';
import { useContext, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import CustomModal from '../../ModalSignUp';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Context } from '../../context/provider';
import DateTimePicker from '@react-native-community/datetimepicker';
import Feather from '@expo/vector-icons/Feather';

const SignUp = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [senha, setSenha] = useState('');
  const [data, setData] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [show, setShow] = useState(false);
  const {urlApi} = useContext(Context)

  const [verSenha, setVerSenha] = useState(false);

 
  const [errors, setErrors] = useState({
    nome: false,
    numero: false,
    email: false,
    senha: false,
    data: false,
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setShow(false);
    setData(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  async function registerUser() {
    // Reset errors
    setErrors({
      nome: nome.length < 2,
      numero: numero.length <= 10,
      senha: senha.length <= 5,
      data: !data,
      email: !email.includes('@etec.sp.gov.br'), 
      isEnabled:! isEnabled
    });

    if (
      nome.length < 2 ||
      numero.length <= 10 ||
      senha.length <= 5 ||
      !data ||
      !isEnabled ||
      !email.includes('@etec.sp.gov.br')
    ) {
      alert('Preencha todos os campos corretamente');
      return;
    } else {
      try {
        let response = await fetch(`${urlApi}/services/register.php`, {
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
            dataNascimento: data.toISOString().split('T')[0],
            imagem: 'https://firebasestorage.googleapis.com/v0/b/acheaqui-2bc44.appspot.com/o/images%2Ff25d16d4-4ea0-4a5f-81d9-5dff69a58f49.jpeg?alt=media&token=c6ca676e-9d1c-4c7b-8392-ee0cac4691a0'
          })
        });
        if (response.ok) {
          let result = await response.json();
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

        <View style={styles.ContainerInput}>

          <View style={styles.viewInput}>
            <Text style={styles.labelInput}>Seu Nome</Text>
            <TextInput
              placeholder='Nome e Sobrenome'
              placeholderTextColor="#707070"
              style={[styles.input, errors.nome && styles.errorInput]}
              onChangeText={(text) => setNome(text)}
              value={nome}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.labelInput}>Numero do Celular</Text>
            <TextInput
              placeholder='ex: 11964928492'
              placeholderTextColor="#707070"
              style={[styles.input, errors.numero && styles.errorInput]}
              onChangeText={(text) => setNumero(text)}
              value={numero}
              keyboardType='number-pad'
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.labelInput}>Email institucional ETEC</Text>
            <TextInput
              placeholder='ex: clodoaldo@gmail.com'
              placeholderTextColor="#707070"
              style={[styles.input, errors.email && styles.errorInput]}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.labelInput}>Senha</Text>
            <TextInput
              placeholder='No mínimo 6 caracteres'
              placeholderTextColor="#707070"
              style={[styles.input, errors.senha && styles.errorInput]}
              onChangeText={(text) => setSenha(text)}
              secureTextEntry={!verSenha}
              value={senha}
            />

                  <TouchableOpacity onPress={()=> setVerSenha(!verSenha) } style={{position:'absolute', top:43, right:10}}>
                    <Feather name={verSenha ? "eye" : "eye-off"} size={20} color="black" />
                  </TouchableOpacity>
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.labelInput}>Insira sua Data de nascimento</Text>
            <Pressable onPress={showDatePicker} style={[styles.input, errors.data && styles.errorInput]}>
              <Text style={{ paddingLeft: 10 }}>
                {data ? data.toLocaleDateString() : 'Data de nascimento'}
              </Text>
            </Pressable>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={data}
                mode="date"
                is24Hour={true}
                onChange={onChange}
              />
            )}
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
              Ao criar a conta, você concorda com as nossas Políticas de Uso e Privacidade e Notificações.
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
    paddingLeft: 10,
    justifyContent: "center"
  },
  errorInput: {
    borderColor: 'red',
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
});

export default SignUp;