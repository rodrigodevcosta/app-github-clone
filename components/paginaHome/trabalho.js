import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export const Trabalho = () => {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerTopo}>
        <Text style={styles.textoTopo}> Meu Trabalho</Text>
        <TouchableOpacity>
          <Text style={styles.textoTopo}>...</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.containerItem}>
          <Image style={styles.img} source={require("../../assets/issues.png")} />
          <TouchableOpacity>
            <Text style={styles.textoItem}>Issues</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerItem}>
          <Image style={styles.img} source={require("../../assets/pull.png")} />
          <TouchableOpacity>
            <Text style={styles.textoItem}>Solicitaçoes de pull</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerItem}>
          <Image style={styles.img} source={require("../../assets/discursoes.png")} />
          <TouchableOpacity>
            <Text style={styles.textoItem}>Discussões</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerItem}>
          <Image style={styles.img} source={require("../../assets/projetos.png")} />
          <TouchableOpacity>
            <Text style={styles.textoItem}>Projetos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerItem}>
          <Image style={styles.img} source={require("../../assets/repositorio.png")} />
          <TouchableOpacity>
            <Text style={styles.textoItem}>Repositórios</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerItem}>
          <Image style={styles.img} source={require("../../assets/organizacao.png")} />
          <TouchableOpacity>
            <Text style={styles.textoItem}>Organizações</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerItem}>
          <Image style={styles.img} source={require("../../assets/estrela.png")} />
          <TouchableOpacity>
          <Text style={styles.textoItem}>Classificado com estrela</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPrincipal: {
    backgroundColor: "#fff",
  },
  containerTopo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginStart: 10,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  containerItem: {
    flexDirection: "row",
    marginStart: 10,
    marginBottom:20,
    gap: 10,
    alignItems: "center",
  },
  textoTopo: {
    fontSize: 17,
    fontWeight: "bold",
  },
  textoItem: {
    fontSize: 16,
  },
  img:{
    width:40,
    height:40
  }
});