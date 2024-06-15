import CartListItem from "@/components/CartListItem";
import { useCart } from "@/providers/CartProvider";
import { View, Text, FlatList } from "react-native";

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
    </View>
  );
};
export default CartScreen;
