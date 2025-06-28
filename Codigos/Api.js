const API_URL = 'https://relaxfaceapi.webapptech.site/api/cliente';
import { Alert} from 'react-native';


export const fetchCliente = async (setRegistros) => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro ao buscar o Cliente');
    }
    const data = await response.json();
    console.log('Cliente recebidos da API:', data); 
    setRegistros(data.data);
  } catch (error) {
    console.error('Erro ao buscar o Cliente:', error);
    throw error;
  }
};

export const createCliente = async (ClienteData ) => {
   try {
    const response = await fetch('https://relaxfaceapi.webapptech.site/api/cliente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ClienteData),
    });

   
    if (response.status === 204) {
      Alert.alert('Sucesso!', 'Cadastro realizado com sucesso!');
      return {}; 
    }

   
    const textResponse = await response.text();
    console.log('Resposta bruta da API:', textResponse);

    let responseData;
    try {
      responseData = JSON.parse(textResponse);
    } catch (error) {
      console.warn('A resposta não é um JSON válido.');
      responseData = null;
    }

    if (!response.ok || !responseData) {
      throw new Error(responseData?.message || 'Erro desconhecido na API');
    }

    return responseData;
  } catch (error) {
    console.error('Erro ao cadastrar o Cliente:', error.message);
    Alert.alert('Erro ao cadastrar', `Detalhes: ${error.message}`);
    return null;
  }
};


export const deleteCliente = async (ClienteId, setRegistros) => {
   try {
    const response = await fetch(`https://relaxfaceapi.webapptech.site/api/cliente/${ClienteId}`, {
      method: 'DELETE',
    });

    // Verifica se a resposta foi bem-sucedida
    if (response.ok) {
      const responseData = await response.json(); // Obtém o JSON da resposta

      if (responseData.success) {
        Alert.alert('Sucesso!', responseData.message);
        // Atualiza a lista localmente, removendo o livro excluído
setRegistros((prevRegistros) => {
  const novaLista = prevRegistros.filter((Cliente) => Cliente.codigo != ClienteId);
  console.log('Nova lista de Cliente:', novaLista);
  return novaLista;
});

      } else {
        Alert.alert('Erro', responseData.message);
      }
    } else {
      // Caso a resposta não seja ok, tenta processar a mensagem de erro
      const textResponse = await response.text();
      let responseData = null;

      try {
        responseData = JSON.parse(textResponse); // tenta converter o texto para JSON
      } catch (error) {
        console.warn('A resposta não é um JSON válido.');
      }

      throw new Error(responseData?.message || 'Erro desconhecido ao excluir o Cliente');
    }
  } catch (error) {
    console.error('Erro ao excluir Cliente:', error.message);
    Alert.alert('Erro ao excluir', `Detalhes: ${error.message}`);
  }
};

export const updateCliente = async (ClienteId, updatedData, navigation) => {
  try {
    const response = await fetch(`https://relaxfaceapi.webapptech.site/api/cliente/${ClienteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    console.log('Dados enviados:', updatedData);

    if (response.status === 200) {
      Alert.alert('Sucesso!', 'Cliente atualizado com sucesso!');
      navigation.navigate('Home'); // Volta para a tela principal
    } else {
      const textResponse = await response.text();
      let responseData;
      try {
        responseData = JSON.parse(textResponse);
      } catch (error) {
        console.warn('A resposta não é um JSON válido.');
        responseData = null;
      }

      throw new Error(responseData?.message || 'Erro desconhecido ao atualizar o Cliente');
    }
  } catch (error) {
    console.error('Erro ao atualizar o Cliente:', error.message);
    Alert.alert('Erro ao atualizar', `Detalhes: ${error.message}`);
  }
};