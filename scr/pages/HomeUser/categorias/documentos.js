import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../../../context/provider';

const Documento = () => {

  const{urlApi} = useContext(Context)
  
  const [activeColor, setActiveColor] = useState(null);
  const [cores, setCores] = useState([])
  const [corId, setCorId] = useState(null)

  const [activeTam, setActiveTam] = useState(null);
  const [tamNome,setTamNome] = useState(null)
  const [tamanho, setTamanho] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [nomeItem, setNomeItem] = useState(null);

  const [marcas, setMarcas] = useState([]);
  const [activeMarca,setActiveMarca] = useState(null)
  const [subCategorias, setSubCategorias] = useState([]);
  const [results, setResults] = useState([]);
  const navigation = useNavigation();
  const { setData } = useContext(Context);

  

  useEffect(() => {
    const fetchData = async () => {

      try {
        const corResponse = await axios.get(`${urlApi}/services/getcor.php`)
        setCores(corResponse.data)
      } catch (error) {
        console.log(error)
      }

      try {
        const tamanhoResponse = await axios.get(`${urlApi}/services/getTamanho.php`)
        setTamanho(tamanhoResponse.data)
      } catch (error) {
        console.log('tamanho', error)
      }

      try {
        const response = await axios.get(`${urlApi}/services/getSubCategoria.php`);

        const subCategoriasFiltered = response.data
          .filter(sub => sub.idCategoria === 11)
          .map(sub => ({
            label: sub.descSubCategoria,
            value: sub.idSubCategoria
          }));
        setSubCategorias(subCategoriasFiltered);
      } catch (error) {
        console.error('Erro ao buscar subcategorias:', error);
      }

    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchMarcas = async () => {
      const objetoId = selectedItem; 
      if (objetoId) {
        try {
          const marcaResponse = await axios.get(`${urlApi}/services/getMarca.php?id=${objetoId}`);
          setMarcas(marcaResponse.data);
        } catch (error) {
          console.log('marca', error);
        }
      }
    };

    fetchMarcas();
  }, [selectedItem]); 


  const handleItemPress = (value) => {
    const selectedSubcategoria = subCategorias.find(sub => sub.value === value);
    if (selectedSubcategoria) {
      setNomeItem(selectedSubcategoria.label);  
        setSelectedItem(selectedSubcategoria.value);      
      
    }
};
  const handleColorPress = (item) => {
    setActiveColor(item.descCor);
    setCorId(item.idCor)
  };

  const handleTamPress = (item) => {
    setActiveTam(item.idTamanho);
    setTamNome(item.descTamanho)
  };

  const handleMarcaPress = (item) => {
    setActiveMarca(item)
  };
  async function getObjeto() {
    console.log(selectedItem, activeTam, corId, activeMarca); 
    try {
      const response = await axios.post(`${urlApi}/services/searchObjeto.php`, {
        item: selectedItem, 
        tamanho: activeTam,
        cor: corId,
        marca: activeMarca,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const data = response.data
      const itensNome = {
        nomeTamanho:tamNome,
        nomeCor:activeColor,
        nomeitem:nomeItem,
      }
  
      setData(data)
      
      navigation.navigate('LostObject');
    } catch (error) {
      console.log("Erro ao buscar os dados", error.response ? error.response.data : error.message);
    }
  }



  


  
  const originalColor = '#ffffff';
  const activeTagColor = '#b1b1b1';
  

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.inner}>
          <View style={{ gap: 10 }}>
            <Text style={styles.title}>Qual seu Documento??</Text>
            <RNPickerSelect
             onValueChange={(value) => handleItemPress(value)}
              items={subCategorias}
              placeholder={{ label: 'Selecione...', value: null }}
              style={pickerSelectStyles}
            />
          </View>
          <View style={{ gap: 10, alignItems: 'center' }}>
            <Text style={styles.title}>Qual a cor do seu Documento?</Text>
            <View style={styles.containerTags}>
              {cores.map((item, index) => (

                <Pressable
                  key={index}
                  onPress={() => handleColorPress(item)}
                  style={[styles.tag, { backgroundColor: activeColor === item.descCor ? activeTagColor : originalColor }]}
                >
                  <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.descCor}</Text>
                </Pressable>
              ))}
            </View>
          </View>

    

          <View style={{ alignItems: "center", gap: 10 }}>
            <Text style={styles.title}>Qual o tamanho do seu Documento?</Text>
            <View style={styles.containerTags}>
              {tamanho.map((item, index) => (

                <Pressable
                  key={index}
                  onPress={() => handleTamPress(item)}
                  style={[styles.tag, { backgroundColor: activeTam === item.idTamanho ? activeTagColor : originalColor }]}
                >
                  <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.descTamanho}</Text>
                </Pressable>
              ))}
            </View>
          </View>
          
          {selectedItem &&(
                <View style={{ alignItems: "center", gap: 10 }}>
                <Text style={styles.title}>Qual a marca do seu Documento?</Text>
                <View style={styles.containerTags}>
                  {marcas.map((item, index) => (
    
                    <Pressable
                      key={index}
                      onPress={() => handleMarcaPress(item.idMarca)}
                      style={[styles.tag, { backgroundColor: activeMarca === item.idMarca ? activeTagColor : originalColor }]}
                    >
                      <Text style={{ fontSize: 12, fontWeight: '600' }}>{item.descMarca}</Text>
                    </Pressable>
                  ))}
                </View>
              </View>
          )}
      

          {(selectedItem  && activeTam && activeColor) && (
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
    paddingTop: 10
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
    borderRadius: 10,
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
    marginBottom: 60
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

export default Documento;
