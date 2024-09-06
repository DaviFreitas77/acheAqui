import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

const InfoObject = ({ route }) => {
    const navigation = useNavigation();
    const { selectedItem } = route.params;
   
    let images = [];
    try {
        images = JSON.parse(selectedItem.images);
    } catch (error) {
        console.error('Erro ao converter images:', error);
    }

    const renderImage = ({ item }) => (
        <Image
            source={{ uri: item }}
            style={styles.image}
        />
    );

    let caracteristicas = [];
    caracteristicas = JSON.parse(selectedItem.caracteristicasAdicionais);
    const caracteristicasDisplay = Array.isArray(caracteristicas) ? caracteristicas.join(', ') : '';

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
                    {selectedItem.nomeStatus === 'ativado' ?(
                        <Text style={{ fontSize: 20, fontWeight: '600', color: "green" }}>{selectedItem.nomeStatus}</Text>
                        
                    ):(
                        <Text style={{ fontSize: 20, fontWeight: '600', color: "red" }}>{selectedItem.nomeStatus}</Text>
                    )}
                </Pressable>

                <View style={styles.containerDesc}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.objeto}>nome: {selectedItem.nomeObjeto}</Text>
                        <Text style={{ color: '#787878', fontSize: 16 }}>
                            {selectedItem.categoriaObjeto}
                        </Text>
                    </View>

                    {selectedItem.caracteristicasAdicionais.length > 2 && (
                        <Text style={styles.objeto}>
                            {selectedItem.nomeObjeto === 'pendrive' || selectedItem.nomeObjeto === 'celular' || selectedItem.nomeObjeto === 'bone' ? 'Marca' : 'Adicional'} {caracteristicasDisplay}
                        </Text>
                    )}

                    <Text style={styles.objeto}>Cor: {selectedItem.corObjeto}</Text>
                    <Text style={styles.objeto}>Andar Encontrado: {selectedItem.localidadeObjeto}</Text>
                    <Text style={styles.objeto}>Local Encontrado: {selectedItem.andar}</Text>
                    <Text style={styles.objeto}>Data de registro: {selectedItem.dataRegistro}</Text>

                    <View style={styles.descriptionContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Descrição do objeto</Text>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 16 }}>{selectedItem.descObjeto}</Text>
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
        width: '100%',  // Ajuste a largura conforme necessário
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
        alignSelf: 'center',  // Centraliza o botão
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
    },
    descriptionContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default InfoObject;
