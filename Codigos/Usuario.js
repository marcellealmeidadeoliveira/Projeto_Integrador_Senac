import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, TouchableOpacity, Linking } from 'react-native';


export default function Usuario() {
  return (
    <View style={{flex:1, backgroundColor: '#EBF4FE'}}>
    <ScrollView>
      <View style={estilo.container}>
        <View style={estilo.Card4}>
          <Image style={estilo.ImagemEditada} source={require('../PastaFotos/LogoEditada.png')} />
        </View>
        <View>
          <Image source={require('../PastaFotos/user.jpg')} style={{ borderRadius: 25, marginTop: 5 }} />
        </View>
        <View>
          <Text style={{ color: 'blue', textAlign: 'center', fontSize: 13, marginRight: -13, fontWeight: 'bold' }}>
            Editar perfil ✏️
          </Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginRight: 320 }}>
            Nome:
            
          </Text>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginRight: 320 }}>
            Email:

          </Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginRight: 320 }}>
            Senha:
          </Text>
          <View>
            <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginRight: 35 }}>
              Seu plano
            </Text>
            <Image source={require('../PastaFotos/icone.png')}
              style={{ alignItems: 'center', marginRight: 30, borderRadius: 20 }}
            />
          </View>
        </View>

        <View style={{ backgroundColor: 'white', marginTop: 15, width: '90%', height: 180, borderRadius: 15, alignItems: 'center' }}>

          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
              Plano Atual:

            </Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
              Vencimento data:

            </Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
              Formas de Pagamento

            </Text>
            <View>
              <Image source={require('../PastaFotos/pixFoto.png')}
                style={{ marginTop: 13 }}
              />
            </View>

            <View>
              <Image source={require('../PastaFotos/cartaoFoto.png')}
                style={{ marginLeft: 100, marginTop: -30 }}
              />
            </View>

            <View>
              <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>Fatura Atual</Text>
              <Image source={require('../PastaFotos/CodigodeBarras.png')}
                style={{ marginTop: -2, height: 40 }}
              />
            </View>
          </View>
        </View>
        <Text style={{ borderRadius: 20, borderColor: 'black', borderWidth: 1, padding: 5, fontSize: 20, fontWeight: 'bold', marginTop: 10, width: '50%', textAlign: 'center' }}>
          Mudar Plano
        </Text>
      </View>
    </ScrollView>
    </View>
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
  TextoEditado5: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  TextoEditado5e1: {
    fontSize: 13,
    textAlign: 'right',
    fontWeight: 'bold',
    marginRight: 60
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
    textAlign: 'right',
    marginRight: '-25'
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
    marginRight: '15'
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
    marginTop: -89,
    marginRight: -15,
    height: 115,
    width: 110,
  },
  ImagemEditada3e1: {
    alignSelf: 'flex-end',
    marginTop: -75,
    marginRight: -15,
    height: 115,
    width: 110,
    borderRadius: 20
  },
  ImagemEditada4: {
    alignSelf: 'flex-start',
    marginTop: -89,
    marginRight: -15,
    height: 115,
    width: 110,

  },
  ImagemEditada5: {
    alignSelf: 'flex-start',
    marginTop: -89,
    marginLeft: -15,
    height: 115,
    width: 110,
    borderRadius: 10
  }
});