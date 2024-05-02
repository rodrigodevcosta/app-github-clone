import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

export const Favoritos = () => {
  return (
    <View style={styles.containerPrincipal}>
      <View>
        <Text style={styles.textoTopo}> Favoritos</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.texto}>
          Adicione repositórios favoritos para ter acesso rápido a qualquer
          momento, sem ter que pesquisar
        </Text>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}> ADICIONAR AOS FAVORITOS</Text>
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
  textoBotao:{
    color:'#368FD3'
  }
});