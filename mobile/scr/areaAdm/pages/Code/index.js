import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable,ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Context } from '../../../context/provider';
export default function Code() {
    const animation = useRef(null);
    const [loading,setLoading] = useState(false);
    const {setLogAdm} = useContext(Context);
    const {setNomeAdm} = useContext(Context);
    const {setEmailAdm} = useContext(Context);
    const{urlApi} = useContext(Context)
    const[code,setCode] = useState('');
    const navigation = useNavigation();
    const validarAdm = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${urlApi}/services/loginAdm.php`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }) 
            });

            if (response.ok) {
                let result = await response.json();
                if (result.status) {
                    
                    setNomeAdm(result.nome);
                    setEmailAdm(result.email);
                    animation.current.play(11, 49);
                    setTimeout(() => {
                        setLogAdm('adm');
                        navigation.navigate('AdminDrawer');
                    }, 2000);
                } else {
                    alert("Código inválido");
                    animation.current.play(10, 10);
                }
            } else {
                alert("Erro na resposta do servidor.");
            }
        } catch (error) {
            alert("Erro: " + error.message);
        } finally{
            setLoading(false)
        }
    };

    return (
        <View style={styles.container}>
              <LinearGradient
          colors={['#fff', '#4786d3']}
          style={styles.gradient}
          start={{ x: 2, y: 1 }}
          end={{ x: 3, y: 0 }}
        />
            <View style={{ alignItems: 'center', flex: 0.8 }}>
                <LottieView
                    source={require('../../../lottieFiles/lock.json')}
                    autoPlay={false}
                    loop={false}
                    style={{ width: 180, height: 180 }}
                    ref={animation}
                />
                <View style={{ width: "80%", gap: 50 }}>
                    <Text style={{ fontSize: 16 }}>
                        Depois que o código for inserido, você será redirecionado para a tela de login.
                    </Text>
                    <View style={{ gap: 25 }}>
                        <View style={{ gap: 10 }}>
                            <Text style={{ fontWeight: "bold", paddingLeft: 7, fontSize: 16 }}>Código</Text>
                            <TextInput
                                placeholder='Inserir código'
                                style={styles.input}
                                onChangeText={(text)=>setCode(text)}
                                secureTextEntry={true}
                            />
                        </View>
                        {loading ? (
                            <ActivityIndicator size='large' color='blue' />
                        ):(
                            <Pressable style={styles.btn} onPress={validarAdm}>
                            <Text style={styles.txtBtn}>Continuar</Text>
                        </Pressable>
                        )}
                       
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        justifyContent: 'center',
        paddingLeft: 15,
        fontSize: 16,
        borderColor: '#5E5E5E',
    },
    btn: {
        backgroundColor: "#4786d3",
        height: 58,
        borderRadius: 13,
        alignItems: "center",
        justifyContent: 'center',
    },
    txtBtn: {
        color: '#fff',
        fontSize: 20,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
});
