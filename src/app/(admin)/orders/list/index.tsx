import OrderCard from "@/components/OrderCard";
import orders from "@assets/data/orders";
import { View, FlatList } from "react-native";

const OrdersPage = () => {
  return (
    <View>
      
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderCard order={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </View>
  );
};
export default OrdersPage;
