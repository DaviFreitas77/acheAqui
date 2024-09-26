import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';
import { Context } from '../../context/provider';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Conversations = () => {
    const { idUser, urlApi } = useContext(Context);
    const [mensagens, setMensagens] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchMensagens = async () => {
            try {
                const response = await axios.get(`http://${urlApi}/services/getConversa.php`, {
                    params: { usuario: idUser }
                });
               
                setMensagens(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMensagens();
    }, [idUser, urlApi]);

    const renderItem = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('Chat', {
            userNome: item.sender_nome,
            recipientId: item.sender_id,
            userImagem: item.imagem
        })} style={styles.item}>
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                <Image
                    source={{ uri: item.imagem }}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                />
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: '100%' }}>
                        <Text style={styles.sender}>{item.sender_nome}</Text>
                    </View>
                    <Text style={styles.message}>{item.last_message || 'No messages'}</Text>
                </View>
            </View>
        </Pressable>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={mensagens}
                renderItem={renderItem}
                keyExtractor={item => item.sender_id.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    item: {
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#ffff',
        marginBottom: 10,
    },
    sender: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    message: {
        fontSize: 16,
        width: "100%",
        color:"gray"
    },
});

export default Conversations;