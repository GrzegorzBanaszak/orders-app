import OrderDisplay from "@/components/OrderDisplay";
import { Good } from "@/types/GoodType";
import { Order } from "@/types/OrderType";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-5 flex flex-col">
      <OrderDisplay
        order={
          new Order("21-02-2023", "Brak", "Przyjęte", [
            new Good("łożysko", "32", 2, "Brak"),
          ])
        }
      />
    </div>
  );
}
