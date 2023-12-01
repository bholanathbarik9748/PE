import React, { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IntradayModalProps from "./intradyModel";
import { formatDate } from "../../helper/Admin/helper";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "../../Api";
import { Link } from "react-router-dom";

const IntradayRecommendTable = () => {
  const token = localStorage.getItem("authToken");
  const email = localStorage.getItem("userData");
  const [showStocksModal, setShowStocksModal] = useState(false);
  const [selectData, setSelectData] = useState(null);
  const [data, setData] = useState([]);

  const fetchIntradayData = async () => {
    const responses = await axios.get(`${baseUrl}/recommend/intraday`);
    setData(responses.data.data);
  };

  const openStocksModal = (data) => {
    setSelectData(data);
    setShowStocksModal(true);
  };

  const deleteIntraday = async (stockId) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this intraday?"
    );

    if (userConfirmed) {
      try {
        await axios.patch(
          `${baseUrl}/recommend/intraday/delete/${stockId}`
        );
        fetchIntradayData();
        toast.success("Intraday deleted successfully");
      } catch (error) {
        console.error("Error deleting intraday:", error);
        toast.error("Failed to delete intraday");
      }
    } else {
      console.log("Deletion cancelled by the user");
    }
  };

  const closeStocksModal = () => {
    setShowStocksModal(false);
  };

  useEffect(() => {
    fetchIntradayData();
  }, []);

  return (
    <div className="mx-8 my-4 mt-14 overflow-x-auto">
      <h1 className="text-center mb-4">Intraday Recommendation Table</h1>
      <Toaster />
      <div className="max-h-[500px] overflow-y-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
          <thead className="bg-gradient-to-r from-gray-800 to-gray-700 text-white">
            <tr>
              <th className="py-3 px-4 font-semibold text-center border-b border-gray-500">
                # Sl no
              </th>
              <th className="py-3 px-4 font-semibold text-center border-b border-gray-500">
                Nifty50
              </th>
              <th className="py-3 px-4 font-semibold text-center border-b border-gray-500">
                Bank Nifty
              </th>
              <th className="py-3 px-4 font-semibold text-center border-b border-gray-500">
                Finnifty
              </th>
              <th className="py-3 px-4 font-semibold text-center border-b border-gray-500">
                Stock Futures
              </th>
              <th className="py-3 px-4 font-semibold text-center border-b border-gray-500">
                Upload Date and Time
              </th>
              {token && email && (
                <th className="py-3 px-4 font-semibold text-left border-b border-gray-500">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.length < 1 ? (
              <tr>
                <td colSpan={7} className="text-center mt-3">
                  No Data Found
                </td>
              </tr>
            ) : (
              data.map((ele, ind) => (
                <tr key={ind} className={ind % 2 === 0 ? "bg-gray-100" : ""}>
                  <td className="py-2 px-4 text-center border border-gray-300">
                    {ind + 1}
                  </td>
                  <td
                    className="py-2 px-4 text-center border border-gray-300"
                    onClick={() => openStocksModal(ele.nifty50[0])}
                  >
                    <Link className="text-blue-500 hover:underline cursor-pointer">
                      View
                    </Link>
                  </td>
                  <td
                    className="py-2 px-4 text-center border border-gray-300"
                    onClick={() => openStocksModal(ele.bankNifty[0])}
                  >
                    <Link className="text-blue-500 hover:underline cursor-pointer">
                      View
                    </Link>
                  </td>
                  <td
                    className="py-2 px-4 text-center border border-gray-300"
                    onClick={() => openStocksModal(ele.FINNIFTY[0])}
                  >
                    <Link className="text-blue-500 hover:underline cursor-pointer">
                      View
                    </Link>
                  </td>
                  <td
                    className="py-2 px-4 text-center border border-gray-300"
                    onClick={() => openStocksModal(ele.StockFuture[0])}
                  >
                    <Link className="text-blue-500 hover:underline cursor-pointer">
                      View
                    </Link>
                  </td>
                  <td className="py-2 px-4 text-center border border-gray-300">
                    <Link className="text-black">{formatDate(ele.updatedAt)}</Link>
                  </td>
                  {email && token && (
                    <td className="py-4 px-6 flex items-center space-x-2 border">
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => deleteIntraday(ele._id)}
                        className="cursor-pointer text-red-500 hover:text-red-700 transition duration-300"
                      />
                    </td>
                  )}

                  {selectData && (
                    <IntradayModalProps
                      show={showStocksModal}
                      onClose={closeStocksModal}
                      breakout={selectData.breakout}
                      support={selectData.support}
                      resistance={selectData.resistance}
                      target={selectData.target}
                      stopLoss={selectData.stoploss}
                      stockName={selectData.stockName || ""}
                    />
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IntradayRecommendTable;
