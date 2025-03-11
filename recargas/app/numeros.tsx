import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

type Numero = { id: string; numero: string };

export default function Numeros() {
  const data: Numero[] = [
    { id: "1", numero: "+1 111 111 1111" },
    { id: "2", numero: "+1 222 222 2222" },
    { id: "3", numero: "+1 333 333 3333" }
  ];

  return (
    <View>
      <Text>Selecciona un número</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Link href={`/paquetes?numero=${item.numero}`}>
              <Text>{item.numero}</Text>
            </Link>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
