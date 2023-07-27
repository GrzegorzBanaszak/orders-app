import OrderDisplay from "@/components/OrderDisplay";
import { Good } from "@/types/GoodType";
import { Order } from "@/types/OrderType";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

async function getData(): Promise<Order[]> {
  const res = await fetch("http://192.168.1.104:3000/api/orders");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const data = await getData();
  return (
    <>
      <section className="bg-sky-800 text-white">
        <div className="grid grid-cols-4 font-bold w-3/4 mx-auto py-1">
          <div className="text-center">Data</div>
          <div className="text-center">Zamawiający</div>
          <div className="text-center">Status</div>
          <div className="text-center">Towary</div>
        </div>
      </section>
      <div className="w-3/4 mx-auto">
        {data.map((item) => (
          <OrderDisplay order={item} />
        ))}
      </div>
    </>
  );
}
