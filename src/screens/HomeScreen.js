import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  ScrollView
} from "react-native";
import { AreaChart } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import {
  GradientButton,
  Button,
  RadioButtonGroup,
  Chip,
  Input
} from "../components/form-components";
import BottomSheet from "reanimated-bottom-sheet";
import { Header, Panel } from "../components/action-sheet-components";
import { StockSwiper } from "../components/stock-components";

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

  renderInner = () => (
    <Panel>
      <Text style={styles.panelTitle}>San Francisco Airport</Text>
      <Text style={styles.panelSubtitle}>
        International Airport - 40 miles away
      </Text>
      <View style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Directions</Text>
      </View>
      <View style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Search Nearby</Text>
      </View>
    </Panel>
  );

  bs = React.createRef();
  return (
    <SafeAreaView style={{ backgroundColor: "#F0EEEE" }}>
      <ScrollView>
        <AreaChart
          style={{ height: 200 }}
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{ fill: "url(#gradient)" }}
        >
          <Gradient />
        </AreaChart>
        <View>
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
        </View>

        <View
          style={{
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <GradientButton
            onPress={() => alert(`Why you opened me? Go away, it's mine!`)}
            text="Test"
          />
          <GradientButton
            onPress={() => alert(`Why you opened me? Go away, it's mine!`)}
            text="Test2"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center"
          }}
        >
          <Chip value="HCL" onPress={() => alert(`u pressed chip`)} />
          <Chip value="BAJAJ FINANCE" onPress={() => alert(`u pressed chip`)} />
          <Chip value="SBI" onPress={() => alert(`u pressed chip`)} />
          <Chip value="RELIANCE" onPress={() => alert(`u pressed chip`)} />
          <Chip value="HCL" onPress={() => alert(`u pressed chip`)} />
          <Chip value="HCL" onPress={() => alert(`u pressed chip`)} />
        </View>
        <View>
          <Input
            label="Target :"
            secureTextEntry={false}
            value=""
            onChangeText={input => {
              console.log(input);
            }}
            placeholder="Target Price .."
            keyboardType={"numeric"}
          />
        </View>
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              this.bs.current.snapTo(1);
            }}
          >
            <Text>Touch</Text>
          </TouchableWithoutFeedback>
        </View>

        <StockSwiper />
      </ScrollView>

      <BottomSheet
        ref={this.bs}
        snapPoints={[500, 300, 0]}
        renderContent={this.renderInner}
        renderHeader={Header}
        initialSnap={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  panelTitle: {
    fontSize: 27,
    height: 35
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#318bfb",
    alignItems: "center",
    marginVertical: 10
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white"
  }
});
export default HomeScreen;
