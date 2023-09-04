import OrderDisplay from "@/components/OrderDisplay";

export default async function Home() {
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
      {/* <div className="w-3/4 mx-auto">
        {data.map((item, index) => (
          <OrderDisplay key={index} order={item} />
        ))}
      </div> */}
    </>
  );
}
