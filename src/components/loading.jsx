import React from 'react';
import { useEffect } from 'react';

const GeometricLoader = () => {

    useEffect(() => {
        // 1. Prevent scrolling
        document.body.style.overflow = 'hidden';

        // 2. Force scroll to top (so you don't start in the middle)
        window.scrollTo(0, 0);

        // 3. Cleanup: Re-enable scrolling when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);


    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white">
            <style>
                {`
          @keyframes spin-reverse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: scale(1.3); opacity: 0; }
          }
        `}
            </style>

            {/* Background Grid - creates a tech floor effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]"></div>

            {/* The Loader Container */}
            <div className="relative flex items-center justify-center mb-10">

                {/* Outer Ring - Dashed */}
                <div className="absolute w-40 h-40 border border-dashed border-gray-600 rounded-full animate-[spin_10s_linear_infinite]"></div>

                {/* Middle Ring - Blue Glow */}
                <div className="absolute w-32 h-32 border-t-2 border-b-2 border-blue-500 rounded-full animate-[spin-reverse_3s_linear_infinite] shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

                {/* Inner Ring - White */}
                <div className="absolute w-24 h-24 border-r-4 border-l-1 border-white/80 rounded-full animate-[spin_1.5s_ease-in-out_infinite]"></div>

                {/* Core Morphing Shape */}
                <div className="w-8 h-8 bg-white" style={{ animation: 'morph 2s ease-in-out infinite' }}></div>
            </div>

            {/* Glitchy Text */}
            <div className="relative z-10">
                <p className="text-center text-xs text-gray-500 mt-2 font-mono">
                    <br /><br />
                    ESTABLISHING SECURE CONNECTION...
                </p>
            </div>

            {/* Morph Animation Keyframes (Hidden in style tag) */}
            <style>{`
                @keyframes morph {
                    0% { transform: rotate(0deg) scale(1); border-radius: 0%; }
                    50% { transform: rotate(180deg) scale(0.5); border-radius: 50%; background: #3b82f6; }
                    100% { transform: rotate(360deg) scale(1); border-radius: 0%; }
                }
            `}</style>
        </div>
    );
};

export default GeometricLoader;