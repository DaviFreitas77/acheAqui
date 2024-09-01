import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Context } from '../../context/provider';
import { useContext } from 'react';

const LostObject = () => {
    const {data} = useContext(Context)
    

   
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
                <View style={{width:"100%"}}>
                    <View style={{paddingTop:10,width:'100%',flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={styles.title}>{item.nomeObjeto}</Text>
                        <Text style={[styles.subtitle,{color:'gray'}]}>{item.categoriaObjeto}</Text>
                    </View>
                    <Text style={styles.subtitle}>Cor: {item.corObjeto}</Text>
                    <Text style={styles.subtitle}>Tamanho: {item.tamanhoObjeto}</Text>
                    <Text style={styles.subtitle}>andar Encontrado: {item.andar}</Text>
                    <Text style={styles.subtitle}>local Encontrado: {item.localidadeObjeto}</Text>
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        padding:10
    },
    inner: {
        flex: 1,
        alignItems: 'center',
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
        fontSize: 16,
        color: '#333',
    },
    image: {
        width: 300,
        height: 300,
        marginHorizontal: 8,
        borderRadius: 10,
    },
});

export default LostObject;