import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function screen2() {
  const router = useRouter();
  const { id, nombre, edad } = useLocalSearchParams();

  return (
    <View>
      <Text>Detalle del usuario</Text>
      <Text>id: {id || "No se recibió ID"}</Text>
      <Text>Nombre: {nombre || "No se recibió nombre"}</Text>
      <Text>Edad: {edad || "No se recibió edad"}</Text>
      <Button
        title="Volver"
        onPress={() => router.back()}
      />
    </View>
  );
}