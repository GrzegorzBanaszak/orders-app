"use client";
import { Good, GoodType } from "@/types/GoodType";
import React, { useState } from "react";

const AddOrder = () => {
  const [commoditis, setCommodities] = useState<Array<GoodType>>([]);
  const [commodity, setCommodity] = useState<GoodType>(new Good("", "", 0, ""));

  const addToCommoditis = () => {
    if (
      commodity.name != "" &&
      commodity.price != "" &&
      commodity.quantity != 0
    ) {
      setCommodities((prev) => [...prev, commodity]);
      setCommodity(new Good("", "", 0, ""));
    }
  };
  return (
    <form className="my-3 bg-white">
      <div className="flex justify-around py-3">
        <label htmlFor="customer">
          <input
            className="text-center p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Zamawiający..."
          />
        </label>
        <label htmlFor="date">
          <input
            className="text-center p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="23-03-2022"
          />
        </label>
      </div>
      <div className="p-4">
        <div className="flex justify-evenly">
          <div>
            <h5 className="text-center pb-2">Nazwa</h5>
            <textarea
              className="text-center p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Podaj nazwę"
              value={commodity.name}
              onChange={(e) =>
                setCommodity((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div>
            <h5 className="text-center pb-2">Ilość</h5>
            <textarea
              className="text-center p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Podaj ilośc"
              value={commodity.quantity}
              onChange={(e) =>
                setCommodity((prev) => ({
                  ...prev,
                  quantity: Number(e.target.value),
                }))
              }
            />
          </div>
          <div>
            <h5 className="text-center pb-2">Cena</h5>
            <textarea
              className="text-center p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Podaj cenę"
              value={commodity.price}
              onChange={(e) =>
                setCommodity((prev) => ({ ...prev, price: e.target.value }))
              }
            />
          </div>
          <div>
            <h5 className="text-center pb-2">Opis</h5>
            <textarea
              className="text-center p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Podaj opis"
              value={commodity.description}
              onChange={(e) =>
                setCommodity((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex items-center">
            <span
              onClick={addToCommoditis}
              className="p-3 bg-green-800 text-white "
            >
              +
            </span>
          </div>
        </div>
        <h3 className="text-center py-4 text-2xl">Lista towarów</h3>
        <ul className="flex justify-evenly">
          {commoditis.length > 0 &&
            commoditis.map((item, index) => (
              <li key={index} className="flex justify-evenly w-full">
                <div>{item.name}</div>
                <div>{item.quantity}</div>
                <div>{item.price}</div>
                <div>{item.description}</div>
              </li>
            ))}
        </ul>
      </div>
    </form>
  );
};

export default AddOrder;
