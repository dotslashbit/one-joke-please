import { ImageBackground, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={require("@/assets/images/background.png")}
        style={{ width: "100%", height: "100%" }}
      />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
