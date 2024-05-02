import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export const Perfil = () => {
  return (
    <View style={styles.container}>
    <View style={styles.containerPrincipal}>
      <View style={styles.containerTopo}>
        <Image
          style={styles.img}
          source={require("../../assets/foto.png")}
        />
      </View>
      <View>
        <Text style={styles.textoNome}>Rodrigo Costa</Text>
        <Text style={styles.textoSub}>rodrigodevcosta . he/him</Text>
        
      </View>
    </View>

    <View style={{ justifyContent: "center", alignItems: "center" }}>
    <View style={styles.status}></View>
    <Text style={styles.textoDescricao}>  Hello, I am a computer engineer and technology enthusiast Full Stack Dev.</Text>
     <View style={{flexDirection:'row', marginBottom:15, justifyContent:'flex-end',alignItems:'flex-end'}}>
     <AntDesign name="user" size={15} color="black" />
     <Text> 7 Seguidores</Text>
     <Text> 8 Seguindo</Text>
     </View>
  </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  containerTopo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    margin: 10,
  },

  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textoNome: {
    fontSize: 24,
    fontWeight:'bold'
  },
  textoSub: {
    color: "gray",
  },
  status: {
    backgroundColor: "#a1a1a1a1",
    width: 360,
    height: 30,
    borderRadius: 4,
    marginTop: 5,
  },
  container: {
    backgroundColor:'#fff'

  },
  textoDescricao:{
    fontSize:17,
    margin:10
  }
});