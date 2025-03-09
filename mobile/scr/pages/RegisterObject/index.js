import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, ActivityIndicator, Alert,ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../../service/firebaseConection';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { Context } from '../../context/provider';
import axios from 'axios';

const RegisterObject = () => {
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const navigation = useNavigation();
    const [activeTag, setActiveTag] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null); // ID do item
    const [selectedItemNome, setSelectedItemNome] = useState(null); // Nome do item
    const [loading, setLoading] = useState(false);
    const [categorias, setCategorias] = useState([]);
    const [subCategorias, setSubCategorias] = useState([]);
    const [activeCategoryId, setActiveCategoryId] = useState(null);
    const {urlApi} = useContext(Context)
    const originalColor = '#ffffff';
    const activeColor = '#b1b1b1';
    const { setFormData } = useContext(Context);

    

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [12, 16],
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
                Alert.alert("Limite de imagens", "Você já selecionou 3 imagens.");
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
            return url;
        } catch (error) {
            alert('Upload Error', error.message);
            console.error('Upload error:', error);
        }
    };

    const handlePress = (item, id) => {
        setActiveTag(item); 
        setActiveCategoryId(id); 
        setSelectedItem(null); 
        setSelectedItemNome(null); 
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriasResponse = await axios.get( `${urlApi}/services/getCategoria.php`);
                setCategorias(categoriasResponse.data);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }

            try {
                const subCategoriasResponse = await axios.get(`${urlApi}/services/getSubCategoria.php`);
                setSubCategorias(subCategoriasResponse.data);
            } catch (error) {
                console.error('Erro ao buscar subcategorias:', error);
            }
        };

        fetchData();
    }, []);

    const getFilteredSubCategorias = () => {
        return subCategorias.filter(sub => sub.idCategoria === activeCategoryId);
    };

    const getPickerItems = () => {
        const items = [];
        const filteredSubCategorias = getFilteredSubCategorias();
        
        filteredSubCategorias.forEach(sub => {
            items.push({ 
                label: sub.descSubCategoria, 
                value: sub.idSubCategoria 
            });
        });

        return items;
    };

    const handleUpload = async () => {
        setLoading(true);
        const uploadedImageUrls = [];

        if (image) uploadedImageUrls.push(await uploadImage(image));
        if (image2) uploadedImageUrls.push(await uploadImage(image2));
        if (image3) uploadedImageUrls.push(await uploadImage(image3));

        setFormData({
            categoryId: activeCategoryId,
            category: activeTag,
            item: selectedItem,
            itemName: selectedItemNome, 
            images: uploadedImageUrls,
            cor: null,
            tamanho: null,
        });

        setLoading(false);
        navigation.replace('CharactObject');
    };

    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.tittle}>Primeiro passo</Text>
                    <Text style={{ color: 'gray' }}>Envie algumas fotos do achado e descreva sua categoria</Text>
                </View>
                <View style={styles.containerImages}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.imgBig} />
                    ) : (
                        <Pressable onPress={pickImage} style={styles.imgBig}>
                            <Icon name='camera' size={20} />
                        </Pressable>
                    )}
                    <View style={{ flexDirection: 'row', gap: 6 }}>
                        <View style={{ gap: 6 }}>
                            {image2 ? (
                                <Image source={{ uri: image2 }} style={styles.imgSmall} />
                            ) : (
                                <Pressable onPress={pickImage} style={styles.imgSmall}>
                                    <Icon name='camera' size={20} />
                                </Pressable>
                            )}
                            {image3 ? (
                                <Image source={{ uri: image3 }} style={styles.imgSmall} />
                            ) : (
                                <Pressable onPress={pickImage} style={styles.imgSmall}>
                                    <Icon name='camera' size={20} />
                                </Pressable>
                            )}
                        </View>
                    </View>
                </View>
                <View style={styles.objectCategory}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>O que é seu achado</Text>
                    <Text style={{ fontSize: 16, color: "gray" }}>Categoria</Text>
                </View>
                <View style={styles.containerTags}>
                    {categorias.map((categoria) => (
                        <Pressable
                            key={categoria.idCategoria}
                            onPress={() => handlePress(categoria.descCategoria, categoria.idCategoria)}
                            style={[styles.tag, { backgroundColor: activeTag === categoria.descCategoria ? activeColor : originalColor }]}
                        >
                            <Text style={{ fontSize: 12, fontWeight: '600' }}>{categoria.descCategoria}</Text>
                        </Pressable>
                    ))}
                </View>
                {activeTag && (
                    <View style={styles.pickerContainer}>
                        <RNPickerSelect
                            onValueChange={(value) => {
                                setSelectedItem(value);
                                const selectedSubcat = subCategorias.find(sub => sub.idSubCategoria === value);
                                if (selectedSubcat) setSelectedItemNome(selectedSubcat.descSubCategoria);
                            }}
                            items={getPickerItems()}
                            placeholder={{ label: 'Selecione...', value: null }}
                            style={pickerSelectStyles}
                        />
                    </View>
                )}
                {loading ? (
                    <ActivityIndicator size="small" color="#0000ff" style={styles.loadingIndicator} />
                ) : (
            
                    (selectedItem && image && image2 && image3) && (
                        <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                            <Pressable
                                onPress={handleUpload}
                                style={styles.btnAdvance}
                            >
                                <Text style={{ fontSize: 20, fontWeight: '600', color: "#fff" }}>Próximo</Text>
                            </Pressable>
                        </View>
                    )
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
        paddingHorizontal: 20
    },
    tag: {
        width: 100,
        height: 38,
        borderRadius: 10,
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
        marginTop: 30,
        marginBottom:20
    },
    pickerContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    loadingIndicator: {
        marginTop: 30,
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