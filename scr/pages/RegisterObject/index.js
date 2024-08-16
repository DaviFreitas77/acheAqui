import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Pressable,ActivityIndicator} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../../service/firebaseConection';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { Context } from '../../context/provider';

const RegisterObject = () => {
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const navigation = useNavigation()
    const [activeTag, setActiveTag] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const originalColor = '#ffffff';
    const activeColor = '#b1b1b1';
    const { setFormData } = useContext(Context)
    const [loading,setLoading] = useState(false)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            if (!image) {
                setImage(result.assets[0].uri);
            } else if (!image2) {
                setImage2(result.assets[0].uri);
            } else if (!image3) {
                setImage3(result.assets[0].uri);
            } else {
                Alert.alert("Limite de imagens", "Você já selecionou 5 imagens.");
            }
        }
    };

    const uploadImage = async (imageUri) => {
        if (!imageUri) return;

        const response = await fetch(imageUri);
        const blob = await response.blob();
        const filename = imageUri.split('/').pop();
        const imageRef = ref(storage, `objetos/${filename}`);

        try {
            await uploadBytes(imageRef, blob);
            const url = await getDownloadURL(imageRef);
            if (!image) {
                setImage(url);

            } else if (!image2) {
                setImage2(url);

            } else if (!image3) {
                setImage3(url);

            }


            return url;
        } catch (error) {
            alert('Upload Error', error.message);
            console.error('Upload error:', error);
        }
    };





    const handlePress = (item) => {
        setActiveTag(item);

    };
    useEffect(() => {
        console.log(activeTag);
        console.log(selectedItem)
        
    }, [activeTag,selectedItem]);



    const getPickerItems = () => {
        switch (activeTag) {
            case 'Roupa':
                return [
                    { label: 'Camiseta', value: 'camiseta' },
                    { label: 'Calça', value: 'calca' },
                    { label: 'Saia', value: 'saia' },
                    { label: 'Moletom', value: 'moletom' },
                    { label: 'Boné', value: 'bone' },
                    { label: 'Blusa', value: 'blusa' },
                    { label: 'Jaqueta', value: 'jaqueta' },
                    { label: 'Shorts', value: 'shorts' },
                    { label: 'Vestido', value: 'vestido' },
                    { label: 'Sandalha', value: 'sandalha' },
                    { label: 'Bota', value: 'bota' },
                    { label: 'Tênis', value: 'tenis' },
                ];
            case 'Eletrônico':
                return [
                    { label: 'Celular', value: 'Celular' },
                    { label: 'Notbook', value: 'Notbook' },
                    { label: 'Tablet', value: 'tablet' },
                    { label: 'Fone de Ouvido', value: 'fone_de_ouvido' },
                    { label: 'Carregador', value: 'carregador' },
                    { label: 'Câmera', value: 'camera' },
                    { label: 'Smartwatch', value: 'smartwatch' },
                    { label: 'Caixa de Som', value: 'caixa_de_som' },
                    { label: 'Pen Drive', value: 'pendrive' },
                    { label: 'Teclado', value: 'teclado' },
                    { label: 'Mouse', value: 'mouse' },


                ];
            case 'Documentos':
                return [
                    { label: 'RG', value: 'rg' },
                    { label: 'CNH', value: 'cnh' },
                    { label: 'CPF', value: 'cpf' },
                    { label: 'Certidão de Nascimento', value: 'certidao_nascimento' },
                    { label: 'Bilhete Único', value: 'bilhete_unico' },
                ]
            case 'Acessório Pessoal':
                return [
                    { label: 'Bilhete Único', value: 'bilhete_unico' },
                    { label: 'Cartão de Crédito/Débito', value: 'cartao_credito_debito' },
                    { label: 'Chave de Casa', value: 'chave_casa' },
                    { label: 'Chave do Carro', value: 'chave_carro' },
                    { label: 'Relógio', value: 'relogio' },
                    { label: 'Óculos', value: 'oculos' },
                    { label: 'Brinco', value: 'brinco' },
                    { label: 'Colar', value: 'colar' },
                    { label: 'Anel', value: 'anel' },
                    { label: 'Máscara de Proteção', value: 'mascara_protecao' },
                ]
            case 'Material Escolar':
                return [
                    { label: 'Caderno', value: 'caderno' },
                    { label: 'Caneta', value: 'caneta' },
                    { label: 'Lápis', value: 'lapis' },
                    { label: 'Borracha', value: 'borracha' },
                    { label: 'Mochila', value: 'mochila' },
                    { label: 'Apontador', value: 'apontador' },
                    { label: 'Regua', value: 'regua' },
                    { label: 'Fichário', value: 'fichario' },
                    { label: 'Canetinha', value: 'canetinha' },
                    { label: 'Marcador de Texto', value: 'marcador_texto' },
                    { label: 'Pasta de Arquivo', value: 'pasta_arquivo' },
                ]
            default:
                return [];
        }
    };

    const handleUpload = async () => {
        setLoading(true);
        const uploadedImageUrls = [];

        if (image) uploadedImageUrls.push(await uploadImage(image));
        if (image2) uploadedImageUrls.push(await uploadImage(image2));
        if (image3) uploadedImageUrls.push(await uploadImage(image3));

        setFormData({
            category: activeTag,
            item: selectedItem,
            images: uploadedImageUrls,
            cor:null,
            tamanho:null
        });

        setLoading(false); 
        
        navigation.navigate('CharactObject'); 
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.tittle}>Primeiro passo</Text>
                <Text style={{ color: 'gray' }}>Envie algumas fotos do achado e descreva sua categoria</Text>
            </View>

            <View style={styles.containerImages}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.imgBig} />
                ) : (
                    <Pressable
                        onPress={pickImage}
                        style={styles.imgBig}>
                        <Icon name='camera' size={20} />
                    </Pressable>

                )}

                <View style={{ flexDirection: 'row', gap: 6 }}>
                    <View style={{ gap: 6 }}>
                        {image2 ? (
                            <Image source={{ uri: image2 }} style={styles.imgSmall} />
                        ) : (
                            <Pressable
                                onPress={pickImage}
                                style={styles.imgSmall}>
                                <Icon name='camera' size={20} />
                            </Pressable>
                        )}

                        {image3 ? (
                            <Image source={{ uri: image3 }} style={styles.imgSmall} />
                        ) : (
                            <Pressable
                                onPress={pickImage}

                                style={styles.imgSmall}>
                                <Icon name='camera' size={20} />
                            </Pressable>

                        )}

                    </View>

                </View>
            </View>

            <View style={styles.objectCategory}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>O que é seu achado</Text>
                <Text style={{ fontSize: 16, color: "gray" }}>categoria</Text>
            </View>

            <View style={styles.containerTags}>
                {['Eletrônico', 'Roupa', 'Documentos', 'Acessório Pessoal', 'Material Escolar'].map((item, index) => (
                    <Pressable
                        key={index}
                        onPress={() => handlePress(item)}
                        style={[styles.tag, { backgroundColor: activeTag === item ? activeColor : originalColor }]}
                    >
                        <Text style={{ fontSize: 12, fontWeight: '600' }}>{item}</Text>
                    </Pressable>
                ))}
            </View>

            {activeTag && (
                <View style={styles.pickerContainer}>
                    <RNPickerSelect
                        onValueChange={(value) => setSelectedItem(value)}
                        items={getPickerItems()}
                        placeholder={{ label: 'Selecione...', value: null }}
                        style={pickerSelectStyles}
                    />
                </View>
            )}
            
              <ActivityIndicator size="small" color="#0000ff" />
            {(selectedItem && image && image2 && image3) && (
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Pressable
                        onPress={async () => {
                            await handleUpload();
                            navigation.navigate('CharactObject', { formData });
                        }}
                        style={styles.btnAdvance}
                    >
                        <Text style={{ fontSize: 20, fontWeight: '600', color: "#fff" }}>Próximo</Text>
                    </Pressable>
                </View>
            )}


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 80,
        gap: 20
    },
    header: {
        alignItems: "center",
    },
    tittle: {
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
        paddingHorizontal: 40
    },
    tag: {
        width: 100,
        height: 38,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#b1b1b1"
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

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        width: '100%',
        height: 40,
    },
});

export default RegisterObject;