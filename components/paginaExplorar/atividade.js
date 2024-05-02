import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { Octicons } from "@expo/vector-icons";

export const Atividade = () => {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerTopo}>
        <Text style={styles.textoTopo}> Atividade</Text>
        <TouchableOpacity>
          <Octicons name="filter" size={15} c />
        </TouchableOpacity>
      </View>

      <View style={styles.containerExtAtividade}>
        <Image
          style={styles.imgExterna}
          source={require("../../assets/mulher-user.png")}
        />
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold" }}>Usuario</Text>
        </TouchableOpacity>
        <Text style={{ color: "gray" }}> atividade</Text>
        <View style={styles.dataAtividade}>
          <Text style={{ color: "gray" }}> 2d</Text>
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.botaoAtividade}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Image
              style={styles.imginterna}
              source={require("../../assets/mulher-user.png")}
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
          >
            <Octicons name="star" size={15} color="black" />
            <Text> 2</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.botaoStrela}>
            <Octicons name="star" size={20} color="black" />
            <Text> ESTRELA</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>






      <View style={styles.containerExtAtividade}>
        <Image
          style={styles.imgExterna}
          source={require("../../assets/homem-user.png")}
        />
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold" }}>Usuario</Text>
        </TouchableOpacity>
        <Text style={{ color: "gray" }}> atividade</Text>
        <View style={styles.dataAtividade}>
          <Text style={{ color: "gray" }}> 2d</Text>
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.botaoAtividade}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Image
              style={styles.imginterna}
              source={require("../../assets/homem-user.png")}
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
          >
            <Octicons name="star" size={15} color="black" />
            <Text> 2</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.botaoStrela}>
            <Octicons name="star" size={20} color="black" />
            <Text> ESTRELA</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>



      <View style={styles.containerExtAtividade}>
        <Image
          style={styles.imgExterna}
          source={require("../../assets/mulher-user.png")}
        />
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold" }}>Usuario</Text>
        </TouchableOpacity>
        <Text style={{ color: "gray" }}> atividade</Text>
        <View style={styles.dataAtividade}>
          <Text style={{ color: "gray" }}> 2d</Text>
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.botaoAtividade}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Image
              style={styles.imginterna}
              source={require("../../assets/mulher-user.png")}
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
          >
            <Octicons name="star" size={15} color="black" />
            <Text> 2</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.botaoStrela}>
            <Octicons name="star" size={20} color="black" />
            <Text> ESTRELA</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>



      <View style={styles.containerExtAtividade}>
        <Image
          style={styles.imgExterna}
          source={require("../../assets/mulher-user.png")}
        />
        <TouchableOpacity>
          <Text style={{ fontWeight: "bold" }}>Usuario</Text>
        </TouchableOpacity>
        <Text style={{ color: "gray" }}> atividade</Text>
        <View style={styles.dataAtividade}>
          <Text style={{ color: "gray" }}> 2d</Text>
        </View>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.botaoAtividade}>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Image
              style={styles.imginterna}
              source={require("../../assets/mulher-user.png")}
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
          >
            <Octicons name="star" size={15} color="black" />
            <Text> 2</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.botaoStrela}>
            <Octicons name="star" size={20} color="black" />
            <Text> ESTRELA</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
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
  },
  botaoAtividade: {
    // flexDirection:'row',
    backgroundColor: "#fff",
    width: 360,
    height: 150,
    borderRadius: 10,
    gap: 5,
    padding: 10,
    marginBottom:10
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
});