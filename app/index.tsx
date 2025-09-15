import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [investimentoinicial, setInvestimentoInicial] = useState("");
  const [taxajuros, setTaxaJuros] = useState("");
  const [tempo, setTempo] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularJuros = () => {
    const C = parseFloat(investimentoinicial);
    const i = parseFloat(taxajuros) / 100;
    const t = parseFloat(tempo);

    if (isNaN(C) || isNaN(i) || isNaN(t)) {
      setResultado("Por favor, insira valores válidos.");
      return;
    }

    const montaanteS = C * t;
    const montanteJ = C * Math.pow(1 + i, t);

    setResultado(`Montante: R$ ${montanteJ.toFixed(2)}\nJuros: R$ ${montaanteS.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Investimento Inicial:</Text>
      <TextInput
        style={styles.input}
        value={investimentoinicial}
        onChangeText={setInvestimentoInicial}
        keyboardType="numeric"
        placeholder="Digite o valor"
      />
      <Text style={styles.label}>Taxa de Juros (%):</Text>
      <TextInput
        style={styles.input}
        value={taxajuros}
        onChangeText={setTaxaJuros}
        keyboardType="numeric"
        placeholder="Digite a taxa"
      />
      <Text style={styles.label}>Tempo (meses):</Text>
      <TextInput
        style={styles.input}
        value={tempo}
        onChangeText={setTempo}
        keyboardType="numeric"
        placeholder="Digite o tempo"
      />
      <View style={styles.buttonContainer}>
        <Button title="Calcular" onPress={calcularJuros} />
      </View>
      {resultado ? <Text style={styles.resultado}>{resultado}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  resultado: {
    fontSize: 16,
    color: "#333",
    marginTop: 20,
    fontWeight: "bold",
  },
});