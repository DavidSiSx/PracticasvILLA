import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const router = useRouter();

  function irASuma() {
    router.push(`/suma?numero1=${numero1}&numero2=${numero2}`);
  }

  function irAResta() {
    router.push(`/resta?numero1=${numero1}&numero2=${numero2}`);
  }

  function irAMultiplicacion() {
    router.push(`/multiplicacion?numero1=${numero1}&numero2=${numero2}`);
  }

  function irADivision() {
    router.push(`/division?numero1=${numero1}&numero2=${numero2}`);
  }

  return (
    <View>
      <Text>Calculadora</Text>
      <TextInput
        placeholder="Primer numero"
        value={numero1}
        onChangeText={setNumero1}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Segundo numero"
        value={numero2}
        onChangeText={setNumero2}
        keyboardType="numeric"
      />
      <Button title="Sumar" onPress={irASuma} />
      <Button title="Restar" onPress={irAResta} />
      <Button title="Multiplicar" onPress={irAMultiplicacion} />
      <Button title="Dividir" onPress={irADivision} />
    </View>
  );
}
