import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { baseUrl } from "../../Api";
import toast, { Toaster } from "react-hot-toast";
import StocksModal from "./Model";
import { formatDate } from "../../helper/Admin/helper";
import axios from "axios";


const Table = ({ data, setData }) => {
  const [showStocksModal, setShowStocksModal] = useState(false);
  const token = localStorage.getItem("authToken");
  const email = localStorage.getItem("userData");

  const FetchAllStockData = async () => {
    const responses = await axios.get(`${baseUrl}/recommend/stock`);
    setData(responses.data.data);
  };

  const closeStocksModal = () => {
    setShowStocksModal(false);
  };

  const deleteStocks = async (stockId) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this stock?"
    );

    if (userConfirmed) {
      try {
        await axios.patch(`${baseUrl}/recommend/stock/delete/${stockId}`);
        FetchAllStockData();
        toast.success("Stock deleted successfully");
      } catch (error) {
        console.error("Error deleting stock:", error);
        toast.error("Failed to delete stock");
      }
    } else {
    }
  };

  return (
    <div className="mx-8 my-4 overflow-x-auto">
      <h1 className="text-center mb-4">Stock Recommendation Table</h1>
      <Toaster />
      <div className="max-h-[500px] overflow-y-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
          <thead className="bg-gradient-to-r from-gray-800 to-gray-700 text-white">
            <tr>
              <th className="py-3 px-4 font-semibold text-center border-b border-gray-500">
                # Sl no
              </th>
              <th className="py-3 px-4 font-semibold text-center border-b border-gray-500">
                Stock Name
              </th>
              <th className="py-3 px-4 font-semibold text-center border-b border-gray-500">
                Sector
              </th>
              <th className="py-3 px-4 font-semibold text-center border-b border-gray-500">
                Target Price
              </th>
              <th className="py-3 px-4 font-semibold text-center border-b border-gray-500">
                Upload Date and Time
              </th>
              <th className="py-3 px-4 font-semibold text-center border-b border-gray-500">
                Stock Link
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
                  <td className="py-2 px-4 text-center border border-gray-300">
                    {ele.stockName}
                  </td>
                  <td className="py-2 px-4 text-center border border-gray-300">
                    {ele.sector}
                  </td>
                  <td className="py-2 px-4 text-center border border-gray-300">
                    {ele.targetPrice}
                  </td>
                  <td className="py-2 px-4 text-center border border-gray-300">
                    {formatDate(ele.createdAt)}
                  </td>
                  <td className="py-2 px-4 text-center border border-gray-300">
                    <a
                      href={ele.stockLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View
                    </a>
                  </td>
                  {email && token && (
                    <td className="py-4 px-6 flex items-center space-x-2 border">
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => deleteStocks(ele._id)}
                        className="cursor-pointer text-red-500 hover:text-red-700 transition duration-300"
                      />
                    </td>
                  )}

                  <StocksModal
                    show={showStocksModal}
                    onClose={closeStocksModal}
                    stockName={ele.stockName}
                    sector={ele.sector}
                    targetPrice={ele.targetPrice}
                    stockLink={ele.stockLink}
                    isUpdate={true}
                    Topic={""}
                  />
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
