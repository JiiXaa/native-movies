import { View, Text, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

const COLORS = [
  "#0079bf",
  "#d29034",
  "#519839",
  "#b04632",
  "#89609e",
  "#cd5a91",
];

export const DEFAULT_COLOR = COLORS[0];

export default function StandaloneScreen() {
  const [selected, setSelected] = useState<string>(DEFAULT_COLOR);
  const router = useRouter();

  const onColorSelect = (color: string) => {
    setSelected(color);
    router.setParams({ bg: color });
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Standalone Screen</Text>
      <Button title="Go Back" onPress={() => router.back()} />

      <View className="flex-row flex-wrap justify-center">
        {COLORS.map((color) => (
          <TouchableOpacity
            key={color}
            className={`w-24 h-24 m-2 rounded-lg border-2 ${selected === color ? "border-black" : "border-transparent"}`}
            style={{ backgroundColor: color }}
            onPress={() => onColorSelect(color)}
          />
        ))}
      </View>
    </View>
  );
}
