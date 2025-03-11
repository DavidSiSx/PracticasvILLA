import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { Link, useLocalSearchParams } from "expo-router"

type Tarjeta = { id: string; nombre: string }

export default function Tarjetas() {
  const { numero, paqueteNombre, paquetePrecio, montoPersonalizado } = useLocalSearchParams<{
    numero?: string
    paqueteNombre?: string
    paquetePrecio?: string
    montoPersonalizado?: string
  }>()
  const tarjetas: Tarjeta[] = [
    { id: "1", nombre: "Visa **** 1234" },
    { id: "2", nombre: "utcard **** 5678" },
    { id: "3", nombre: "EsoTilin **** 9012" }
  ]
  return (
    <View>
      <FlatList
        data={tarjetas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Link
              href={`/pago?numero=${numero}&paqueteNombre=${paqueteNombre}&paquetePrecio=${paquetePrecio}&montoPersonalizado=${montoPersonalizado}&tarjeta=${item.nombre}`}
            >
              <Text>{item.nombre}</Text>
            </Link>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
