import Button from "@/components/Button";
import CartListItem from "@/components/CartListItem";
import { useCart } from "@/providers/CartProvider";
import { View, Text, FlatList } from "react-native";

const CartScreen = () => {
  const { items, total } = useCart();

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
        Total: ${total.toString()}
      </Text>
      <Button text="Checkout" />
    </View>
  );
};
export default CartScreen;
