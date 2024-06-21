import { OrderItem } from "@/types";
import { View, Text, StyleSheet, Image } from "react-native";
import { defaultPizzaImage } from "./ProductListItem";
import Colors from "@/constants/Colors";

type OrderedProductCardProps = {
  orderProduct: OrderItem;
};

const OrderedProductCard = ({ orderProduct }: OrderedProductCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: orderProduct.products.image || defaultPizzaImage }}
        style={styles.image}
      />
      <View style={styles.productDetailsSection}>
        <Text style={styles.productName}>{orderProduct.products.name}</Text>
        <View style={styles.priceSizeContainer}>
          <Text style={styles.priceText}>${orderProduct.products.price}</Text>
          <Text>Size: {orderProduct.size}</Text>
        </View>
      </View>
      <Text style={styles.quantityText}>{orderProduct.quantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 0.5,
    borderColor: "gainsboro",
  },
  image: {
    width: 70,
    aspectRatio: 1,
  },
  productDetailsSection: {
    flex: 1,
    gap: 2,
  },
  productName: {
    fontWeight: "bold",
  },
  priceSizeContainer: {
    flexDirection: "row",
    gap: 5,
  },
  priceText: {
    fontWeight: "bold",
    color: Colors.light.tint,
  },
  quantityText: {
    fontWeight: "bold",
  },
});

export default OrderedProductCard;
