import { useState } from "react";
import { Order } from "../../types/Order";
import OrderModal from "../OrderModal";
import { OrdersContainer, Board } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

const OrdersBoard = ({ icon, title, orders }: OrdersBoardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  const handleOpenModal = (order: Order) => {
    setIsModalVisible(true);
    setSelectedOrder(order);
  };

  return (
    <>
      <Board>
        <OrderModal visible={isModalVisible} order={selectedOrder} />

        <header>
          <span>{icon}</span>
          <strong>{title}</strong>
          <span>({orders.length})</span>
        </header>

        {orders.length > 0 && (
          <OrdersContainer>
            {orders.map((order) => (
              <button
                type="button"
                key={order._id}
                onClick={() => handleOpenModal(order)}
              >
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            ))}
          </OrdersContainer>
        )}
      </Board>
    </>
  );
};

export default OrdersBoard;
