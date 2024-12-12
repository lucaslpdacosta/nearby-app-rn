import { ActivityIndicator, View, StatusBar } from "react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

export function Loading() {
  return (
    <View style={s.container}>
      <ActivityIndicator color={colors.green.base} />
      <StatusBar backgroundColor={colors.green.base} barStyle="light-content" />
    </View>
  );
}
