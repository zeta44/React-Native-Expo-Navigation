import React from "react";
import { View, Text } from "react-native";

export default function Information({route}) {
  return (
    <View style={{ marginTop: 60 }}>
      <View style={{ marginTop: 10, paddingLeft:20 }}>
        <Text>Nome: {route.params?.nome}</Text>
        <Text>Fone: {route.params?.fone}</Text>
        <Text>Ende: {route.params?.ende}</Text>
        <Text>Numb: {route.params?.numb}</Text>
        <Text>Prof: {route.params?.prof}</Text>
        <Text>E-mail: {route.params?.email}</Text>
      </View>      
    </View>
  );
}
