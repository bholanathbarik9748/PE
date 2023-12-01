import React, { useState } from "react";
import HeroImg from "../../image/FinanceLeaders.png";
import ReccommentationModel from '../Admin/ReccommentationModel'

const Hero = () => {
    const [page, setPage] = useState("");
    const [showStocksModal, setShowStocksModal] = useState(false);

    const closeStocksModal = () => {
        setShowStocksModal(false);
    };

    const openStocksModal = (data) => {
        setPage(data);
        setShowStocksModal(true);
    };

    return (
        <section className="text-gray-600 px-5 py-16 body-font">
            <div className="container mx-auto flex md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1
                        style={{ fontFamily: "'Amiri Quran', serif" }}
                        className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
                    >
                        Unlock Your Financial Potential
                        <br className="hidden lg:inline-block" />
                        with plutus Emporia
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Our dedicated team of experts provides personalized financial advice
                        and strategic stock recommendations, empowering you to make informed
                        investment decisions. Whether you're a seasoned investor or just
                        starting, trust Plutus Emporia to help you navigate the markets and
                        achieve your financial goals.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={() => openStocksModal("Stock")}
                            className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            Stock Recommendations
                        </button>
                        <button
                            onClick={() => openStocksModal("Intrady")}
                            className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Intraday Recommendations
                        </button>
                    </div>
                </div>
                <div
                    className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center"
                        alt="hero"
                        src={HeroImg}
                    />
                </div>
                <ReccommentationModel
                    show={showStocksModal}
                    onClose={closeStocksModal}
                    page={page}
                />
            </div>

        </section>
    );
};

export default Hero;
