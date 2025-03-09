import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Pressable,ScrollView,Alert} from 'react-native';
import { useRoute } from '@react-navigation/native';

const PostDenunciado = () => {
    const route = useRoute(); 
    const { postDetails } = route.params;
    
    const postDetail = postDetails[0];
    console.log(postDetail)
    let images = [];
    try {
        images = JSON.parse(postDetail.images) || [];
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
               

                <View style={styles.imageContainer}>
                    <FlatList
                        data={images}
                        renderItem={renderImage}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

             

                <View style={styles.containerDesc}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.objeto}>Nome: {postDetail.descSubCategoria}</Text>
                        <Text style={styles.subTitle}>{postDetail.descCategoria}</Text>
                    </View>

                    <Text style={styles.objeto}>Marca: {postDetail.descMarca}</Text>
                    <Text style={styles.objeto}>Cor: {postDetail.descCor}</Text>
                    <Text style={styles.objeto}>Andar Encontrado: {postDetail.descAndar}</Text>
                    <Text style={styles.objeto}>Local Encontrado: {postDetail.descLocal}</Text>
                    <Text style={styles.objeto}>Data de Registro: {postDetail.dataRegistro}</Text>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionHeader}>Descrição do Objeto</Text>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.descriptionText}>{postDetail.descObjeto}</Text>
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
export default PostDenunciado;