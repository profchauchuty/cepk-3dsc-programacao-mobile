// Importações
import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

// Componente Principal
export default function App() {
  // Declarações
  // Estados
  const [pontosTeamA, setPontosTeamA] = useState(0);

  // Funções
  function incrementar() {
    setPontosTeamA(pontosTeamA + 1);
  }

  function decrementar() {
    if (pontosTeamA > 0) {
      setPontosTeamA(pontosTeamA - 1);
    }
  }

  // Redenrização
  return (
    // Container Principal
    <View style={styles.container}>
      <View style={styles.team}>
        <Text>Equipe A</Text>
        <Text>Pontos: {pontosTeamA}</Text>
        <Button title="Incrementar" onPress={incrementar}></Button>
        <Button title="Decrementar" onPress={decrementar}></Button>
      </View>

      <View style={styles.team}>
        <Text>Equipe B</Text>
        <Text>Pontos: 0</Text>
        <Button title="Incrementar" color="red"></Button>
        <Button title="Decrementar" color="red"></Button>
      </View>
    </View>
  );
}

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 6,
    borderColor: 'red',
  },
  team: {
    flex: 1,
    borderWidth: 6,
    borderColor: 'blue',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
