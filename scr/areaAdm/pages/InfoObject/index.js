import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

const InfoObject = ({ route }) => {
    const navigation = useNavigation();
    const { selectedItem } = route.params;

    // Tratamento de imagens
    let images = [];
    try {
        images = JSON.parse(selectedItem.images) || [];
    } catch (error) {
        console.error('Erro ao converter images:', error);
        Alert.alert('Erro', 'As imagens não puderam ser carregadas.');
    }

    const renderImage = ({ item }) => (
        <Image
            source={{ uri: item }}
            style={styles.image}
        />
    );

  



    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Pressable style={styles.btn} onPress={() => navigation.navigate('HomeAdm')}>
                    <Icon name='arrow-left-circle' size={40} color='white' />
                </Pressable>

                <View style={styles.imageContainer}>
                    <FlatList
                        data={images}
                        renderItem={renderImage}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <Pressable style={styles.btnAdvance}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600',
                        color: selectedItem.nomeStatus === 'ativado' ? "green" : "red"
                    }}>
                        {selectedItem.nomeStatus}
                    </Text>
                </Pressable>

                <View style={styles.containerDesc}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.objeto}>Nome: {selectedItem.descSubCategoria}</Text>
                        <Text style={styles.subTitle}>{selectedItem.descCategoria}</Text>
                    </View>

                 
                    <Text style={styles.objeto}>Cor: {selectedItem.descCor}</Text>
                    <Text style={styles.objeto}>Andar Encontrado: {selectedItem.descLocal}</Text>
                    <Text style={styles.objeto}>Local Encontrado: {selectedItem.descAndar}</Text>
                    <Text style={styles.objeto}>Data de Registro: {selectedItem.dataRegistro}</Text>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionHeader}>Descrição do Objeto</Text>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.descriptionText}>{selectedItem.descObjeto}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        padding: 5,
        alignItems: 'center',
    },
    image: {
        width: 400,
        height: 500,
        marginHorizontal: 8,
        borderRadius: 10,
    },
    imageContainer: {
        width: '100%',
    },
    btn: {
        position: 'absolute',
        zIndex: 1,
        width: '90%',
        marginTop: 20,
    },
    objeto: {
        color: "#000",
        fontWeight: 'bold',
        margin: 2,
        fontSize: 20,
    },
    containerDesc: {
        width: "90%",
        marginTop: 20,
    },
    btnAdvance: {
        width: '60%',
        backgroundColor: "#fff",
        alignItems: "center",
        height: 50,
        justifyContent: "center",
        borderRadius: 30,
        marginTop: 30,
        alignSelf: 'center',
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
    },
    descriptionContainer: {
        marginTop: 20,
    },
    descriptionHeader: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    descriptionText: {
        fontSize: 16,
    },
    subTitle: {
        color: '#787878',
        fontSize: 16,
    },
});

export default InfoObject;