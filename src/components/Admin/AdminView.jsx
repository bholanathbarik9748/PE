import React, { useEffect, useState } from "react";
import StocksModal from "./Model";
import StockRecommentTable from "./StockRecommentTable";
import IntradayRecommentTable from "./IntradayRecommentTable";
import { baseUrl } from "../../Api";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const AdminView = () => {
  const [showStocksModal, setShowStocksModal] = useState(false);
  const [Heading, setHeading] = useState("");
  const [data, setData] = useState([]);

  const FetchAllStockData = async () => {
    const responses = await axios.get(`${baseUrl}/recommend/stock`);
    setData(responses.data.data);
  };

  const openStocksModal = (Topic) => {
    setHeading(Topic);
    setShowStocksModal(true);
  };

  const closeStocksModal = () => {
    setShowStocksModal(false);
  };

  useEffect(() => {
    FetchAllStockData();
  }, []);

  return (
    <>
      <Toaster />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              Welcome Admin <b>{localStorage.getItem("userData")}</b>
            </h1>
            <button
              onClick={() => openStocksModal("Stocks")}
              className="flex-shrink-0 mr-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
            >
              Add stocks
            </button>
            <button
              onClick={() => openStocksModal("Intraday")}
              className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
            >
              Add Intraday
            </button>
          </div>
        </div>
        <StocksModal
          show={showStocksModal}
          onClose={closeStocksModal}
          Topic={Heading}
          stockName=""
          sector=""
          targetPrice=""
          stockLink=""
          isUpdate={true}
        />
      </section>
      <StockRecommentTable data={data} setData={setData} />
      <IntradayRecommentTable />
    </>
  );
};

export default AdminView;
