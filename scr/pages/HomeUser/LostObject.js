import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import { Context } from '../../context/provider';
import { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const LostObject = () => {
    const {data} = useContext(Context)
    

    console.log(data)
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


    function chat () {
        alert('chat não pronto ;)')
    }
    const renderItem = ({ item }) => {
        let caracteristicas = [];
        caracteristicas = JSON.parse(item.caracteristicasAdicionais);
        const caracteristicasDisplay = Array.isArray(caracteristicas) ? caracteristicas.join(', ') : '';
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
                 <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                 <View style={{flexDirection:'row',alignItems:"center",gap:10,marginTop:10}}>
                     <Image
                                source={{ uri: item.imagem}}
                                style={{width:50,height:50,borderRadius:50}}
                            />
                         <Text style={styles.title}>{item.nome}</Text>
                 </View>
                 <Pressable style={{marginTop:10}} onPress={chat}>
                    <Icon  name='chatbubble-ellipses' size={30} color= '#4786d3'/>
                 </Pressable>
                 </View>

                    <View style={{paddingTop:10,width:'100%',flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <Text  style={[styles.title,{color:'#4786d3'}]}>{item.nomeObjeto}</Text> 
                        <Text  style={{ color: '#787878', fontSize: 16 }}>{item.categoriaObjeto}</Text>
                    </View>
                    <Text style={styles.subtitle}>Cor: {item.corObjeto}</Text>
                    {(item.nomeObjeto === 'pendrive' || item.nomeObjeto === 'celular' || item.nomeObjeto ==='bone')? (

                    <Text style={styles.subtitle}>Marca: {caracteristicasDisplay}</Text>
                    ):
                    
                    <Text style={styles.subtitle}>Adicional: {item.caracteristicasAdicionais}</Text>
                    }
                    <Text style={styles.subtitle}>Tamanho: {item.tamanhoObjeto}</Text>
                    <Text style={styles.subtitle}>andar Encontrado: {item.andar}</Text>
                    <Text style={styles.subtitle}>local Encontrado: {item.localidadeObjeto}</Text>
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