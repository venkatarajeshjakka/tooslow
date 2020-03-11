import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { AreaChart } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import RadioButtonGroup from "../components/form/RadioButtonGroup";
import Button from "../components/form/Button";
const HomeScreen = () => {
  const [radioButtonValue, setRadioButtonValue] = useState("pay");
  const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50];

  const Gradient = ({ index }) => (
    <Defs key={index}>
      <LinearGradient id={"gradient"} x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
        <Stop offset={"0%"} stopColor={"rgb(134, 65, 244)"} stopOpacity={0.8} />
        <Stop
          offset={"100%"}
          stopColor={"rgb(134, 65, 244)"}
          stopOpacity={0.2}
        />
      </LinearGradient>
    </Defs>
  );
  return (
    <SafeAreaView>
      <AreaChart
        style={{ height: 200 }}
        data={data}
        contentInset={{ top: 20, bottom: 20 }}
        svg={{ fill: "url(#gradient)" }}
      >
        <Gradient />
      </AreaChart>

      <RadioButtonGroup
        options={[
          {
            key: "pay",
            text: "BUY"
          },
          {
            key: "performance",
            text: "SELL"
          }
        ]}
        value={radioButtonValue}
        onPress={setRadioButtonValue}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <Button
          onPress={() => alert(`Why you opened me? Go away, it's mine!`)}
          title="Buy"
        />
        <Button
          onPress={() => alert(`Why you opened me? Go away, it's mine!`)}
          buttonStyle={{ backgroundColor: "#FF0000", shadowColor: "#FF0000" }}
          title="Sell"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
