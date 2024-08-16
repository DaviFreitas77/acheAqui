import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { Context } from '../../context/provider';

const FinalRegister = () => {
    const navigation = useNavigation();
    const [localActive, setLocalActive] = useState(null);
    const [activeLivingroom, setLivingroom] = useState(null);
    const originalColor = '#ffffff';
    const activeTagColor = '#b1b1b1';
    const { formData } = useContext(Context);
    const handleColorPress = (item) => {
        setLocalActive(item);
    };

    const handleLocationPress = (item) => {
        setLivingroom(item);
    };


    useEffect(() => {
        console.log(localActive);
        console.log(activeLivingroom);
    }, [localActive, activeLivingroom]);

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
                    </View>
                </View>
                <View style={styles.objectCategory}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Em qual andar você o encontrou?</Text>
                    <Text style={{ fontSize: 16, color: "gray" }}>Escolha 1 tag</Text>
                </View>
                <View style={styles.containerTags}>
                    {['1 Andar', '2 Andar', 'Subsolo Refeitório'].map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleColorPress(item)}
                            style={[styles.tag, { backgroundColor: localActive === item ? activeTagColor : originalColor }]}
                        >
                            <Text style={{ fontSize: 12, fontWeight: '600' }}>{item}</Text>
                        </Pressable>
                    ))}
                </View>
                <View style={[styles.objectCategory]}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Em qual local você o encontrou?</Text>
                    <Text style={{ fontSize: 16, color: "gray" }}>Escolha 1 tag</Text>
                </View>
                <View style={styles.containerTags}>
                    {['Sala de aula adm', 'Sala de aula nutri', 'Sala de aula ds', 'Laboratório nutri', 'Laboratório ds', 'Auditório', 'Refeitório', 'Cantina', 'Outro'].map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleLocationPress(item)}
                            style={[styles.tag, { backgroundColor: activeLivingroom === item ? activeTagColor : originalColor }]}
                        >
                            <Text style={{ fontSize: 12, fontWeight: '600' }}>{item}</Text>
                        </Pressable>
                    ))}
                </View>

                {localActive && activeLivingroom && (
                    <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                        <Pressable
                            onPress={() => navigation.navigate('CharactObject')}
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
    pickerContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    }
});

export default FinalRegister;