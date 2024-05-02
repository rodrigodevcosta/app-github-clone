import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

import { Octicons } from "@expo/vector-icons";

export const Popular = () => {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerTopo}>
        <Text style={styles.textoTopo}> Popular</Text>
      </View>

      <View style={styles.containerExtAtividade}>
        <View style={styles.dataAtividade}></View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <ScrollView horizontal={true}>
          <TouchableOpacity style={styles.botaoAtividade}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Image
                style={styles.imginterna}
                source={require("../../assets/foto.png")}
              />
              <Text style={{ fontWeight: "bold" }}>Usuario/ Repositório</Text>
            </View>
            <Text style={{ color: "gray" }}> descrição da atividade</Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                alignItems: "center",
              }}
            ></View>
            <View>
              <Octicons name="star" size={15} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoAtividade}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Image
                style={styles.imginterna}
                source={require("../../assets/foto.png")}
              />
              <Text style={{ fontWeight: "bold" }}>Usuario/ Repositório</Text>
            </View>
            <Text style={{ color: "gray" }}> descrição da atividade</Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                alignItems: "center",
              }}
            ></View>
            <View>
              <Octicons name="star" size={15} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoAtividade}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Image
                style={styles.imginterna}
                source={require("../../assets/foto.png")}
              />
              <Text style={{ fontWeight: "bold" }}>Usuario/ Repositório</Text>
            </View>
            <Text style={{ color: "gray" }}> descrição da atividade</Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                alignItems: "center",
              }}
            ></View>
            <View>
              <Octicons name="star" size={15} color="black" />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerTopo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
  },

  textoTopo: {
    fontSize: 17,
    fontWeight: "bold",
    margin: 10,
  },
  containerExtAtividade: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 5,
  },

  dataAtividade: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
  },
  imgExterna: {
    width: 30,
    height: 30,
  },
  imginterna: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  botaoAtividade: {
    // flexDirection:'row',
    backgroundColor: "#fff",
    width: 360,
    height: 150,
    borderRadius: 10,
    gap: 5,
    padding: 10,

    borderWidth: 0.5,
    margin: 10,
  },
  botaoStrela: {
    flexDirection: "row",
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  containerPrincipal: {
    backgroundColor: "#fff",
  },
});
