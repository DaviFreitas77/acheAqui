import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context/provider';
import axios from 'axios';

const FinalRegister = () => {
    const navigation = useNavigation();
    const [andarActive, setAndarActive] = useState(null);
    const [andarId,setAndarId] = useState(null)
    const [localActive, setLocalActive] = useState(null); 
    const [localId,setLocalId] = useState(null)
    const [local, setLocal] = useState([]);
    const originalColor = '#ffffff';
    const activeTagColor = '#b1b1b1';
    const [andar, setAndar] = useState([]);
    const { formData, setFormData, idUser, nomeUser } = useContext(Context);
    const [desc, setDesc] = useState('');
    const {urlApi} =useContext(Context)

    const handleAndarPress = (item) => {
        setAndarActive(item.descAndar);
        setAndarId(item.idAndar)
    };

    const handleLocationPress = (item) => {
        setLocalActive(item.descLocal); // Atualiza o local ativo
        setLocalId(item.idLocal)
    };

    console.log('categoria',formData.category)
  
    console.log(formData)
    console.log(localId)

    const handleUpload = async () => {
        const requestData = {
            //jogar pro beckEnd
            category: formData.categoryId,
            item: formData.item,
            images: formData.images,
            cor: formData.corID,
            tamanho: formData.tamanhoId,
            caracteristica: formData.marcaId,
            andar: andarId,
            local: localId,
            idUser: idUser,
            desc: desc,

            //pegando no front para experiencia do usuario
            nomeItem:formData.itemName,
            marcaItem:formData.caracteristica,
            categoriaItem:formData.category,
            corItem:formData.cor,
            localItem:localActive,
            andarItem:andarActive,
            tamanhoItem:formData.tamanho
            


        };

        try {
            const request = await fetch( `http://${urlApi}/services/registroObjeto.php`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData)
            });

            const response = await request.json();
            setFormData(requestData);

            const newObjeto = {
                idObjeto: response.id,
                idUsuario: response.idUser
            };

            const postResponse = await fetch( `http://${urlApi}/services/criarPost.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newObjeto)
            });
            const postResponseJson = await postResponse.json();

            if (postResponse.ok) {
                navigation.replace('RegisterComplempeted');
            }

        } catch (error) {
            console.error('Error while uploading data: ', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const andarResponse = await axios.get( `http://${urlApi}/services/getandar.php`);
                setAndar(andarResponse.data);
            } catch (error) {
                console.log(error);
            }

            try {
                const localResponse = await axios.get( `http://${urlApi}/services/getLocal.php`);
                setLocal(localResponse.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Estamos quase lá...</Text>
                    <Text style={{ color: 'gray', width: '70%' }}>Nos informe onde você encontrou seu achado</Text>
                </View>
                <View style={styles.containerImages}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        {formData.images.map((img, index) => (
                            <Image key={index} source={{ uri: img }} style={styles.imgSmall} />
                        ))}
                    </View>
                    <View style={{ flexDirection: "row", gap: 10, flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
                        <View style={[styles.tag, { backgroundColor: '#b1b1b1', fontWeight: "bold" }]}>
                            <Text>{formData.category}</Text>
                        </View>
                        <View style={[styles.tag, { backgroundColor: '#b1b1b1', fontWeight: "bold" }]}>
                            <Text>{formData.item}</Text>
                        </View>
                        <View style={[styles.tag, { backgroundColor: '#b1b1b1', fontWeight: "bold" }]}>
                            <Text>{formData.cor}</Text>
                        </View>
                        <View style={[styles.tag, { backgroundColor: '#b1b1b1', fontWeight: "bold" }]}>
                            <Text>{formData.tamanho}</Text>
                        </View>
                        {formData.caracteristica[0] && (
                            <View style={[styles.tag, { backgroundColor: '#b1b1b1', fontWeight: "bold" }]}>
                                <Text>{formData.caracteristica}</Text>
                            </View>
                        )}
                    </View>
                </View>

                <View style={styles.containerDesc}>
                    <TextInput
                        placeholder='Pequena descrição de como você o encontrou'
                        style={styles.input}
                        onChangeText={(text) => setDesc(text)}
                        maxLength={250}
                    />
                </View>

                <View style={styles.objectCategory}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Em qual andar você o encontrou?</Text>
                    <Text style={{ fontSize: 16, color: "gray" }}>Escolha 1 tag</Text>
                </View>
                <View style={styles.containerTags}>
                    {andar.map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleAndarPress(item)} 
                            style={[styles.tag, { backgroundColor: andarActive === item.descAndar ? activeTagColor : originalColor }]}
                        >
                            <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.descAndar}</Text>
                        </Pressable>
                    ))}
                </View>

                <View style={styles.objectCategory}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Em qual local você o encontrou?</Text>
                    <Text style={{ fontSize: 16, color: "gray" }}>Escolha 1 tag</Text>
                </View>
                <View style={styles.containerTags}>
                    {local.map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleLocationPress(item)} 
                            style={[styles.tag, { backgroundColor: localActive === item.descLocal ? activeTagColor : originalColor }]}
                        >
                            <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.descLocal}</Text>
                        </Pressable>
                    ))}
                </View>

                {(andarActive && localActive) && (
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                        <Pressable
                            onPress={async () => {
                                await handleUpload();
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
        backgroundColor: '#fffff',
        paddingTop: 50,
        gap: 30
    },
    header: {
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    containerImages: {
        flexDirection: "column",
        gap: 15,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    imgSmall: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#f1f2f7',
        alignItems: "center",
        justifyContent: "center"
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
        marginBottom: 45
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
    containerDesc: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        borderBottomWidth: 1,
        padding: 5,
        width: '80%',
        borderBottomColor: 'gray'
    }
});

export default FinalRegister;