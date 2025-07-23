import React, { useState } from 'react';
import axios from 'axios';
import qrcode from '../assets/image/qr-code.jpeg';
import BackButton from './BackButton';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Donation = () => {
  const [project, setProject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/donation`, {
        project,
        message,
      });

      if (res.status === 200) {
        setStatus('Message sent successfully!');
        setProject('');
        setMessage('');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 sm:px-6 py-10 flex flex-col items-center">
      <BackButton />
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Support Our Projects 💝
      </h1>

      <div className="bg-[#1e293b] p-4 sm:p-6 rounded-2xl shadow-2xl w-full max-w-5xl transition-transform hover:scale-105 duration-300">
        <p className="text-base sm:text-lg mb-6 text-gray-300 text-center sm:text-left">
          Every donation counts 🫶. You can help us bring powerful, meaningful tech projects to life. Choose a project
          below and scan the QR code to contribute.
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* QR Code Section */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <img
              src={qrcode}
              alt="Donate QR Code"
              className="w-52 h-52 sm:w-60 sm:h-60 rounded-lg border-4 border-pink-500 object-contain"
            />

            <p className="mt-2 text-sm text-gray-400 text-center">
              Scan this QR or copy UPI ID to donate
            </p>

            {/* UPI ID Display */}
            <p className="mt-1 text-pink-400 font-semibold text-sm sm:text-base text-center">
              UPI ID: <span className="underline">9336192546@pthdfc</span>
            </p>

            {/* UPI Intent Links */}
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-400 mb-1">Or tap to pay directly:</p>
              <a
                href="upi://pay?pa=9336192546@pthdfc&pn=Pushpey%20Dynamics&cu=INR"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-2 rounded-lg transition-colors"
              >
                Pay via GPay / Paytm / PhonePe
              </a>
            </div>
          </div>

          {/* Project Selection + Form */}
          <form onSubmit={handleSubmit} className="w-full md:w-1/2">
            <label className="block text-md font-semibold mb-2">
              Select a project to support:
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg bg-[#0f1a2c] text-white border border-gray-600 mb-4"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              required
            >
              <option value="">-- Select Project --</option>
              <option value="tatva">📒 Project TATVA (Smart Notebook)</option>
              <option value="bookcollector">📚 BookCollector (Smart Book Opener)</option>
              <option value="light">💡 Smart Light System</option>
              <option value="keyholder">🔑 Smart Key Holder</option>
              <option value="bagtag">🎒 Smart Bag Tag</option>
              <option value="packaging">📦 Reusable Packaging System</option>
            </select>

            <label className="block text-md font-semibold mb-2">
              Your message (optional):
            </label>
            <textarea
              placeholder="Any message you'd like to share..."
              className="w-full px-4 py-3 rounded-lg bg-[#0f1a2c] text-white border border-gray-600 mb-4 resize-none"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 transition-colors px-4 py-2 rounded-lg font-semibold"
            >
              Send Message
            </button>

            {status && <p className="mt-2 text-sm text-green-400">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donation;
