import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Context } from '../../context/provider';
import { useNavigation } from '@react-navigation/native';
export default function RegisterComplempeted() {
    const { formData } = useContext(Context)
    const navigation = useNavigation()
    console.log(formData)
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Feito</Text>
            <Image
                source={require('../../imges/registerObject/feito.jpeg')}
                style={{ width: 120, height: 120 }}
            />
            <Text style={{ color: '#5E5E5E' }}>O seu achado foi cadastrado com sucesso!</Text>
            <View style={{justifyContent:"center",alignItems:"center",gap:10}}>
                <View style={{ flexDirection: 'row', gap: 10,flexWrap:'wrap',justifyContent:"center"}}>
                    {formData.images.map((img, index) => (
                        <Image key={index} source={{ uri: img }} style={styles.imgSmall} />
                    ))}
            </View>
                 <View style={{ flexDirection: "row", gap: 10, flexWrap: 'wrap', marginTop: 10,justifyContent:"center"}}>
                <View style={styles.tag}>
                    <Text  style={styles.txtItem} >{formData.nomeItem}</Text>
                </View>
                <View style={styles.tag}>
                    <Text  style={styles.txtItem}>{formData.categoriaItem}</Text>
                </View>
                <View style={styles.tag}>
                    <Text style={styles.txtItem}>{formData.corItem}</Text>
                </View>
                <View style={styles.tag}>
                    <Text  style={styles.txtItem}>{formData.tamanhoItem}</Text>
                </View>
                <View style={styles.tag}>
                    <Text  style={styles.txtItem}>{formData.marcaItem}</Text>
                </View>

            </View>
            </View>
         
           
            {formData.caracteristica && formData.caracteristica.length > 0 && (

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 ,marginTop:30,paddingLeft:45,alignItems:"center"}}>
                    
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{formData.item === 'pendrive' || formData.item === "celular"|| formData.item === 'bone' ?'Marca': 'Adicionais'}</Text>
                    
                    {formData.caracteristica.map((caracteristica, index) => (
                        <View key={index} style={styles.tag}>
                            <Text>{caracteristica}</Text>
                        </View>
                    ))}
                </View>
            )}


            <View style={{ width: '80%', marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Complementos:</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 10, flexWrap: 'wrap', marginTop: 10, width: "80%" }}>
                <View style={styles.tag}>
                    <Text  style={styles.txtItem}>{formData.localItem}</Text>
                </View>
                <View style={styles.tag}>
                    <Text  style={styles.txtItem}>{formData.andarItem}</Text>
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
        backgroundColor: '#ffff',
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
        alignItems: "center",


    },
    imgSmall: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#f1f2f7',
        alignItems: "center",
        justifyContent: "center",
        
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
    txtItem:{
        fontWeight:'bold',
        textAlign:"center",
    }


});
