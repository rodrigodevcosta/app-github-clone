import { ScrollView, View, Image, Text, StyleSheet } from "react-native";

export const Descricao = () => {
  return (
    <View style={{ backgroundColor: "#fff", marginTop: 20 }}>
      <View style={styles.container}>
        <Text style={styles.textoPrincipal}>Hi there 👋</Text>
        <Text style={styles.texto}>
          I am a Computer Engineering student and a Full-Stack Development
          enthusiast. Currently, I am immersed in the Full-Stack Development
          Residency at Serratec SENAC in Petrópolis, RJ, where I am solidifying
          my skills in TypeScript, JavaScript, and Java. With a special focus on
          Web Development and React Native, I seek to integrate knowledge to
          create innovative solutions. Strong inclination towards teamwork and
          communication, coupled with proficiency in English. I am eager to
          collaborate on challenging projects and contribute to the dynamic
          world of software development.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  
    margin: 10,
  },
  texto: {
    fontSize: 17,
  },
  textoPrincipal:{
    fontWeight:'bold',
    fontSize:20, 
    marginTop:10,
    marginBottom:10
  }
});