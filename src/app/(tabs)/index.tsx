import { ScrollView } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function TabOneScreen() {
  return (
    <ScrollView>
      <ProductListItem product={products[4]} />
      <ProductListItem product={products[1]} />
    </ScrollView>
  );
}
