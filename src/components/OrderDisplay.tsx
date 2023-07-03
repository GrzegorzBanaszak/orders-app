import { Order } from "@/types/OrderType";
import React, { useState } from "react";

interface OrderDisplayProps {
  order: Order;
}

const OrderDisplay: React.FC<OrderDisplayProps> = ({ order }) => {
  return (
    <article className="bg-white p-2 my-2">
      <div className="flex justify-evenly">
        <div>Data przyjęcia: {order.orderDate}</div>
        <div>Zamawiający: {order.customer}</div>
        <div>Status: {order.status}</div>
      </div>
      <h3 className="my-3 text-center border-b-2 pb-2">Lista towarów</h3>
      <div className="flex flex-col gap-2">
        <div className="w-full grid grid-cols-4 font-bold">
          <div className="text-center">Nazwa</div>
          <div className="text-center">Ilość</div>
          <div className="text-center">Cena</div>
          <div className="text-center">Opis</div>
        </div>
        {order.goods.map((item, index) => (
          <div key={index} className="w-full grid grid-cols-4">
            <div className="text-center">{item.name}</div>
            <div className="text-center">{item.quantity}</div>
            <div className="text-center">{item.price} zł</div>
            <div className="text-center">{item.description}</div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default OrderDisplay;
