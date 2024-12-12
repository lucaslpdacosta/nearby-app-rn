import { Image, Text, View, StatusBar } from "react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

export function Welcome() {
  return (
    <View>
      <StatusBar backgroundColor={colors.green.base} barStyle="light-content" />
      <Image source={require("@/assets/logo.png")} style={s.logo} />

      <Text style={s.title}>Boas vindas ao Nearby!</Text>
      <Text style={s.subtitle}>
        Tenha cupons de vantagem para usar em seus estabelecimentos
        favoritos.
      </Text>
    </View>
  );
}
