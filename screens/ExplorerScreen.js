import { ScrollView } from "react-native";
import { Atividade } from "../components/paginaExplorar/atividade";
import { Descubra } from "../components/paginaExplorar/descubra";

export const ExplorerScreen = () => {
  return (
    <ScrollView>
      <Descubra />
      <Atividade />
    </ScrollView>
  );
};
