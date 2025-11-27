/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                morph: {
                    '0%': { borderRadius: '0%', transform: 'rotate(0deg)' },
                    '50%': { borderRadius: '50%', transform: 'rotate(180deg) scale(1.2)' },
                    '100%': { borderRadius: '0%', transform: 'rotate(360deg)' },
                }
            },
            animation: {
                morph: 'morph 2s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}