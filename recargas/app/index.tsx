import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pantalla de Inicio</Text>
      <Link href="/numeros">
        <Button title="Recargar" onPress={() => {}} />
      </Link>
    </View>
  );
}
