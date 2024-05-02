import { Text, TouchableOpacity, View, Image,StyleSheet } from "react-native";

export const Notificacao = () => {
  return (
    <View style={styles.containerPrincipal}>

      <Image  source={require("../../assets/img-notificacao.png")} style={styles.img}/>
      <Text style={styles.textoPrincipal}>Sem Notificações</Text>
      <Text style={styles.texto}> Use menos filtros ou redefina todos os filtros</Text>
      
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}> REDEFINIR TODOS OS FILTROS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPrincipal:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textoPrincipal:{
   fontSize:30,
   fontWeight:'bold'
  },
  texto:{
    color:'gray',
    fontSize: 17,
    margin: 20,
    textAlign: "center",
  },
  img:{
    width:"100%",
    height:400,
    
  },
  botao: {
    width: 250,
    height: 45,
    backgroundColor:'#fff',
    borderColor: "gray",
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textoBotao:{
    color:'#368FD3'
  }
  

})