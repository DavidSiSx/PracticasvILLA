import { View, Text, Button } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"

export default function Pago() {
  const router = useRouter()
  const { numero, paqueteNombre, paquetePrecio, montoPersonalizado, tarjeta } = useLocalSearchParams<{
    numero?: string
    paqueteNombre?: string
    paquetePrecio?: string
    montoPersonalizado?: string
    tarjeta?: string
  }>()
  const total = paquetePrecio
    ? parseFloat(paquetePrecio) + 6
    : parseFloat(montoPersonalizado || "0") + 6

  return (
    <View>
      <Text>{numero}</Text>
      {paqueteNombre ? (
        <>
          <Text>{paqueteNombre}</Text>
          <Text>${paquetePrecio}</Text>
        </>
      ) : (
        <Text>${montoPersonalizado}</Text>
      )}
      <Text>{tarjeta}</Text>
      <Text>${total}</Text>
      <Button title="Pagar" onPress={() => router.replace("/")} />
    </View>
  )
}
