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
    contentContainerStyle={{ 
    flexDirection : 'row',
    justifyContent : 'space-evenly'
    }}
     data={options}
      numColumns={2}
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
    alignItems: "center",
    marginBottom: 10,
    padding: 20,
    marginLeft: 10,
    marginRight : 10,
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
