import { View, StyleSheet, ScrollView } from "react-native";
import { Trabalho } from "../components/paginaHome/trabalho";
import { Favoritos } from "../components/paginaHome/favoritos";
import { Atalhos } from "../components/paginaHome/atalhos";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Trabalho />
        <Favoritos />
        <Atalhos />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },

  textoNegrito: {
    fontSize: 16,
    fontWeight: "bold",
  },
  work: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  imagem: {
    width: 30,
    height: 30,
  },
});
