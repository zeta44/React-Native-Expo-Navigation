import React from "react";
import { View, Text } from "react-native";

export default function Contacts({ navigation }) {
  /**
     * Function to redirect navigation for another page.
     * @param {*} page - Page's Name
     * @param {*} object - JSON - 
     * {
            nome: String,
            fone: String,
            ende: String,
            numb: String,
            prof: String,
            email: String,
          }
     * @returns () => navigation.navigate("Information", object);
     */
  function contactData(page, object) {
    return () => navigation.navigate("Information", object);
  }

  return (
    <View style={{ marginTop: 60 }}>
      <View style={{ marginTop: 10, paddingLeft: 20 }}>
        <Text>Nome: João Silva</Text>
        <Text>Fone: (99) 999-99999</Text>
        <Text
          onPress={contactData("Information", {
            nome: "João Silva",
            fone: "(99) 999-99999",
            ende: "Rua das Flores",
            numb: "769",
            prof: "Carpinteiro",
            email: "joao@email.com",
          })}
        >
          More Information...
        </Text>
      </View>
      <View style={{ marginTop: 10, paddingLeft: 20 }}>
        <Text>Nome: Amanda da Silva</Text>
        <Text>Fone: (88) 888-888888</Text>
        <Text
          onPress={contactData("Information", {
            nome: "Amanda da Silva",
            fone: "(88) 888-888888",
            ende: "Rua das Pedras",
            numb: "555",
            prof: "Doméstica",
            email: "amanda@email.com",
          })}
        >
          More Information...
        </Text>
      </View>
    </View>
  );
}
