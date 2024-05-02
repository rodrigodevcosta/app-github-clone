import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

export const Descubra = () => {
  return (
    <View style={styles.containerPrincipal}>
      <View>
        <Text style={styles.textoTopo}>Descubra</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.img} source={require("../../assets/repo-alta.png")} />
          <Text style={styles.texto}>Repositórios em Alta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Image style={styles.img} source={require("../../assets/rosto-feliz.png")} />
          <Text style={styles.texto}>Listas Incríveis</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerPrincipal: {
    backgroundColor: "#fff",
  },
  container: {
    margin: 10,
  },
  textoTopo: {
    fontSize: 17,
    fontWeight: "bold",
    margin: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  texto: {
    fontSize: 17,
    textAlign: "center",
  },
  img:{
    width:30,
    height:30
  }
});