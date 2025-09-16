import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: {
          yellow: '#fbbf24',
          purple: '#8b5cf6',
          green: '#10b981',
        },
        text: {
          primary: '#ffffff',
          secondary: '#9ca3af',
        },
        card: {
          background: '#1f1f1f',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        'card': '8px',
        'button': '6px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
