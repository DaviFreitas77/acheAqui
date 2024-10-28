import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, FlatList, Image, Pressable, Modal } from 'react-native';
import { Context } from '../../context/provider';
import { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Denuncia from '../../modalDenuncia';
const LostObject = () => {
    const navigation = useNavigation()
    const { data } = useContext(Context)
    const [modalVisible, setModalVisible] = useState(false)


    const parseImages = (imagesString) => {
        let images = [];
        try {
            images = JSON.parse(imagesString);
        } catch (error) {
            console.error('Erro ao converter images:', error);
        }
        return images;
    };

    const renderImage = ({ item }) => (
        <Image
            source={{ uri: item }}
            style={styles.image}
            resizeMode="cover"
        />
    );


    const chat = (userId, itemId, itemNome, imagemUser, imagemItem, descSubCategoria) => {
        navigation.navigate('Chat', {
            recipientId: userId,
            itemId: itemId,
            userNome: itemNome,
            userImagem: imagemUser,
            itemImagem: imagemItem,
            itemSubCateogiria: descSubCategoria

        });
    };

    const renderItem = ({ item }) => {

        const images = parseImages(item.images);
        return (
            <View style={styles.itemContainer}>
                <FlatList
                    data={images}
                    renderItem={renderImage}
                    keyExtractor={(imgItem, index) => index.toString()}
                    horizontal
                />
                <View style={{ width: "100%" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row', alignItems: "center", gap: 10, marginTop: 10 }}>
                            <Image
                                source={{ uri: item.imagem }}
                                style={{ width: 50, height: 50, borderRadius: 50 }}
                            />
                            <Text style={styles.title}>{item.nome}</Text>
                        </View>


                        <View style={{ flexDirection: "row", gap: 30, justifyContent: "center", alignItems: 'center' }}>
                            <Pressable style={{ marginTop: 10 }} onPress={() => setModalVisible(true)}>
                                <Icon name="alert-circle-sharp" size={32} color="red" />
                            </Pressable>

                            <Pressable style={{ marginTop: 10 }} onPress={() => chat(item.id, item.idObjeto, item.nome, item.imagem, item.images, item.descSubCategoria)}>
                                <Icon name='chatbubble-ellipses' size={30} color='#4786d3' />
                            </Pressable>
                        </View>
                    </View>

                    <View style={{ paddingTop: 10, width: '100%', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={[styles.title, { color: '#4786d3' }]}>{item.descSubCategoria}</Text>
                        <Text style={{ color: '#787878', fontSize: 16 }}>{item.descCategoria}</Text>
                    </View>
                    <Text style={styles.subtitle}>Cor: {item.descCor}</Text>

                    <Text style={styles.subtitle}>Marca: {item.descMarca}</Text>

                    <Text style={styles.subtitle}>caracteristica Adicional: {item.descCapacidade}</Text>


                    <Text style={styles.subtitle}>Tamanho: {item.descTamanho}</Text>
                    <Text style={styles.subtitle}>andar Encontrado: {item.descAndar}</Text>
                    <Text style={styles.subtitle}>local Encontrado: {item.descLocal}</Text>
                    <Text style={styles.subtitle}>Descrição:{item.descObjeto}</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.inner}>
                {data && data.length > 0 ? (
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.idObjeto.toString()}

                    />
                ) : (
                    <Text>Nenhum dado encontrado</Text>
                )}
            </View>
            <Denuncia
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        padding: 10
    },
    inner: {
        width: '100%',
    },
    itemContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
    },
    subtitle: {

        color: "#000",
        fontWeight: 'bold',
        margin: 2,
        fontSize: 20,
    },
    image: {
        width: 400,
        height: 500,
        marginHorizontal: 8,
        borderRadius: 10,
    },
});

export default LostObject;