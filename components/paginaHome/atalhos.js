import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export const Atalhos = () => {
  return (
    <View style={styles.containerPrincipal}>
      <View>
        <Text style={styles.textoTopo}>Atalhos</Text>
      </View>

      <View style={styles.containerLogos}>
        <Image
          style={styles.img}
          source={require("../../assets/issues.png")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/organizacao.png")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/discursoes.png")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/projetos.png")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/repositorio.png")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/pull.png")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/estrela.png")}
        />
        <Image
          style={styles.img}
          source={require("../../assets/issues.png")}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.texto}>
          As coisas que vocẽ precisa a um toque de distância Acesso rápido suas
          listas de issues, Pull Requests ou Discursões
        </Text>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}> COMEÇAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPrincipal: {
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "gray",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  containerLogos: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    margin: 10,
  },
  textoTopo: {
    fontSize: 17,
    fontWeight: "bold",
    margin: 10,
  },
  texto: {
    fontSize: 17,
    margin: 20,
    textAlign: "center",
  },
  botao: {
    width: 350,
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  img: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  textoBotao: {
    color: "#368FD3",
  },
});