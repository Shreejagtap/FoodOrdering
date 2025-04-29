import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.light.background,
    borderRadius: 10,
    margin: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },

  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    aspectRatio: 1,
    objectFit: "contain",
  },
});

export default ProductListItem;
