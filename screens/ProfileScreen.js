import React from "react";
import { ScrollView } from "react-native";
import { Descricao } from "../components/paginaPerfil/descricao";
import { Perfil } from "../components/paginaPerfil/perfil";
import { Popular } from "../components/paginaPerfil/popular";

export const ProfileScreen = () => {
  return (
    <ScrollView>
      <Perfil />
      <Descricao />
      <Popular />
    </ScrollView>
  );
};
