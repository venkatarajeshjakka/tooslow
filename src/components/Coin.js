import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Change from "./Change";
import { AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
const AnimatedIcon = Animatable.createAnimatableComponent(AntDesign);

const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: "clamp"
  });
  return (
    <View style={styles.leftAction}>
      <AnimatedIcon
        name="wallet"
        style={[styles.actionLeftIcon, { transform: [{ scale }] }]}
        size={25}
      />
      <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
        Portfolio
      </Animated.Text>
    </View>
  );
};

const RightActions = ({ progress, dragX, onPress }) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: "clamp"
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.rightAction}>
        <AnimatedIcon
          name="delete"
          style={[styles.actionRightIcon, { transform: [{ scale }] }]}
          size={25}
        />
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
          Delete
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

const Coin = ({
  onSwipeFromLeft,
  onRightPress,
  onPress,
  symbol,
  price,
  name,
  change
}) => {
  return (
    <Swipeable
      renderLeftActions={LeftActions}
      onSwipeableLeftOpen={onSwipeFromLeft}
      renderRightActions={(progress, dragX) => (
        <RightActions
          progress={progress}
          dragX={dragX}
          onPress={onRightPress}
        />
      )}
    >
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.text} numberOfLines={1}>
              {symbol}
            </Text>
            <View style={styles.right}>
              <Text style={styles.text} numberOfLines={1}>
                {price}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={[styles.text, styles.name]} numberOfLines={1}>
              {name}
            </Text>
            <View style={styles.right}>
              <Change value={change} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 5,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    backgroundColor: "#fff"
  },

  row: {
    flexDirection: "row",
    paddingBottom: 5
  },
  right: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "flex-end"
  },
  text: {
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: "500"
  },
  name: {
    fontSize: 16,
    fontWeight: "300"
  },
  leftAction: {
    backgroundColor: "#388e3c",
    justifyContent: "center",
    flex: 1,
    paddingBottom: 10,
    marginVertical: 5
  },
  actionLeftIcon: {
    marginLeft: 35,
    marginTop: 5,
    paddingTop : 15,
    color: "#fff"
  },
  actionRightIcon: {
    marginRight: 30,
    marginTop: 5,
    paddingTop : 15,
    color: "#fff"
  },
  actionText: {
    color: "#fff",
    fontWeight: "600",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 5
  },
  rightAction: {
    backgroundColor: "#dd2c00",
    justifyContent: "center",
    paddingBottom : 10,
    marginVertical : 5,
    alignItems: "flex-end"
  }
});
export default Coin;
