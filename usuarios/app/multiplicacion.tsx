import { View, Text, Button } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function multiplicacion() {
  const router = useRouter();
  const { numero1, numero2 } = useLocalSearchParams<{
    numero1?: string;
    numero2?: string;
  }>();

  let resultado = 0;
  if (numero1 && numero2) {
    resultado = parseFloat(numero1) * parseFloat(numero2);
  }

  return (
    <View>
      <Text>Resultado de la multiplicacion: {resultado}</Text>
      <Button title="Regresar" onPress={() => router.back()} />
    </View>
  );
}
