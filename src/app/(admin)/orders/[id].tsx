import OrderCard from "@/components/OrderCard";
import OrderedProductCard from "@/components/OrderedProductCard";
import Colors from "@/constants/Colors";
import { OrderStatusList } from "@/types";
import orders from "@assets/data/orders";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
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
        ListFooterComponent={
          <>
            <Text style={{ fontWeight: "bold" }}>Status</Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              {OrderStatusList.map((status) => (
                <Pressable
                  key={status}
                  onPress={() => console.warn("Update status")}
                  style={{
                    borderColor: Colors.light.tint,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                    marginVertical: 10,
                    backgroundColor:
                      order.status === status
                        ? Colors.light.tint
                        : "transparent",
                  }}
                >
                  <Text
                    style={{
                      color:
                        order.status === status ? "white" : Colors.light.tint,
                    }}
                  >
                    {status}
                  </Text>
                </Pressable>
              ))}
            </View>
          </>
        }
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
