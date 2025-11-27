import React from 'react';

const GeometricLoader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1e1e1e] text-white">
            {/* Inline styles for the specific keyframes to keep it in one file */}
            <style>
                {`
          @keyframes morph {
            0%   { border-radius: 0%; transform: rotate(0deg); }
            50%  { border-radius: 50%; transform: rotate(180deg) scale(1.2); }
            100% { border-radius: 0%; transform: rotate(360deg); }
          }
        `}
            </style>
            <div
                className="h-16 w-16 bg-white shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-8"
                style={{ animation: 'morph 2s ease-in-out infinite' }}
            ></div>
            <p className="animate-pulse font-mono text-sm tracking-[0.5em] text-gray-400 uppercase">
                System Initializing
            </p>
        </div>
    );
};

export default GeometricLoader;