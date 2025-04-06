import { DefaultTheme } from "@react-navigation/native";
import { useGlobalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const { bg } = useGlobalSearchParams<{ bg?: string }>();
  const [selectedColor, setSelectedColor] = useState<string>(
    DefaultTheme.colors.background,
  );
  const router = useRouter();

  useEffect(() => {
    if (bg) {
      setSelectedColor(bg);
    }
  }, [bg]);

  return (
    <View
      style={{ backgroundColor: selectedColor }}
      className="flex-1 justify-center items-center"
    >
      <Text className="text-5xl text-dark-200">Native Movies Yeay!</Text>
      <Button
        title="Go to Standalone"
        onPress={() => router.push("/standalone")}
      />
    </View>
  );
}
