import { Order } from "../../types/Order";
import { Container } from "../Orders/styles";
import OrdersBoard from "../OrdersBoard";

const orders: Order[] = [
  {
    _id: "6373c2fd33655ffe297da1d4",
    table: "7",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Coca Cola",
          imagePath: "1668474243533-coca-cola.png",
          price: 7,
        },
        quantity: 1,
        _id: "6373c2fd33655ffe297da1d5",
      },
    ],
  },
];

const Oders = () => {
  return (
    <Container>
      <OrdersBoard icon="🕒" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="🧑🏻‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
};

export default Oders;
