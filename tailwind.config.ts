import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFFCF0',
          100: '#FFF5D1',
          200: '#FFE8A3',
          300: '#FFD970',
          400: '#FFCA3D',
          500: '#FFB80A',
          600: '#E6A100', // MedGenz Golden Yellow
          700: '#B37D00',
          800: '#805900',
          900: '#4D3600',
        },
        primary: {
          DEFAULT: '#E6A100',
          hover: '#B37D00',
        },
        bg: {
          main: '#ffffff',
          alt: '#f8fafc',
        },
        text: {
          main: '#1e293b',
          muted: '#64748b',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
