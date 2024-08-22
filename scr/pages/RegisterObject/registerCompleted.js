import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Context } from '../../context/provider';
import { useNavigation } from '@react-navigation/native';
export default function RegisterComplempeted() {
    const { formData } = useContext(Context)
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Feito</Text>
            <Image
                source={require('../../imges/registerObject/feito.png')}
                style={{ width: 120, height: 120 }}
            />
            <Text style={{ color: '#5E5E5E' }}>O seu achado foi cadastrado com sucesso!</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                {formData.images.map((img, index) => (
                    <Image key={index} source={{ uri: img }} style={styles.imgSmall} />
                ))}
            </View>
            <View style={{ width: '80%' }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Item:</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 10, flexWrap: 'wrap', justifyContent: "center", marginTop: 10 }}>
                <View style={styles.tag}>
                    <Text>{formData.item}</Text>
                </View>
                <View style={styles.tag}>
                    <Text>{formData.category}</Text>
                </View>
                <View style={styles.tag}>
                    <Text>{formData.cor}</Text>
                </View>
                <View style={styles.tag}>
                    <Text>{formData.tamanho}</Text>
                </View>

            </View>

            <View style={{ width: '80%', marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Complementos:</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10, flexWrap: 'wrap', marginTop: 10, width: "80%" }}>
                <View style={styles.tag}>
                    <Text>{formData.local}</Text>
                </View>
                <View style={styles.tag}>
                    <Text>{formData.livingroom}</Text>
                </View>
            </View>
            <Pressable
                style={styles.btnAdvance}
                onPress={() => navigation.navigate('Drawer')}
            >
                <Icon name='arrow-left' color='white' size={30} />
                <Text style={{ fontSize: 20, fontWeight: '600', color: "#fff" }}>Voltar para o inicio</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: 10
    },
    tag: {
        width: 110,
        height: 38,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#b1b1b1",
        backgroundColor: '#b1b1b1',
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center"

    },
    imgSmall: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#f1f2f7',
        alignItems: "center",
        justifyContent: "center"
    },
    btnAdvance: {
        width: '80%',
        backgroundColor: "#4786d3",
        alignItems: "center",
        height: 50,
        justifyContent: "center",
        borderRadius: 30,
        marginTop: 30,
        flexDirection: "row"
    },


});