import { baseUrl } from '../../Api';
import axios from 'axios';
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const IntradayForm = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [formData, setFormData] = useState({
    nifty50: { breakout: '', support: '', resistance: '', target: '', stoploss: '' },
    bankNifty: { breakout: '', support: '', resistance: '', target: '', stoploss: '' },
    FINNIFTY: { breakout: '', support: '', resistance: '', target: '', stoploss: '' },
    StockFuture: { breakout: '', support: '', resistance: '', target: '', stoploss: '', stockName: '' },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoader(true);

    try {
      const response = await axios.post(`${baseUrl}/recommend/intraday/create`, formData);
      if (response.data.status) {
        setTimeout(() => {
          setIsLoader(false);
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit");
    }
  };

  const handleChange = (
    category,
    field,
    value
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [category]: {
        ...prevFormData[category],
        [field]: value,
      },
    }));
  };

  return (
    <>
      <Toaster />
      <form className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="nifty50" className="block text-gray-700 text-sm font-bold mb-2 mt-2">
            Nifty50
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              id="breakout"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Breakout"
              value={formData.nifty50.breakout}
              onChange={(e) => handleChange('nifty50', 'breakout', e.target.value)}
              required
            />
            <input
              type="text"
              id="support"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Support"
              value={formData.nifty50.support}
              onChange={(e) => handleChange('nifty50', 'support', e.target.value)}
              required
            />
            <input
              type="text"
              id="resistance"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Resistance"
              value={formData.nifty50.resistance}
              onChange={(e) => handleChange('nifty50', 'resistance', e.target.value)}
              required
            />
            <input
              type="text"
              id="target"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Target"
              value={formData.nifty50.target}
              onChange={(e) => handleChange('nifty50', 'target', e.target.value)}
              required
            />
            <input
              type="text"
              id="stoploss"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Stop Loss"
              value={formData.nifty50.stoploss}
              onChange={(e) => handleChange('nifty50', 'stoploss', e.target.value)}
              required
            />
          </div>
          <label htmlFor="nifty50" className="block text-gray-700 text-sm font-bold mb-2 mt-2">
            bankNifty
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              id="breakout"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Breakout"
              value={formData.bankNifty.breakout}
              onChange={(e) => handleChange('bankNifty', 'breakout', e.target.value)}
              required
            />
            <input
              type="text"
              id="support"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Support"
              value={formData.bankNifty.support}
              onChange={(e) => handleChange('bankNifty', 'support', e.target.value)}
              required
            />
            <input
              type="text"
              id="resistance"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Resistance"
              value={formData.bankNifty.resistance}
              onChange={(e) => handleChange('bankNifty', 'resistance', e.target.value)}
              required
            />
            <input
              type="text"
              id="target"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Target"
              value={formData.bankNifty.target}
              onChange={(e) => handleChange('bankNifty', 'target', e.target.value)}
              required
            />
            <input
              type="text"
              id="stoploss"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Stop Loss"
              value={formData.bankNifty.stoploss}
              onChange={(e) => handleChange('bankNifty', 'stoploss', e.target.value)}
              required
            />
          </div>
          <label htmlFor="nifty50" className="block text-gray-700 text-sm font-bold mb-2 mt-2">
            FINNIFTY
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              id="breakout"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Breakout"
              value={formData.FINNIFTY.breakout}
              onChange={(e) => handleChange('FINNIFTY', 'breakout', e.target.value)}
              required
            />
            <input
              type="text"
              id="support"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Support"
              value={formData.FINNIFTY.support}
              onChange={(e) => handleChange('FINNIFTY', 'support', e.target.value)}
              required
            />
            <input
              type="text"
              id="resistance"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Resistance"
              value={formData.FINNIFTY.resistance}
              onChange={(e) => handleChange('FINNIFTY', 'resistance', e.target.value)}
              required
            />
            <input
              type="text"
              id="target"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Target"
              value={formData.FINNIFTY.target}
              onChange={(e) => handleChange('FINNIFTY', 'target', e.target.value)}
              required
            />
            <input
              type="text"
              id="stoploss"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Stop Loss"
              value={formData.FINNIFTY.stoploss}
              onChange={(e) => handleChange('FINNIFTY', 'stoploss', e.target.value)}
              required
            />
          </div>
          <label htmlFor="nifty50" className="block text-gray-700 text-sm font-bold mb-2 mt-2">
            StockFuture
          </label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              id="breakout"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Breakout"
              value={formData.StockFuture.breakout}
              onChange={(e) => handleChange('StockFuture', 'breakout', e.target.value)}
              required
            />
            <input
              type="text"
              id="support"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Support"
              value={formData.StockFuture.support}
              onChange={(e) => handleChange('StockFuture', 'support', e.target.value)}
              required
            />
            <input
              type="text"
              id="resistance"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Resistance"
              value={formData.StockFuture.resistance}
              onChange={(e) => handleChange('StockFuture', 'resistance', e.target.value)}
              required
            />
            <input
              type="text"
              id="target"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Target"
              value={formData.StockFuture.target}
              onChange={(e) => handleChange('StockFuture', 'target', e.target.value)}
              required
            />
            <input
              type="text"
              id="stoploss"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Stop Loss"
              value={formData.StockFuture.stoploss}
              onChange={(e) => handleChange('StockFuture', 'stoploss', e.target.value)}
              required
            />
            <input
              type="text"
              id="stoploss"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="stock Name"
              value={formData.StockFuture.stockName}
              onChange={(e) => handleChange('StockFuture', 'stockName', e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoader}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isLoader ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </>
  );
};

export default IntradayForm;
