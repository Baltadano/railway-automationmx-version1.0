/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: { 
       keyframes: {
        'border-rotate': {
          '0%': { '--border-angle': '0deg' },
          '100%': { '--border-angle': '360deg' },
        },
        sweep: {
          '0%': { left: '-75%' },
          '100%': { left: '120%' },
        },
         borderSweep: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }

      },
      animation: {
        sweep: 'sweep 2s linear infinite',
        'border-rotate': 'border-rotate 4s linear infinite',
         borderSweep: 'borderSweep 3s linear infinite',
      }


    },
  },
  plugins: [],

}


