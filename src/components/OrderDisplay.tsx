"use client";
import { Order } from "@/types/OrderType";
import React, { useState } from "react";

interface OrderDisplayProps {
  order: Order;
}

const OrderDisplay: React.FC<OrderDisplayProps> = ({ order }) => {
  const [showGoods, setShowGoods] = useState<boolean>(false);
  return (
    <article className="bg-white p-2 border-b-2">
      <div className="grid grid-cols-4 font-bold">
        <div className="text-center">{order.orderDate}</div>
        <div className="text-center">{order.customer}</div>
        <div className="text-center">{order.status}</div>
        <div className="text-center">
          <span
            className="cursor-pointer select-none"
            onClick={() => setShowGoods((prev) => !prev)}
          >
            {showGoods ? "▲" : "▼"}
          </span>
        </div>
      </div>
      {showGoods && (
        <div className="flex flex-col gap-2 mt-3">
          <div className="w-full grid grid-cols-4">
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
      )}
    </article>
  );
};

export default OrderDisplay;
