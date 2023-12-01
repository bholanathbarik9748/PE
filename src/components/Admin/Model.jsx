import React from "react";
import StocksForm from "./stocksForm";
import { Toaster } from "react-hot-toast";
import IntradayForm from "./IntradayForm";

const StocksModal = ({ show, onClose, Topic, stockName, sector, targetPrice, stockLink, isUpdate }) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 ${show ? "block" : "hidden"
        }`}
    >
      <Toaster />
      <div className="flex items-center justify-center min-h-screen">
        <div className="mx-56 bg-white w-full p-4 rounded">
          <div className="flex flex-row justify-between">
            <h2 className="text-lg text-center font-semibold mb-4">{Topic}</h2>
            <button onClick={onClose} className="text-blue-500">
              X
            </button>
          </div>
          {Topic === "Stocks" ?
            <StocksForm stockName={stockName} sector={sector} targetPrice={targetPrice} stockLink={stockLink} isUpdate={isUpdate} />
            :
            <IntradayForm />
          }
        </div>
      </div>
    </div>
  );
};

export default StocksModal;
