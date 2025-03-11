import { useState } from "react"
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native"
import { useLocalSearchParams, Link } from "expo-router"

type Paquete = { id: string; nombre: string; precio: number }

export default function Paquetes() {
  const { numero } = useLocalSearchParams<{ numero?: string }>()
  const paquetes: Paquete[] = [
    { id: "1", nombre: "Paquete 1GB", precio: 10 },
    { id: "2", nombre: "Paquete 3GB", precio: 25 },
    { id: "3", nombre: "Paquete 5GB", precio: 40 }
  ]
  const [monto, setMonto] = useState("")
  return (
    <View>
      <Text>{numero}</Text>
      <FlatList
        data={paquetes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Link href={`/tarjetas?numero=${numero}&paqueteNombre=${item.nombre}&paquetePrecio=${item.precio}`}>
              <Text>{item.nombre}</Text>
              <Text>${item.precio}</Text>
            </Link>
          </TouchableOpacity>
        )}
      />
      <TextInput
        keyboardType="numeric"
        value={monto}
        onChangeText={setMonto}
      />
      <Link href={`/tarjetas?numero=${numero}&montoPersonalizado=${monto}`}>
        <Button title="Continuar" onPress={() => {}} />
      </Link>
    </View>
  )
}
