import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ActivityIndicator,
    FlatList,
    Pressable,
    ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Context } from "../../../context/provider";
import { useNavigation } from "@react-navigation/native";

const HomeAdm = () => {
    const { urlApi } = useContext(Context);
    const navigation = useNavigation();
    const { nomeAdm } = useContext(Context);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTag, setSelectedTag] = useState('Tudo');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${urlApi}/services/getPost.php`);
                setPosts(response.data);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [urlApi,posts]);

    const handleTagPress = (tag) => {
        setSelectedTag(tag);
    };

    const filteredPosts = posts.filter(post => 
        selectedTag === 'Tudo' || post.descCategoria === selectedTag
    );

    const renderItem = ({ item }) => {
        let images;
        try {
            images = JSON.parse(item.images);
        } catch (error) {
            console.error('Erro ao converter images:', error);
            images = [];
        }

        const imageUrl = images.length > 0 ? images[0] : null;
        const userImage = item.imagem ? item.imagem : null;
        
        return (
            <View style={styles.postItem}>
                {imageUrl ? (
                    <Pressable onPress={() => navigation.navigate('InfoObject', { selectedItem: item} )}>
                        
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.postImage}
                        />
                    </Pressable>
                ) : (
                    <Text style={styles.postTitle}>Sem imagem disponível</Text>
                )}

                <View style={{ flexDirection: "row", gap: 10 }}>
                    {userImage ? (
                        <Image
                            source={{ uri: userImage }}
                            style={{ width: 30, height: 30, borderRadius: 20 }}
                        />
                    ) : (
                        <Text style={styles.postTitle}>Sem imagem do usuário disponível</Text>
                    )}
                    <Text style={styles.postTitle}>{item.nome}</Text>
                </View>

                <Text style={styles.postTitle}>{item.descSubCategoria}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>{item.descCategoria}</Text>
                
                        
                <Text>ID: {item.idPost}</Text>
                    
                 
                   
                </View>
            </View>
        );
    };

    return (
        <ScrollView style={{backgroundColor:"white"}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={require('../../../imges/homeAdm/adm.jpeg')}
                        style={{ width: 80, height: 80, borderRadius: 100 }}
                    />
                    <View style={{ width: "55%" }}>
                        <Text style={styles.textHeaderTiltle}>Olá, {nomeAdm}</Text>
                        <Text style={styles.textHeader}>Perdeu algo? </Text>
                        <Text style={styles.textHeader}>
                            Faça uma breve busca para reencontrar!!
                        </Text>
                    </View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            
                    <View style={{ flexDirection: "row", gap: 10, margin: 10 }}>
                        <Pressable
                            onPress={() => handleTagPress('Tudo')}
                            style={[styles.tag, selectedTag === 'Tudo' && styles.tagActive]}
                        >
                            <Text style={{ color: 'white', fontSize: 17 }}>Tudo</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => handleTagPress('Eletronico')}
                            style={[styles.tag, selectedTag === 'Eletronico' && styles.tagActive]}
                        >
                            <Text style={{ color: 'white', fontSize: 17 }}>Eletrônico</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => handleTagPress('Documentos')}
                            style={[styles.tag, selectedTag === 'Documentos' && styles.tagActive]}
                        >
                            <Text style={{ color: 'white', fontSize: 17 }}>Documentos</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => handleTagPress('Roupas')}
                            style={[styles.tag, selectedTag === 'Roupas' && styles.tagActive]}
                        >
                            <Text style={{ color: 'white', fontSize: 17 }}>Roupas</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => handleTagPress('Acessorio Pessoal')}
                            style={[styles.tag, selectedTag === 'Acessorio Pessoal' && styles.tagActive]}
                        >
                            <Text style={{ color: 'white', fontSize: 17 }}>Acessorio Pessoal</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => handleTagPress('Material Escolar')}
                            style={[styles.tag, selectedTag === 'Material Escolar' && styles.tagActive]}
                        >
                            <Text style={{ color: 'white', fontSize: 17 }}>Material Escolar</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => handleTagPress('Outros')}
                            style={[styles.tag, selectedTag === 'Outros' && styles.tagActive]}
                        >
                            <Text style={{ color: 'white', fontSize: 17 }}>Outros</Text>
                        </Pressable>
                    </View>
                </ScrollView>
                {filteredPosts.length === 0 ? (
                    <View style={{ width: "90%",alignItems:'center'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 19 }}>Nenhum Objeto Perdido</Text>
                </View>
            
                ):
                <View style={{ width: "90%",alignItems:'center'}}>
                <Text style={{ fontWeight: 'bold', fontSize: 19 }}>Objetos perdidos recentemente</Text>
            </View>
                }
            
                {loading ? (
                    <ActivityIndicator size="large" color="#4786d3" />
                ) : (
            
                    <FlatList
                        data={filteredPosts}
                        keyExtractor={(item) => item.idPost.toString()}
                        renderItem={renderItem}
                        contentContainerStyle={styles.flatListContent}
                        horizontal={true}
                    />
                )}
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffff",
        gap: 30,
        paddingTop: 20
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 40,
    },
    textHeaderTiltle: {
        fontWeight: "bold",
        fontSize: 26,
    },
    textHeader: {
        color: "gray",
        fontSize: 20,
    },
    flatListContent: {
        paddingBottom: '38%',
        flexDirection: 'row-reverse'
    },
    postItem: {
        backgroundColor: "#f9f9f9",
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        elevation: 3,
    },
    postImage: {
        width: 250,
        height: 250,
        borderRadius: 10,
        marginBottom: 10,
    },
    postTitle: {
        fontWeight: "bold",
        fontSize: 18,
    },
    tag: {
        width: 130,
        height: 50,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#b1b1b1",
        backgroundColor: "#2f2f2f"
    },
    tagActive: {
        backgroundColor: '#4786d3', // Cor ativa do botão
        borderColor: '#4786d3', // Cor da borda ativa do botão
    },
});

export default HomeAdm;
