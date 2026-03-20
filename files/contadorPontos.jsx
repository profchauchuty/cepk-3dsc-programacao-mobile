// Importações
import { useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

// Componente Principal
export default function App() {
  // Variáveis, Constantes, Estado
  const [numero, setNumero] = useState(0)

  const incrementar = () => {
    setNumero(numero + 1)
  };

  const decrementar = () => {
    numero > 0 && setNumero(numero - 1)
  }
 
  return (
    <View>
      <Button title="Incrementar" onPress={incrementar} />
      <Button title="Decrementar" onPress={decrementar} color="red"/>
      <Text>{numero}</Text>
    </View>
  );
}
