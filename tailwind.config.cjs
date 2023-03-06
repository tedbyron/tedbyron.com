/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'current',
      black: '#282a36',
      gray: '#44475a',
      white: '#f8f8f2',
      slate: '#6272a4',
      cyan: '#8be9fd',
      green: '#50fa7b',
      orange: '#ffb86c',
      pink: '#ff79c6',
      purple: '#bd93f9',
      red: '#ff5555',
      yellow: '#f1fa8c'
    },
    container: {
      center: true
    },
    fontFamily: {
      sans: [
        'Iosevka SS07 Web Extended',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: [
        'Iosevka Slab Web Extended',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif'
      ],
      mono: [
        'Iosevka SS07 Web Extended',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ]
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '2rem'],
      '2xl': ['1.5rem', '2.25rem'],
      '3xl': ['1.875rem', '2.75rem'],
      '4xl': ['2.25rem', '3.25rem'],
      '5xl': ['3rem', '4.25rem'],
      '6xl': ['3.75rem', '5rem'],
      '7xl': ['4.5rem', '6rem'],
      '8xl': ['6rem', '8rem'],
      '9xl': ['8rem', '11rem']
    }
  },
  plugins: []
}