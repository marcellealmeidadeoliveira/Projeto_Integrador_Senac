import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image, Button,
  TextInput, Alert, TouchableOpacity
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { auth } from '../Firebase/Firebase';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';

export default function Usuario() {
  const [userData, setUserData] = useState(null);
  const [carregar, setCarregar] = useState(true);
  const [editando, setEditando] = useState(false);
  const [name, setName] = useState('');
  const [galleryPermission, setGalleryPermission] = useState(false);
  const [showSenha, setShowSenha] = useState(false);
  const [email, setEmail] = useState('');
  const [senha] = useState('********'); 

  const db = getFirestore();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          setEmail(user.email || '');

          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData(data);
            setName(data.name || '');
          } else {
            console.warn('Documento do usuário não encontrado.');
            setUserData(null);
          }
        } else {
          console.warn('Usuário não está logado.');
          setUserData(null);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        setUserData(null);
      } finally {
        setCarregar(false);
      }
    };

    const requestGalleryPermission = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleryPermission(status === 'granted');
    };

    fetchUserData();
    requestGalleryPermission();
  }, []);

  const handleSave = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        await updateDoc(docRef, { name });
        setUserData({ ...userData, name });
        setEditando(false);
        Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar os dados.');
    }
  };

  const pickImageAndUpload = async () => {
    try {
      if (!galleryPermission) {
        Alert.alert('Permissão Negada', 'Você precisa permitir o acesso à galeria.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        base64: true,
      });

      if (!result.canceled) {
        const base64Img = `data:image/jpg;base64,${result.assets[0].base64}`;
        const data = {
          file: base64Img,
          upload_preset: 'biblioteca', 
          cloud_name: 'db6qew2cq',     
        };

        const res = await fetch('https://api.cloudinary.com/v1_1/db6qew2cq/image/upload', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'content-type': 'application/json' },
        });

        const json = await res.json();

        if (json.secure_url) {
          const user = auth.currentUser;
          await updateDoc(doc(db, 'users', user.uid), {
            photoURL: json.secure_url,
          });

          setUserData(prev => ({ ...prev, photoURL: json.secure_url }));
          Alert.alert('Sucesso', 'Foto de perfil atualizada!');
        } else {
          Alert.alert('Erro', 'Erro ao enviar imagem. Verifique se o preset está correto.');
        }
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Algo deu errado ao tentar fazer o upload.');
    }
  };

  if (carregar) {
    return (
      <View style={[estilo.container, { justifyContent: 'center' }]}>
        <Text>Carregando dados do usuário...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#EBF4FE' }}>
      <ScrollView>
        <View style={estilo.container}>

          <View style={estilo.Card4}>
            <Image style={estilo.ImagemEditada} source={require('../PastaFotos/LogoEditada.png')} />
          </View>

          <TouchableOpacity onPress={pickImageAndUpload} style={{ alignSelf: 'center', marginTop: 10 }}>
            {userData?.photoURL ? (
              <Image source={{ uri: userData.photoURL }} style={{ width: 120, height: 120, borderRadius: 25 }} />
            ) : (
              <Image source={require('../PastaFotos/user.jpg')} style={{ width: 120, height: 120, borderRadius: 25 }} />
            )}
            <Text style={{ color: 'blue', textAlign: 'center', fontSize: 13, marginTop: 5, fontWeight: 'bold' }}>
              Editar foto de perfil ✏️
            </Text>
          </TouchableOpacity>

          <View style={{ alignItems: 'flex-start', marginTop: 15, width: '90%' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Nome:</Text>
            {editando ? (
              <TextInput
                style={[estilo.input, { width: '100%' }]}
                value={name}
                onChangeText={setName}
                placeholder="Nome"
              />
            ) : (
              <Text style={{ fontSize: 15, marginTop: 5 }}>{userData?.name || ''}</Text>
            )}
          </View>

          <View style={{ alignItems: 'flex-start', marginTop: 15, width: '90%' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Email:</Text>
            <Text style={{ fontSize: 15, marginTop: 5 }}>{email}</Text>
          </View>

          <View style={{ alignItems: 'flex-start', marginTop: 15, width: '90%' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Senha:</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 15, marginTop: 5 }}>{showSenha ? '••••••••••' : senha}</Text>
              <Button
                title={showSenha ? 'Ocultar' : 'Mostrar'}
                onPress={() => setShowSenha(!showSenha)}
                color="#8AB4E3"
              />
            </View>
          </View>

          <View style={{ marginTop: 20, width: '90%' }}>
            {editando ? (
              <>
                <Button title="Salvar" onPress={handleSave} color="#8AB4E3" />
                <View style={{ height: 10 }} />
                <Button title="Cancelar" onPress={() => setEditando(false)} color="#888" />
              </>
            ) : (
              <Button title="Editar" onPress={() => setEditando(true)} color="#8AB4E3" />
            )}
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
                <Image source={require('../PastaFotos/pixFoto.png')} style={{ marginTop: 13 }} />
              </View>

              <View>
                <Image source={require('../PastaFotos/cartaoFoto.png')} style={{ marginLeft: 100, marginTop: -30 }} />
              </View>

              <View>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>Fatura Atual</Text>
                <Image source={require('../PastaFotos/CodigodeBarras.png')} style={{ marginTop: -2, height: 40 }} />
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
  Card4: {
    backgroundColor: '#AECBEB',
    width: '95%',
    height: 60,
    marginTop: 50,
    borderRadius: 5,
    justifyContent: 'center',
  },
  ImagemEditada: {
    height: 50,
    width: 215,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'white',
    fontSize: 18,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
});
