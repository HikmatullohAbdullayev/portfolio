/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: { max: '360px' },
      // => @media (max-width: 360px) { ... }

      mobile420: { max: '420px' },
      // => @media (max-width: 420px) { ... }

      mobile500: { max: '500px' },
      // => @media (max-width: 500px) { ... }

      mobile530: { max: '530px' },
      // => @media (max-width: 530px) { ... }

      mobil640: { max: '640px' },
      // => @media (max-width: 640px) { ... }

      mobil670: { max: '670px' },
      // => @media (max-width: 670px) { ... }

      mobil675: { max: '675px' },
      // => @media (max-width: 670px) { ... }

      mobile768: { max: '768px' },
      // => @media (max-width: 768px) { ... }

      table845: { max: '845px' },
      // => @media (max-width: 845px) { ... }

      table1005: { max: '1005px' },
      // => @media (max-width: 1005px) { ... }

      table: { max: '1024px' },
      // => @media (max-width: 1024px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
