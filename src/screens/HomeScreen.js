import React,{useState} from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { AreaChart, Grid } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import RadioButtonGroup from "../components/RadioButtonGroup";
const HomeScreen = () => {

const [radioButtonValue,setRadioButtonValue] = useState('pay');
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
    </SafeAreaView>
  );
};

export default HomeScreen;
