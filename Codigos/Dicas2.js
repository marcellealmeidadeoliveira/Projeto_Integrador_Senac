 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, TouchableOpacity, Linking } from 'react-native';

export default function Dicas2() {
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
            <Text style={estilo.TextoEditado4}>Usuário</Text>
          </View>
        </View>

        <View style={estilo.Card}>
          <Text style={estilo.TextoEditado}>
            Entenda mais sobre sua pele Oleosa!
          </Text>
        </View>

        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5}>
            Lave o rosto duas vezes ao dia
          </Text>
          <Text style={estilo.TextoEditado6}>
            Use um sabonete específico para sua pele
          </Text>
          <Text style={estilo.TextoEditado7}>
            de manhã e à noite para remover o excesso
          </Text>
          <Text style={estilo.TextoEditado7}>
            de oleosidade e impurezas.
          </Text>
          <View>
            <Image style={estilo.ImagemEditada3} source={require('../PastaFotos/icon1.png')} />
          </View>
        </View>

        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5e1}>
            Use tônicos adstringentes
          </Text>
          <Text style={estilo.TextoEditado6e1}>
            Eles ajudam a controlar o brilho
          </Text>
          <Text style={estilo.TextoEditado8}>
            e reduzem os poros dilatados,
          </Text>
          <Text style={estilo.TextoEditado8}>
            equilibrando a produção de óleo.
          </Text>
          <View>
            <Image style={estilo.ImagemEditada5} source={require('../PastaFotos/icon3.png')} />
          </View>
        </View>

        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5}>
            Hidrate com produtos oil-free
          </Text>
          <Text style={estilo.TextoEditado6}>
          A pele oleosa precisa de hidratação.
          </Text>
          <Text style={estilo.TextoEditado7}>
            Mas, opte por hidratantes livres de óleo
          </Text>
          <View>
            <Image style={estilo.ImagemEditada3e1} source={require('../PastaFotos/icon2.png')} />
          </View>
        </View>

        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5e1}>
            Evite tocar o rosto
          </Text>
          <Text style={estilo.TextoEditado6e1}>
            As mãos carregam sujeiras e oleosidade,
          </Text>
          <Text style={estilo.TextoEditado8}>
            o que pode obstruir os poros
          </Text>
          <Text style={estilo.TextoEditado8}>
            e causar acne.
          </Text>
          <View>
            <Image style={estilo.ImagemEditada5} source={require('../PastaFotos/icon5.png')} />
          </View>
        </View>

        <View style={estilo.Card2}>
          <Text style={estilo.TextoEditado5}>
            Esfolie uma vez por semana
          </Text>
          <Text style={estilo.TextoEditado6}>
            A esfoliação remove células mortas
          </Text>
          <Text style={estilo.TextoEditado7}>
            e previne o acúmulo de sebo,
          </Text>
          <Text style={estilo.TextoEditado7}>
            evitando cravos e espinhas.
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
borderRadius:30,
marginLeft: 20

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