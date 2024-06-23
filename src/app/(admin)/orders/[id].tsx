import OrderCard from "@/components/OrderCard";
import OrderedProductCard from "@/components/OrderedProductCard";
import orders from "@assets/data/orders";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, FlatList, StyleSheet } from "react-native";
const OrderDetails = () => {
  const { id } = useLocalSearchParams();
  const order = orders.find((p) => p.id.toString() === id);

  if (!order) {
    return <Text>Invalid Order</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `Order #${order.id}`,
          headerTitleAlign: "center",
        }}
      />

      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderedProductCard orderProduct={item} />}
        contentContainerStyle={{ gap: 10 }}
        ListHeaderComponent={<OrderCard order={order} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    gap: 10,
  },
});

export default OrderDetails;
