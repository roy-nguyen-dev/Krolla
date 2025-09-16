export const theme = {
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
  fonts: {
    sans: ['DM Sans', 'sans-serif'],
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
  },
  borderRadius: {
    button: '6px',
    card: '8px',
  },
} as const

export type Theme = typeof theme
