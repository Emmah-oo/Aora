import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function Bookmark() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text
        className="text-xs border border-white p-2 rounded-lg"
        onPress={() => alert("Clicked")}
      >
        Tab One
      </Text>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
