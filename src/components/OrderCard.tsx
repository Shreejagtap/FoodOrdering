import { Order } from "@/types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link, useSegments } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";

dayjs.extend(relativeTime);

type OrderCardProps = {
  order: Order;
};

const OrderCard = ({ order }: OrderCardProps) => {
  const d = new Date();
  //   const subtractedDate = 1;

  const segments = useSegments();

  return (
    <Link
      href={`/${segments[0]}/orders/${order.id}`}
      asChild={true}
    >
      <Pressable style={styles.cardContainer}>
        <View style={styles.sectionOne}>
          <Text style={styles.idText}>Order #{order.id}</Text>
          <Text style={styles.timeText}>
            {dayjs(order.created_at).fromNow()}
          </Text>
        </View>

        <Text style={styles.orderStatusText}>{order.status}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "gainsboro",
  },
  sectionOne: { gap: 2 },
  idText: {
    fontWeight: "bold",
  },
  timeText: {
    color: "gray",
  },
  orderStatusText: {
    color: "#242424",
    fontWeight: "bold",
  },
});

export default OrderCard;
