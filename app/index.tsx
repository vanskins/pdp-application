import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function ProductDisplay() {
  const [sizeType, setSizeType] = useState<string>("us");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 30
      }}
    >
      <View>
        <Text style={{ fontWeight: 600, fontSize: 18, color: "#808080", marginBottom: 10 }}>AIR JORDAN / DZ5909-106</Text>
        <Text style={{ fontWeight: 600, fontSize: 30 }}>AIR JORDAN 1 LOW OG SP X TRAVIS SCOTT OLIVE PS</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: 'space-between',
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontWeight: 400, fontSize: 18 }}>Available Sizes:</Text>
        </View>
        <View style={{ flexDirection: "row", borderWidth: 1, justifyContent: 'flex-end' }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 60,
              borderWidth: sizeType === "uk" ? 2 : 1,
              borderColor: sizeType === "uk" ? "black" : "#808080",
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => setSizeType("uk")}
          >
            <Text>UK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 60,
              borderWidth: sizeType === "eu" ? 2 : 1,
              borderColor: sizeType === "eu" ? "black" : "#808080",
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => setSizeType("eu")}
          >
            <Text>EU</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 60,
              borderWidth: sizeType === "us" ? 2 : 1,
              borderColor: sizeType === "us" ? "black" : "#808080",
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => setSizeType("us")}
          >
            <Text>US</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
