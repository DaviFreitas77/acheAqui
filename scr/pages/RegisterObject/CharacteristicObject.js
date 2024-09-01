import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../context/provider';

const RegisterObject = () => {
    const { formData } = useContext(Context);
    const navigation = useNavigation();
    const [activeColor, setActiveColor] = useState(null);
    const [activeTam, setActiveTam] = useState(null);
    const [activeCaracteristica, setActiveCaracteristica] = useState([]);
    const originalColor = '#ffffff';
    const activeTagColor = '#b1b1b1';
    const { setFormData } = useContext(Context);

    const handleColorPress = (item) => {
        setActiveColor(item);
    };

    const handleLocationPress = (item) => {
        setActiveTam(item);
    };

    const handleCaracteristica = (item) => {
        if (activeCaracteristica.includes(item)) {
            setActiveCaracteristica(activeCaracteristica.filter(car => car !== item));

        } else {
            setActiveCaracteristica([...activeCaracteristica, item])
        }
    };

    async function handleUpload() {
        setFormData(prevData => ({
            ...prevData,
            cor: activeColor,
            tamanho: activeTam,
            caracteristica: activeCaracteristica
        }));
    }

    let addCaracteristica = [];
    switch (formData.item) {
        case 'moletom':
            addCaracteristica = [
                { label: 'Com Capuz', value: 'com capuz' },
                { label: 'Sem Capuz', value: 'sem capuz' },
                { label: 'Malha Fina', value: 'malha fina' },
                { label: 'Malha Grossa', value: 'malha grossa' },
                { label: 'Com Estampa', value: 'com estampa' },
                { label: 'Sem Estampa', value: 'sem estampa' },
            ];
            break;
        case 'oculos':
            addCaracteristica = [
                { label: 'Lente Escura', value: 'lente escura' },
                { label: 'Armação Grossa', value: 'armação grossa' },
                { label: 'Armação Fina', value: 'armação fina' },
                { label: 'Com Grau', value: 'com grau' },
                { label: 'Sem Grau', value: 'sem grau' },
            ];
            break;
        case 'camiseta':
            addCaracteristica = [
                { label: 'Manga Curta', value: 'manga curta' },
                { label: 'Manga Longa', value: 'manga longa' },
                { label: 'Gola Alta', value: 'gola alta' },
                { label: 'Gola V', value: 'gola v' },
                { label: 'Com Estampa', value: 'com estampa' },
                { label: 'Sem Estampa', value: 'sem estampa' },
            ];
            break;
        case 'calca':
            addCaracteristica = [
                { label: 'Jeans', value: 'jeans' },
                { label: 'Sarja', value: 'sarja' },
                { label: 'Com Cinto', value: 'com cinto' },
                { label: 'Sem Cinto', value: 'sem cinto' },
                { label: 'Moletom', value: 'moletom' },
            ];
            break;
        case 'caderno':
            addCaracteristica = [
                { label: 'Capa Dura', value: 'capa dura' },
                { label: 'Capa Mole', value: 'capa mole' },
                { label: 'Com Mola', value: 'com mola' },
                { label: 'Sem Mola', value: 'sem mola' },
            ];
            break;
        default:
            addCaracteristica = [];
            break;
    }


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
                        <View style={[styles.tag, { backgroundColor: '#b1b1b1' }]}><Text>{formData.item}</Text></View>
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
                    {['Pequeno', 'Médio', 'Grande'].map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleLocationPress(item)}
                            style={[styles.tag, { backgroundColor: activeTam === item ? activeTagColor : originalColor }]}
                        >
                            <Text style={{ fontSize: 12, fontWeight: '600' }}>{item}</Text>
                        </Pressable>
                    ))}
                </View>
                {(formData.item === 'moletom' || formData.item === 'caderno' || formData.item === 'camiseta' || formData.item === 'calca' || formData.item === 'oculos') && (
                    <View style={[styles.objectCategory]}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Características adicionais</Text>
                        <Text style={{ fontSize: 16, color: "gray" }}>Escolha 1 ou mais tags</Text>
                    </View>
                )}
                <View style={styles.containerTags}>
                    {addCaracteristica.map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleCaracteristica(item.value)}
                            style={[styles.tag, { backgroundColor: activeCaracteristica.includes(item.value) ? activeTagColor : originalColor }]}
                        >
                            <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.label}</Text>
                        </Pressable>
                    ))}
                </View>
                {activeColor && activeTam && (
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
        paddingHorizontal: 40,
        marginBottom: 40,
    },
    tag: {
        width: 100,
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
        marginTop: 30,
    },
});

export default RegisterObject;