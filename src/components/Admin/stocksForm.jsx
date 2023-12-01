import { baseUrl } from "../../Api";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const StocksForm = ({
  stockName,
  sector,
  targetPrice,
  stockLink,
  isUpdate,
}) => {
  const [stockNameInput, setStockName] = useState(stockName);
  const [sectorInput, setSector] = useState(sector);
  const [targetPriceInput, setTargetPrice] = useState(targetPrice);
  const [stockLinkInput, setStockLink] = useState(stockLink);
  const [isLoader, setIsLoader] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoader(true);

    let data = {
      stockName: stockNameInput,
      sector: sectorInput,
      targetPrice: targetPriceInput,
      stockLink: stockLinkInput,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/recommend/stock/create`,
        data
      );

      if (response.data.status) {
        setTimeout(() => {
          setIsLoader(false);
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form");
      setIsLoader(false);
    }
  };

  return (
    <>
      <Toaster />
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Stocks name
          </label>
          <input
            type="name"
            id="name"
            value={stockNameInput}
            onChange={(e) => setStockName(e.target.value)}
            className="bg-gray-50 border border-gray-300 placeholder:text-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Tata,Amazon..."
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="section"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Stocks Sector
          </label>
          <input
            type="section"
            id="section"
            value={sectorInput}
            onChange={(e) => setSector(e.target.value)}
            className="bg-gray-50 border border-gray-300 placeholder:text-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Finance,Health...."
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="target_price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Target Price
          </label>
          <input
            type="targetPrice"
            id="targetPrice"
            value={targetPriceInput}
            onChange={(e) => setTargetPrice(e.target.value)}
            className="bg-gray-50 border border-gray-300 placeholder:text-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="1234.."
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="target_price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Link...
          </label>
          <input
            type="link"
            id="link"
            value={stockLinkInput}
            onChange={(e) => setStockLink(e.target.value)}
            className="bg-gray-50 border border-gray-300 placeholder:text-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="1234.."
            required
          />
        </div>
        <button
          type="submit"
          onClick={submitHandler}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {isLoader ? "Loading..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default StocksForm;
