import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
const InfoObject = ({ route }) => {
    const navigation = useNavigation()
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
    
    return (
        <View style={styles.container}>

          
            <Pressable style={styles.btn} onPress={() => navigation.navigate('HomeAdm')}  >
                <Icon name='arrow-left-circle' size={40} color='white' />
            </Pressable>
            <View>
                <FlatList
                    data={images}
                    renderItem={renderImage}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal

                />
            </View>
            <View style={styles.caracteristicaObj}>
                <Text style={styles.objeto}>{selectedItem.nomeObjeto}</Text>
                <Text style={[styles.objeto, { color: '#BCBCBC' }]}>{selectedItem.dataRegistro}</Text>
                <Text style={styles.objeto}>
                    <Icon name='map-pin' size={14} />
                    {selectedItem.localidadeObjeto}
                </Text>

            </View>
            <Pressable
                style={styles.btnAdvance}
            >
                <Text style={{ fontSize: 20, fontWeight: '600', color: "#fff" }}>Esse objeto é meu!!</Text>
            </Pressable>
            <View style={styles.containerDesc}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Descrição do objeto</Text>
                    <Text style={{ color: '#787878', fontSize: 16 }}>
                        {selectedItem.categoriaObjeto}</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 16 }}>{selectedItem.descObjeto}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#fff',
    },
    image: {
        width: 400,
        height: 500,
        marginHorizontal: 8,
        borderRadius: 10,
    },

    btn: {
        position: 'absolute',
        zIndex: 1,
        width: '90%',
        marginTop: 20
    },
    caracteristicaObj: {
        backgroundColor: "#4b7099",
        position: "absolute",
        zIndex: 1,
        marginTop: 400,
        width: '70%',
        height: 90,
        borderRadius: 20,
        alignItems: 'center',
        opacity: .8

    },
    objeto: {
        color: "#fff",
        fontWeight: 'bold',
        margin: 2
    },
    containerDesc: {
        position: 'absolute',
        marginTop: 600,
        width: "90%",

    },
    btnAdvance: {
        width: '60%',
        backgroundColor: "#4786d3",
        alignItems: "center",
        height: 50,
        justifyContent: "center",
        borderRadius: 30,
        marginTop: 30,
        position:'absolute',
        marginTop:520
    },
});

export default InfoObject;