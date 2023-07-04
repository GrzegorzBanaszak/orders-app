"use client";
import { Good, GoodType } from "@/types/GoodType";
import moment from "moment";
import React, { useState } from "react";

const AddOrder = () => {
  const [commoditis, setCommodities] = useState<Array<GoodType>>([]);
  const [commodity, setCommodity] = useState<GoodType>(new Good("", "", 0, ""));
  const [formDate, setFormDate] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");

  const validForm = (): boolean => {
    if (commoditis.length > 0) {
      const reg = new RegExp(
        /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
      );

      if (!reg.test(formDate)) {
        const currentDate = moment().format("DD-MM-yyyy");
        setFormDate(currentDate);
      }

      return true;
    } else {
      return false;
    }
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validForm();
  };

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
    <form className="my-3 bg-white" onSubmit={submitForm}>
      <div className="flex justify-around py-3">
        <label htmlFor="customer">
          <input
            className="text-center p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Zamawiający..."
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </label>
        <label htmlFor="date">
          <input
            className="text-center p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="23-03-2022"
            value={formDate}
            onChange={(e) => setFormDate(e.target.value)}
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
              className="py-2 px-3 bg-green-800 text-white mb-5 rounded-md self-end"
            >
              +
            </span>
          </div>
        </div>
        <h3 className="text-center py-4 text-2xl">Lista towarów</h3>
        <ul>
          {commoditis.length > 0 &&
            commoditis.map((item, index) => (
              <li
                key={index}
                className="text-center grid grid-cols-5 w-full mb-3 p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              >
                <div>{item.name}</div>
                <div>{item.quantity}</div>
                <div>{item.price}</div>
                <div>{item.description}</div>
                <div className="bg-red-500 text-white font-bold rounded-md">
                  -
                </div>
              </li>
            ))}
        </ul>
        <div className="flex justify-center">
          <button
            type="submit"
            className="my-2 px-4 py-2 bg-slate-700 text-white"
          >
            Zapisz
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddOrder;
