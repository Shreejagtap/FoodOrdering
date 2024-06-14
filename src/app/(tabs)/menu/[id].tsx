import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
const ProductDetailPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: `Details: ` + id }} />
      <Text>ProductPage id :{id}</Text>
    </View>
  );
};
export default ProductDetailPage;
