import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Pressable,ScrollView} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import { Header } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { Context } from '../../context/provider';
useNavigation
const EletronicScreen = () => {
  const [activeColor, setActiveColor] = useState(null);
  const [activeTam, setActiveTam] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCaracteristica, setActiveCaracteristica] = useState([]);
  const [results, setResults] = useState([]);
  const navigation = useNavigation()
  const {setData} = useContext(Context)
  const handleColorPress = (item) => {
    setActiveColor(item);
  };

  const handleTamPress = (item) => {
    setActiveTam(item);
  };
  
  const handleCaracteristica = (item) => {
    if (activeCaracteristica.includes(item)) {
        setActiveCaracteristica(activeCaracteristica.filter(car => car !== item));

    } else {
        setActiveCaracteristica([...activeCaracteristica, item])
    }
};
console.log(activeCaracteristica)
  let addCaracteristica = [];
  switch (selectedItem) {
     
      
      case 'pendrive':
          addCaracteristica = [
              { label: 'SanDisk', value: 'sandisk' },
              { label: 'Kingston', value: 'kingston' },
              { label: 'Samsung', value: 'samsung' },
              { label: 'Corsair', value: 'corsair' },
          ];
          break;
      case 'celular':
          addCaracteristica = [
              { label: 'Motorola', value: 'motorola' },
              { label: 'Xiaomi', value: 'xiaomi' },
              { label: 'Samsung', value: 'samsung' },
              { label: 'Iphone', value: 'Iphone' },
              { label: 'Outro', value: 'Outro' },
          ];
          break; 
      default:
          addCaracteristica = [];
          break;
  }
  async function getObjeto() {
    try {
        const response = await axios.post('http://192.168.1.71/services/searchObjeto.php', {
            item: selectedItem,
            tamanho: activeTam,
            cor: activeColor,
            adicional:activeCaracteristica,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.data;
   


     
        setData(data);
        navigation.navigate('LostObject')

    } catch (error) {
        console.log("Erro ao buscar os dados", error.response ? error.response.data : error.message);
    }
}


  const originalColor = '#ffffff';
  const activeTagColor = '#b1b1b1';

  const getPickerItems = () => {
    return [
      { label: 'Celular', value: 'celular' },
      { label: 'Notebook', value: 'notebook' },
      { label: 'Tablet', value: 'tablet' },
      { label: 'Fone de Ouvido', value: 'fone_de_ouvido' },
      { label: 'Carregador', value: 'carregador' },
      { label: 'Câmera', value: 'camera' },
      { label: 'Smartwatch', value: 'smartwatch' },
      { label: 'Caixa de Som', value: 'caixa_de_som' },
      { label: 'Pen Drive', value: 'pendrive' },
      { label: 'Teclado', value: 'teclado' },
      { label: 'Mouse', value: 'mouse' },
    ]
  }



  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.inner}>
          <View style={{ gap: 10 }}>
            <Text style={styles.title}>O que é seu Eletronico?</Text>
            <RNPickerSelect
              onValueChange={(value) => setSelectedItem(value)}
              items={getPickerItems()}
              placeholder={{ label: 'Selecione...', value: null }}
              style={pickerSelectStyles}
            />
          </View>
          <View style={{ gap: 10, alignItems: 'center' }}>
            <Text style={styles.title}>Qual a cor do seu Eletronico?</Text>
            <View style={styles.containerTags}>
              {['Preto', 'Branco', 'Cinza', 'Azul', 'Amarelo', 'Vermelho', 'Roxo', 'Verde', 'Rosa', 'Colorido', 'Brilhante'].map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleColorPress(item)}
                  style={[styles.tag, { backgroundColor: activeColor === item ? activeTagColor : originalColor }]}
                >
                  <Text style={{ fontSize: 12, fontWeight: '600' }}>{item}</Text>
                </Pressable>
              ))}
            </View>
          </View>
      
          {(selectedItem === 'pendrive' || selectedItem === 'celular') &&  (
        <View style={{ alignItems: "center", gap: 10 }}>
        <Text style={styles.title}>Marca:</Text>
          <View style={styles.containerTags}>
              {addCaracteristica.map((item, index) => (
                  <Pressable
                      key={index}
                      onPress={() => handleCaracteristica(item.value)}
                      style={[styles.tag, { backgroundColor: activeCaracteristica.includes(item.value) ? activeTagColor : originalColor }]}
                  >
                      <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.label}</Text>
                  </Pressable>
              ))}
          </View>
      </View>
      )}
          <View style={{ alignItems: "center", gap: 10 }}>
            <Text style={styles.title}>Qual o tamanho do seu Eletronico?</Text>
            <View style={styles.containerTags}>
              {['Pequeno', 'Médio', 'Grande'].map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleTamPress(item)}
                  style={[styles.tag, { backgroundColor: activeTam === item ? activeTagColor : originalColor }]}
                >
                  <Text style={{ fontSize: 12, fontWeight: '600' }}>{item}</Text>
                </Pressable>
              ))}
            </View>
          </View>
          {(selectedItem && activeCaracteristica.length > 0 && activeTam && activeColor) && (
          <Pressable
            onPress={async () => {
              await getObjeto();
            }}
            style={styles.btnAdvance}
          >
            <Text style={{ fontSize: 20, fontWeight: '600', color: "#fff" }}>Próximo</Text>
          </Pressable>

          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:10
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
    paddingTop: 20


  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
  },
  containerTags: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 40,
    marginBottom: 40,
  },
  tag: {
    width: 100,
    height: 38,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#b1b1b1",
  },
  btnAdvance: {
    width: '80%',
    backgroundColor: "#4786d3",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 30, 
    marginBottom:60
},
});
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    width: '100%',
    height: 40,

  },
});


export default EletronicScreen;
