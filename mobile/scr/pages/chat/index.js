import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Context } from '../../context/provider';
import axios from 'axios';

const Chat = () => {
    const { nomeUser, idUser, urlApi } = useContext(Context);
    const route = useRoute();
    const { userNome, userImagem, recipientId } = route.params;

    const [mensagens, setMensagens] = useState([]);

    
    const fetchMensagens = async () => {
        try {
            const response = await axios.get(`${urlApi}/services/getMensagens.php`, {
                params: { remetente: idUser, destinatario: recipientId }
            });


            if (response.data && Array.isArray(response.data)) {
                const mensagens = response.data.map(msg => ({
                    _id: msg._id,
                    text: msg.text,
                    createdAt: new Date(msg.createdAt),
                    user: {
                        _id: msg.user._id,
                        name: msg.user.name,
                        avatar: userImagem
                    }
                }));
                setMensagens(mensagens);
            } else {
                console.warn('Nenhuma mensagem encontrada ou formato de dados inválido');
            }
        } catch (error) {
            console.error("Erro ao buscar mensagens: ", error);
        }
    };

    useEffect(() => {
        fetchMensagens();
    }, [idUser, recipientId, urlApi]);

   
    const sendMensagem = async (novaMensagem = []) => {
     
        setMensagens(previousMensagens => GiftedChat.append(previousMensagens, novaMensagem));

        const mensagem = novaMensagem[0];
        try {
            await axios.post(`${urlApi}/services/postMensagem.php`, {
                texto: mensagem.text,
                remetente: idUser,
                destinatario: recipientId
            });
        } catch (error) {
            console.error("Erro ao enviar mensagem: ", error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <GiftedChat
                messages={mensagens}
                onSend={(messages) => sendMensagem(messages)}
                user={{
                    _id: idUser,
                    name: userNome,
                    avatar: userImagem
                }}
            /> 
            <StatusBar 
                barStyle="dark-content"
                backgroundColor="#4786d3" 
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Chat;