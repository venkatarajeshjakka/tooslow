import React from "react";
import { View } from "react-native";
import { Chip } from "../form-components";
const TopSearchResults = ({ data }) => {
  if (data) {
    return (
      <View style={{ marginHorizontal: 10, paddingVertical: 10 }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {data.map((item, key) => {
            return (
              <Chip
                key={key}
                value={item}
                style={{ backgroundColor: "#E1EFFF" }}
                onPress={() => alert(`u pressed chip`)}
              />
            );
          })}
        </View>
      </View>
    );
  } else return null;
};

export default TopSearchResults;
export { TopSearchResults };
