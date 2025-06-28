 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, TouchableOpacity, Linking } from 'react-native';

export default function Dicas() {
  return (
    <ScrollView>
      <View style={estilo.container}>
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
        <View style={estilo.Card}>
          <Text style={estilo.TextoEditado}>
            Entenda mais sobre sua pele Seca!
          </Text>
        </View>
        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5}>
            Banhos mornos e rápidos
          </Text>
          <Text style={estilo.TextoEditado6}>
            Evite água quente, pois remove a oleosidade
          </Text>
          <Text style={estilo.TextoEditado7}>
            natural da pele. Banhos curtos ajudam a
          </Text>
          <Text style={estilo.TextoEditado7}>
            preservar a hidratação.
          </Text>
          <View>
            <Image style={estilo.ImagemEditada3} source={require('../PastaFotos/icon1.png')} />
          </View>
        </View>
        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5e1}>
          Hidrate logo após o banho
          </Text>
          <Text style={estilo.TextoEditado6e1}>
          Aplicar hidratante com a pele
          </Text>
          <Text style={estilo.TextoEditado8}>
          ainda úmida melhora a absorçãoe
          </Text>
          <Text style={estilo.TextoEditado8}>
          mantém a umidade por mais tempo
          </Text>
          <View>
            <Image style={estilo.ImagemEditada5} source={require('../PastaFotos/icon3.png')} />
          </View>
        </View>
        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5}>
          Beba bastante água
          </Text>
          <Text style={estilo.TextoEditado6}>
          Beber pelo menos 2 litros de água
          </Text>
          <Text style={estilo.TextoEditado7}>
          por dia ajuda a evitar ressecamento
          </Text>
          <View>
            <Image style={estilo.ImagemEditada3e1} source={require('../PastaFotos/icon2.png')} />
          </View>
        </View>
        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5e1}>
          Use óleos naturais
          </Text>
          <Text style={estilo.TextoEditado6e1}>
          Óleos como coco, jojoba e amêndoas 
          </Text>
          <Text style={estilo.TextoEditado8}>
          formam uma barreira protetora,
          </Text>
          <Text style={estilo.TextoEditado8}>
          potencializando a hidratação
          </Text>
          <View>
            <Image style={estilo.ImagemEditada5} source={require('../PastaFotos/icon5.png')} />
          </View>
        </View>
        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5}>
          Esfolie com moderação
          </Text>
          <Text style={estilo.TextoEditado6}>
          Esfoliação é importante para remover
          </Text>
          <Text style={estilo.TextoEditado7}>
          células mortas mas faça no máximo
          </Text>
          <Text style={estilo.TextoEditado7}>
          1 vez por semana com produtos suaves
          </Text>
          <View>
            <Image style={estilo.ImagemEditada3} source={require('../PastaFotos/icon4.png')} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EBF4FE',
  },
  Card: {
    backgroundColor: '#AECBEB',
    height: 50,
    width: '75%',
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 3
  },
  Card2: {
    backgroundColor: '#AECBEB',
    borderRadius: 15,
    marginTop: 35,
    height: 110,
    width: '90%',
    marginLeft: -10
  },
  Card4: {
    backgroundColor: '#AECBEB',
    width: '95%',
    height: 60,
    marginTop: 50,
    borderRadius: 5,
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
    marginTop: 14,

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
  TextoEditado5: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  TextoEditado5e1: {
    fontSize: 13,
    textAlign: 'right',
    fontWeight: 'bold',
    marginRight:60
  },
  TextoEditado6: {
    fontSize: 13,
    marginTop: 7,
    padding: 5,
  },
  TextoEditado6e1: {
    fontSize: 13,
    marginTop: 7,
    padding: 5,
   textAlign:'right',
       marginRight:'5'
  },
  TextoEditado7: {
    fontSize: 13,
    padding: 5,
    marginTop: -10
  },
  TextoEditado8: {
    fontSize: 13,
    padding: 5,
    marginTop: -10,
    textAlign: 'right',
    marginRight:'15'
  },
  ImagemEditada: {
    height: 50,
    width: 215,
  },
  ImagemEditada2: {
    alignSelf: 'flex-end',
    marginTop: -53,
    marginRight: -55,
    borderRadius: 30
  },
  ImagemEditada3: {
    alignSelf: 'flex-end',
    marginTop: -85,
    marginRight: -2,
    height: 90,
    width: 100,
    borderRadius:30
  },
  ImagemEditada3e1: {
    alignSelf: 'flex-end',
    marginTop: -60,
    height: 90,
    width: 110,
borderRadius:30
  },
  ImagemEditada4: {
    alignSelf: 'flex-start',
    marginTop: -89,
    marginRight: -15,
    height: 90,
    width: 110,

  },
  ImagemEditada5: {
    alignSelf: 'flex-start',
    marginTop: -80,
    marginLeft: 6,
    height: 90,
    width: 100,
  borderRadius:30
  }
});