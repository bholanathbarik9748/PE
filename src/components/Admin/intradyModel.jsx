import React from "react";
import { Toaster } from "react-hot-toast";

const StocksModal = ({ show, onClose, breakout, support, resistance, target, stopLoss, stockName }) => {
    return (
        <div className={`fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 ${show ? 'block' : 'hidden'}`}>
            <Toaster />
            <div className="flex items-center justify-center min-h-screen">
                <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 bg-white w-full sm:w-96 p-4 rounded-lg shadow-md">
                    <div className="flex flex-row justify-between items-center mb-4">
                        <h2 className="text-lg text-center font-semibold">Intraday Recomputation</h2>
                        <button onClick={onClose} className="text-blue-500 hover:text-blue-700 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        {stockName && <h1 className="font-bold text-xl mb-2">Stock Name: {stockName}</h1>}
                        <h1 className="font-bold text-xl mb-2">Breakout: {breakout}</h1>
                        <h1 className="font-bold text-xl mb-2">Support: {support}</h1>
                        <h1 className="font-bold text-xl mb-2">Resistance: {resistance}</h1>
                        <h1 className="font-bold text-xl mb-2">Target: {target}</h1>
                        <h1 className="font-bold text-xl mb-2">Stop Loss: {stopLoss}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StocksModal;
