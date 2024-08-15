import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const RegisterObject = () => {
    const navigation = useNavigation();
    const [activeColor, setActiveColor] = useState(null);
    const [activeTam, setActiveTam] = useState(null);
    const originalColor = '#ffffff';
    const activeTagColor = '#b1b1b1';

    const handleColorPress = (item) => {
        setActiveColor(item);
    };

    const handleLocationPress = (item) => {
        setActiveTam(item);
    };

   
    useEffect(() => {
        console.log( activeColor);
        console.log( activeTam);
    }, [activeColor, activeTam]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Nos dê mais características</Text>
                    <Text style={{ color: 'gray', width: '70%' }}>Nos ajude a entender melhor as características do seu achado</Text>
                </View>
                <View style={styles.containerImages}>
                    <Pressable style={styles.imgBig}>
                        <Icon name='camera' size={20} />
                    </Pressable>
                    <View style={{ flexDirection: 'row', gap: 6 }}>
                        <View style={{ gap: 6 }}>
                            <Pressable style={styles.imgSmall}>
                                <Icon name='camera' size={20} />
                            </Pressable>
                            <Pressable style={styles.imgSmall}>
                                <Icon name='camera' size={20} />
                            </Pressable>
                        </View>
                        <View style={{ gap: 6 }}>
                            <Pressable style={styles.imgSmall}>
                                <Icon name='camera' size={20} />
                            </Pressable>
                            <Pressable style={styles.imgSmall}>
                                <Icon name='camera' size={20} />
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={styles.objectCategory}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nos informe a cor do achado</Text>
                    <Text style={{ fontSize: 16, color: "gray" }}>Escolha 1 tag</Text>
                </View>
                <View style={styles.containerTags}>
                    {['Preto', 'Branco', 'Cinza', 'Azul', 'Amarelo', 'Vermelho', 'Roxo', 'Verde', 'Rosa', 'Colorido', 'Brilhante'].map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleColorPress(item)}
                            style={[styles.tag, { backgroundColor: activeColor === item ? activeTagColor : originalColor }]}
                        >
                            <Text style={{ fontSize: 12, fontWeight: '600' }}>{item}</Text>
                        </Pressable>
                    ))}
                </View>
                <View style={[styles.objectCategory]}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nos informe o tamanho do achado</Text>
                    <Text style={{ fontSize: 16, color: "gray" }}>Escolha 1 tag</Text>
                </View>
                <View style={styles.containerTags}>
                    {['Pequeno', 'Médio', 'Grande', ].map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleLocationPress(item)}
                            style={[styles.tag, { backgroundColor: activeTam === item ? activeTagColor : originalColor }]}
                        >
                            <Text style={{ fontSize: 12, fontWeight: '600' }}>{item}</Text>
                        </Pressable>
                    ))}
                </View>

                {activeColor && activeTam && (
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center",marginBottom:20 }}>
                        <Pressable
                            onPress={() => navigation.navigate('FinalRegister')}
                            style={styles.btnAdvance}
                        >
                            <Text style={{ fontSize: 20, fontWeight: '600', color: "#fff" }}>Próximo</Text>
                        </Pressable>
                    </View>
                )}
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        gap: 20
    },
    header: {
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    containerImages: {
        flexDirection: "row",
        gap: 15,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    imgBig: {
        width: 130,
        height: 210,
        borderRadius: 10,
        backgroundColor: '#f1f2f7',
        alignItems: "center",
        justifyContent: "center"
    },
    imgSmall: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#f1f2f7',
        alignItems: "center",
        justifyContent: "center"
    },
    containerMarca: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    objectCategory: {
        paddingLeft: 50
    },
    containerTags: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 40,
        marginBottom:40
    },
    tag: {
        width: 110,
        height: 38,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#b1b1b1",
      
    },
    btnAdvance: {
        width: '80%',
        backgroundColor: "#4786d3",
        alignItems: "center",
        height: 50,
        justifyContent: "center",
        borderRadius: 30,
        marginTop: 30
    },
    pickerContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    }
});

export default RegisterObject;