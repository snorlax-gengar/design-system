/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gds: {
          // Primary: Soft Lavender / Lilac
          lavender: {
            50: '#FAF5FF',
            100: '#F3E8FF',
            200: '#E9D5FF',
            300: '#D8B4FE',
            400: '#C084FC',
            500: '#A855F7',
            600: '#9333EA',
            700: '#7E22CE',
            800: '#6B21A8',
            900: '#581C87',
            950: '#3B0764',
            brand: '#A78BFA', // Main Signature Pastel Lavender
            glow: '#8B5CF6',
          },
          // Secondary: Sky Blue / Cloud Cyan
          sky: {
            50: '#F0F9FF',
            100: '#E0F2FE',
            200: '#BAE6FD',
            300: '#7DD3FC',
            400: '#38BDF8',
            500: '#0EA5E9',
            600: '#0284C7',
            700: '#0369A1',
            800: '#075985',
            900: '#0C4A6E',
            950: '#082F49',
            brand: '#38BDF8', // Main Signature Sky
            ice: '#E0F2FE',
          },
          // Complementary 1: Butter Cream / Milk Lemon (보라의 직보색)
          butter: {
            50: '#FEFCE8',
            100: '#FEF9C3',
            200: '#FEF08A',
            300: '#FDE047',
            400: '#FACC15',
            500: '#EAB308',
            600: '#CA8A04',
            700: '#A16207',
            800: '#854D0E',
            900: '#713F12',
            brand: '#FEF08A',
          },
          // Complementary 2: Soft Coral / Warm Tangerine (하늘의 직보색)
          coral: {
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#F97316',
            600: '#EA580C',
            700: '#C2410C',
            800: '#9A3412',
            900: '#7C2D12',
            brand: '#FB923C',
          },
          // Neutral Slate Gray
          slate: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
            950: '#020617',
          }
        }
      },
      boxShadow: {
        'gds-sm': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'gds-md': '0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.06)',
        'gds-lg': '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)',
        'gds-lavender': '0 4px 20px -2px rgba(167, 139, 250, 0.35)',
        'gds-sky': '0 4px 20px -2px rgba(56, 189, 248, 0.35)',
        'gds-dual': '0 4px 24px -2px rgba(167, 139, 250, 0.25), 0 8px 32px -4px rgba(56, 189, 248, 0.2)',
      },
      borderRadius: {
        'gds-sm': '6px',
        'gds-md': '10px',
        'gds-lg': '14px',
        'gds-xl': '20px',
        'gds-2xl': '28px',
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Malgun Gothic', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
