// src/components/BackButton.jsx
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5'; // You can use any icon lib

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="fixed top-4 left-4 z-50 flex items-center text-gray-700 hover:text-black hover:scale-105 transition-all bg-white/70 backdrop-blur-sm rounded-full p-2 shadow-md"
    >
      <IoArrowBack size={20} />
    </button>
  );
}
