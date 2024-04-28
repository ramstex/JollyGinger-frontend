import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#fff4fe',
          100: '#fee9fd',
          200: '#fcd2f9',
          300: '#f9aef0',
          400: '#f47ee5',
          500: '#e63dcf',
          600: '#cc2db4',
          700: '#a92291',
          800: '#8a1e75',
          900: '#711e5f',
          950: '#4b073d',
        },
      },
    },
  },
};
