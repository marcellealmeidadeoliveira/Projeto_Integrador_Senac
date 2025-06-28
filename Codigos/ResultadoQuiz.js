import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, TouchableOpacity, Linking } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function ResultadoQuiz({route, navigation}) {

    const {final, finalDois}=route.params
  return (
    <View style={{ flex: 1, backgroundColor: '#EBF4FE' }}>
      <ScrollView>
        <View>
          <View style={estilo.Card4}>
            <Image style={estilo.ImagemEditada}
            
            source={require('../PastaFotos/LogoEditada.png')}
             />
          </View>
          <View>
            <Image style={estilo.ImagemEditada2} source={require('../PastaFotos/user.jpg')} />
            <View>
              <Text style={estilo.TextoEditado4}>
                Usuario</Text></View>
          </View>

          <View style={{ backgroundColor: '#83B0E1', width: '90%', height: 60, alignItems: 'center', marginTop: 15, borderRadius: 10, alignSelf: 'center' }}>

            <Text style={{ marginTop: 10, fontSize: 30, fontWeight: 'bold', color: 'white' }}>
              
              {String(final)}
              </Text>
          </View>

          <View style={{ backgroundColor: '#83B0E1', width: '80%', height: 300, alignItems: 'center', marginTop: 15, borderRadius: 10, alignSelf: 'center' }}>

           
            <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 19, fontWeight: 'bold', color: 'white', marginTop: 10 }}>
             {String(finalDois)}
            </Text>
          </View>
<TouchableOpacity
  style={estilo.botao}
  onPress={() => {
    if (final === 'Oleosa') {
      navigation.navigate('Tela');
    } else if (final === 'Seca') {
      navigation.navigate('Tela3');
    } else {
      navigation.navigate('Tela2');
    }
  }}
>
  <Text style={{ fontSize: 15, textAlign: 'center', marginTop: 9, fontWeight: 'bold', color: 'white' }}>
    Ver rotina para pele {final}
  </Text>
</TouchableOpacity>


        </View>
      </ScrollView>
    </View>

  );
}
const estilo = StyleSheet.create({
  container: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'

  },
  container2: {
    backgroundColor: "#83B0E1",
    height: 50,
    width: "90%",
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50
  },
  container4: {
    backgroundColor: "#83B0E1",
    height: 60,
    width: "95%",
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30
  },
  container5: {
    backgroundColor: "#83B0E1",
    height: 50,
    width: "40%",
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25
  },
  Card: {
    backgroundColor: '#AECBEB',
    height: 50,
    width: '95%',
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 3
  },
  Card2: {
    backgroundColor: 'rgb(131, 156, 189)',
    height: 100,
    width: '95%',
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 2,
  },
  Card3: {
    backgroundColor: 'white',
    height: 23,
    width: 270,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: -10,
    marginLeft: 50
  },
  Card4: {
    backgroundColor: '#AECBEB',
    width: '95%',
    height: 60,
    marginTop: 50,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  Card5: {
    backgroundColor: 'rgb(160, 188, 224)',
    height: 100,
    width: '95%',
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 2,
  },
  TextoEditado: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 14
  },
  TextoEditado2: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 14
  },
  TextoEditado3: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 3
  },
  TextoEditado4: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: -40,
    marginLeft: 170
  },
  ImagemEditada: {
    height: 50,
    width: 215,

  },
  ImagemEditada2: {
    alignSelf: 'center',
    marginTop: -53,
    borderRadius: 30,
    marginRight: -300
  },
  ImagemEditada3: {
    height: 70,
    width: 70,
    alignSelf: 'flex-start',
    marginTop: -60,
    marginLeft: 10
  },
  botao:{
    height:40,
    width:'70%',
    backgroundColor:'#83B0E1',
    marginTop:10,
    borderRadius:10,
    alignSelf:'center'
  }


});