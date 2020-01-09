import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

const RadioButtonGroup = ({ options, onPress, value }) => {
  return (
    <FlatList
      data={options}
      horizontal={true}
      keyExtractor={item => item.key}
      renderItem={({ item }) => {
        return (
          <View key={item.key} style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => onPress(item.key)}
              style={styles.circle}
            >
              {value === item.key && <View style={styles.checkedCircle} />}
            </TouchableOpacity>
            <Text>{item.text}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    padding: 20
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ACACAC",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#794F9B"
  }
});
export default RadioButtonGroup;
