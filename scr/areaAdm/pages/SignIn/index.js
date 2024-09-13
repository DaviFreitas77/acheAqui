import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    ActivityIndicator,
    FlatList,
    Pressable,
    
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Context } from "../../../context/provider";
import { useNavigation } from "@react-navigation/native";


const HomeAdm = () => {
    const {urlApi} = useContext(Context)
    const navigation = useNavigation()
    const { nomeAdm } = useContext(Context);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://${urlApi}/services/getPost.php`);
 
                setPosts(response.data);

            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [posts]);

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
                    <Pressable onPress={()=> navigation.navigate('InfoObject',{selectedItem:item})}>
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
                <Text>{item.descCategoria}</Text>
            </View>
        );
    };

    const bnt = () => {
        alert('não pronto ;)')
    }
    return (
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

            {/* <View style={styles.inputView}>
                <TextInput
                    placeholder="Pesquise pelo seu objeto"
                    style={styles.input}
                    placeholderTextColor="#fff"
                />
            </View> */}
            <View style={{ flexDirection: "row", gap: 10, margin: 10 }}>
                <Pressable onPress={bnt} style={styles.tag}>
                    <Text style={{ color: 'white', fontSize: 17 }}>Tudo</Text>
                </Pressable>
                <Pressable onPress={bnt} style={[styles.tag, { backgroundColor: '#4786d3' }]}>
                    <Text style={{ color: 'white', fontSize: 17 }}>Eletronico</Text>
                </Pressable>
                <Pressable onPress={bnt} style={[styles.tag, { backgroundColor: '#4786d3' }]}>
                    <Text style={{ color: 'white', fontSize: 17 }}>Documentos</Text>
                </Pressable>
            </View>

            <View style={{ width: "90%" }}>
                <Text style={{ fontWeight: 'bold', fontSize: 19 }}>Objetos perdidos recentemente</Text>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#4786d3" />
            ) : (
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.idPost.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.flatListContent}
                    horizontal={true}
                />
            )}

            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
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
    inputView: {
        backgroundColor: "#4786d3",
        width: "90%",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "gray",
        alignItems: "center",
        flexDirection: "row-reverse",
        justifyContent: "space-evenly",
        height: 45,
        paddingRight: 8
    },
    input: {
        backgroundColor: "#4786d3",
        width: "100%",
        borderRadius: 15,
        borderColor: "gray",
        height: 45,
        paddingLeft: 15,
    },
    flatListContent: {
        paddingBottom: '38%',
        flexDirection:'row-reverse'
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
});

export default HomeAdm;