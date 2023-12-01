import React, { useEffect, useState } from "react";
import StockRecommentTable from "../../components/Admin/StockRecommentTable";
import IntradayRecommentTable from "../../components/Admin/IntradayRecommentTable";
import axios from "axios";
import { baseUrl } from "../../Api";

const RecommendationModel = ({ show, onClose, page }) => {
  const [data, setData] = useState([]);

  const fetchAllStockData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/recommend/stock`);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  useEffect(() => {
    fetchAllStockData();
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 ${show ? "block" : "hidden"
        }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="mx-10 bg-white w-full 6 p-4 rounded-lg shadow-md">
          <div className="flex flex-row justify-between items-center mb-4">
            <button
              onClick={onClose}
              className="text-blue-500 hover:text-blue-700 rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          {page === "Stock" ? (
            <StockRecommentTable data={data} setData={setData} />
          ) : (
            <IntradayRecommentTable />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendationModel;
