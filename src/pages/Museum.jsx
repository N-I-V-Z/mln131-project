import React from "react";

const Museum = () => {
  const handleStart = () => {
    window.location.reload();
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-[#2c1e0f] via-[#3a2c1a] to-[#1a1a1a] font-serif">
      <div className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl px-12 py-14 border-4 border-yellow-400/80" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-block text-yellow-400 text-4xl">
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-10 h-10'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M3 21h18M4.5 10.5l7.5-7.5 7.5 7.5M4.5 10.5V21m15-10.5V21M9 21v-6h6v6' />
            </svg>
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 drop-shadow-lg tracking-wide text-center font-serif">
            Bảo tàng lịch sử 3D
          </h1>
        </div>
        <p className="text-lg md:text-xl text-white/90 mb-8 text-center font-light max-w-xl">
          Khám phá không gian lịch sử với trải nghiệm 3D sống động, sang trọng và hiện đại.
        </p>
        <button
          onClick={handleStart}
          className="mt-2 px-12 py-4 text-xl font-bold rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 shadow-xl hover:scale-105 hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 border-2 border-yellow-200"
        >
          Tham quan bảo tàng
        </button>
      </div>
    </div>
  );
};

export default Museum;
