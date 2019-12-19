import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
const AccountScreen = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: ({ tintColor }) => (
    <Feather name="user" size={20} color={tintColor} />
  )
};

export default AccountScreen;
