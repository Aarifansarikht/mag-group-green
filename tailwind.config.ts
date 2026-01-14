
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-space)', 'sans-serif'],
      },
      colors: {
        // "Blueprint Paper" Palette
        paper: '#F8FAFC',
        surface: '#FFFFFF',
        ink: '#0F172A',
        
        // "Precision Teal" Brand Color
        cobalt: {
          DEFAULT: '#0d9488', // Teal-600
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },

        // Brand Alias for SplashScreen
        brand: {
           DEFAULT: '#0d9488',
           accent: '#2dd4bf', 
           steel: '#94a3b8',
           950: '#042f2e',
        },
        
        // Technical Grays
        tech: {
          100: '#F1F5F9', // Grid lines
          200: '#E2E8F0',
          300: '#CBD5E1', // Borders
          400: '#94A3B8',
          500: '#64748B', // Secondary Text
          900: '#0F172A',
        },
        
        // Accent Colors - Replaced Cyan with Emerald for a greener "Tech" look
        cyan: {
          300: '#6ee7b7', // Emerald 300
          400: '#34d399', // Emerald 400
          500: '#10b981', // Emerald 500
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #F1F5F9 1px, transparent 1px), linear-gradient(to bottom, #F1F5F9 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(13, 148, 136, 0.15) 0%, transparent 70%)',
        'blue-gradient': 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)', // Teal Gradient
        'cyan-gradient': 'linear-gradient(135deg, #10b981 0%, #0d9488 100%)', // Emerald to Teal
        'metal-gradient': 'linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)',
        'glass': 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(13, 148, 136, 0.25)',
        'glow-hover': '0 0 30px rgba(13, 148, 136, 0.35)',
      },
      animation: {
        "scan": "scan 4s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "splash-pulse": "splash-pulse 3s ease-out infinite",
        "splash-zoom": "splash-zoom 1.5s ease-out forwards",
      },
      keyframes: {
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "splash-pulse": {
          "0%": { transform: "scale(0.8)", opacity: "0.5" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        "splash-zoom": {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
