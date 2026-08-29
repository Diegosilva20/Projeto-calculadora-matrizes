module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Inter"', 'sans-serif'], // Dropping the archaic serif
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        'blueprint': {
          50: '#f8fafc',
          100: '#f1f5f9',
          800: '#1e293b',
          900: '#0f172a',
        },
        'accent': {
          DEFAULT: '#3b82f6', // Sleek, modern blue
          hover: '#2563eb',
        }
      }
    },
  },
  plugins: [],
}
