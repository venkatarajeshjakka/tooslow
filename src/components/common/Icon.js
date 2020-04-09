import React from "react";
import { AntDesign } from "@expo/vector-icons";
const Icon = ({ name, size, style }) => {
  size = size ? size : 20;
  return (
    <AntDesign
      name={name}
      size={size}
      style={[{ paddingHorizontal: 5 }, style]}
    />
  );
};

export default Icon;
export { Icon };
