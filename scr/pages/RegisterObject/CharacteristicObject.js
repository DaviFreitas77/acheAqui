import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context/provider';
import axios from 'axios';
const RegisterObject = () => {
    const { formData } = useContext(Context);
    const navigation = useNavigation();
    const [activeColor, setActiveColor] = useState(null);
    const [colorId,setColorId] = useState(null)
    const [activeTam, setActiveTam] = useState(null);
    const [tamanhoId,setTamanhoId] = useState(null)
    const [activeMarca, setActiveMarca] = useState(null)
    const [marcaId,setMarcaId] = useState(null)
    const [activeCaracteristica, setActiveCaracteristica] = useState([]);
    const [cores, setCores] = useState([]);
    const [tamanho, setTamanho] = useState([]);
    const [marca, setMarca] = useState([])
    const originalColor = '#ffffff';
    const activeTagColor = '#b1b1b1';
    const { setFormData } = useContext(Context);
    const {urlApi} = useContext(Context)
    const handleColorPress = (item) => {
        setActiveColor(item.descCor);
        setColorId(item.idCor)
    };
console.log(activeMarca)
console.log(marcaId)
    const handleLocationPress = (item) => {
        setActiveTam(item.descTamanho);
        setTamanhoId(item.idTamanho)
    };

    const handleMarcaPress = (item) => {
        setActiveMarca(item.descMarca)
        setMarcaId(item.idMarca)
    }
 
    async function handleUpload() {
        setFormData(prevData => ({
            ...prevData,
            cor: activeColor,
            corID:colorId,
            tamanho: activeTam,
            tamanhoId:tamanhoId,
            caracteristica: activeMarca,
            marcaId:marcaId,
        }));
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const corResponse = await axios.get(`http://${urlApi}/services/getcor.php`)
                setCores(corResponse.data);
            } catch (error) {
                console.log(error)
            }

            try {
                const tamanhoResponse = await axios.get( `http://${urlApi}/services/getTamanho.php`)
                setTamanho(tamanhoResponse.data)
            } catch (error) {
                console.log('tamanho', error)
            }

            const objetoId = formData.item; 
            if (objetoId) {
                try {
                    const marcaResponse = await axios.get(`http://${urlApi}/services/getMarca.php?id=${objetoId}`); 
                    setMarca(marcaResponse.data);
                } catch (error) {
                    console.log('marca', error);
                }
            }
        }
        fetchData()
    }, [])
  

    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Nos dê mais características</Text>
                    <Text style={{ color: 'gray', width: '70%' }}>Nos ajude a entender melhor as características do seu achado</Text>
                </View>
                <View style={styles.containerImages}>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                        {formData.images.map((img, index) => (
                            <Image key={index} source={{ uri: img }} style={styles.imgSmall} />
                        ))}
                    </View>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <View style={[styles.tag, { backgroundColor: '#b1b1b1' }]}><Text>{formData.category}</Text></View>
                        <View style={[styles.tag, { backgroundColor: '#b1b1b1' }]}><Text>{formData.itemName}</Text></View>
                    </View>
                </View>
                <View style={styles.objectCategory}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nos informe a cor do achado</Text>
                    <Text style={{ fontSize: 16, color: "gray" }}>Escolha 1 tag</Text>
                </View>
                <View style={styles.containerTags}>
                    {cores.map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleColorPress(item)}
                            style={[styles.tag, { backgroundColor: activeColor === item.descCor ? activeTagColor : originalColor }]}
                        >
                        <Text style={{ fontSize: 12, fontWeight: '600',textAlign:"center" }}>{item.descCor}</Text>
                        </Pressable>
                    ))}
                </View>
                <View style={[styles.objectCategory]}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nos informe o tamanho do achado</Text>
                    <Text style={{ fontSize: 16, color: "gray" }}>Escolha 1 tag</Text>
                </View>
                <View style={styles.containerTags}>
                    {tamanho.map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleLocationPress(item)}
                            style={[styles.tag, { backgroundColor: activeTam === item.descTamanho ? activeTagColor : originalColor }]}
                        >
                            <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.descTamanho}</Text>
                        </Pressable>
                    ))}
                </View>

                <View style={[styles.objectCategory]}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nos informe a marca do achado</Text>
                    <Text style={styles.instructionText}>Escolha 1 tag</Text>
                </View>
                <View style={styles.containerTags}>
                    {marca.map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleMarcaPress(item)} 
                            style={[styles.tag, { backgroundColor: activeMarca === item.descMarca ? activeTagColor : originalColor }]}  
                        >
                            <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.descMarca}</Text>
                        </Pressable>
                    ))}
                </View>


                {activeColor && activeCaracteristica && activeTam && (
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                        <Pressable
                            onPress={async () => {
                                await handleUpload();
                                navigation.replace('FinalRegister');
                            }}
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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        gap: 20,
    },
    header: {
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    containerImages: {
        flexDirection: "column",
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
        justifyContent: "center",
    },
    imgSmall: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#f1f2f7',
        alignItems: "center",
        justifyContent: "center",
    },
    containerMarca: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    objectCategory: {
        paddingLeft: 50,
    },
    containerTags: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        marginBottom: 40,
      
    },
    tag: {
        width: 100,
        height: 38,
        borderRadius: 10,
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
        marginTop: 30,
    },
});

export default RegisterObject;