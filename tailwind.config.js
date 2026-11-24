/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#18365C',
          light: '#234978',
          dark: '#0F172A',
          deep: '#0F172A',
          muted: '#1E3A5F',
        },
        gold: {
          DEFAULT: '#C39732',
          light: '#D4AA47',
          dark: '#A67D24',
          subtle: '#F9F5EA',
        },
        background: {
          light: '#F5F7FA',
          white: '#FFFFFF',
        },
        content: {
          primary: '#1E293B',
          secondary: '#64748B',
        },
        status: {
          success: '#16A34A',
          warning: '#D97706',
          danger: '#DC2626',
          info: '#2563EB',
        },
        border: {
          DEFAULT: '#E2E8F0',
          subtle: '#CBD5E1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
