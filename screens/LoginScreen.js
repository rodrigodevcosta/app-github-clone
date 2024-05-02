import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("senac"); // inicia com esse valor
  const [password, setPassword] = useState("123"); // inicia com esse valor
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (username === "senac" && password === "123") {
      navigation.navigate("MainTabs"); // Mudança para navegação por tab
    } else {
      setErrorMessage("Credenciais inválidas");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <AntDesign name="github" size={100} color="black" />
      </View>

      <View style={styles.containerDentro}>
        <Text style={styles.titulo}>Usuário</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Digite um usuário"
          style={styles.imput}
        ></TextInput>

        <Text style={styles.titulo}>Senha</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Sua senha"
          keyboardType="numeric"
          style={styles.imput}
        ></TextInput>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto} onPress={handleLogin}>
            ENTRAR NO GITHUB{" "}
          </Text>
        </TouchableOpacity>
        {errorMessage && <Text>{errorMessage}</Text>}
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text style={{ color: "#a1a1a1" }}>Porblemas para entrar ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  containerDentro: {
    backgroundColor: "#eef0f2",
    flex: 1,
    paddingLeft: "5%",
    paddingEnd: "5%",
  },
  titulo: {
    fontSize: 20,
    marginTop: 28,
  },
  imput: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  botao: {
    backgroundColor: "black",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 17,
  },
  botaoRegistro: {
    marginTop: 14,
    alignSelf: "center",
  },
  registroTexto: {
    color: "#368FD3",
  },
  containerImg: {
    flex: 1,
    backgroundColor: "#eef0f2",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {},
});
