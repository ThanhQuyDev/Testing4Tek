/* eslint-disable global-require */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '5rem',
      },
      screens: {
        sm: '100%', // Full width for small screens
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
    extend: {
      fontSize: {
        xxs: '0.625rem',
        sm: ['14px', '20px'],
        base: ['16px', '20px'],
        h1: {
          '@media (min-width: 768px)': {
            fontSize: ['3.5rem'],
            fontWeight: ['500'],
            lineHeight: ['4.2rem'],
          },
          fontSize: ['2.5rem'],
          fontWeight: ['700'],
          lineHeight: ['3rem'],
        },
        h2: {
          '@media (min-width: 768px)': {
            fontSize: ['3rem'],
            fontWeight: ['500'],
            lineHeight: ['3.6rem'],
          },
          fontSize: ['2.25rem'],
          fontWeight: ['700'],
          lineHeight: ['2.7rem'],
        },
        h3: {
          '@media (min-width: 768px)': {
            fontSize: ['2.5rem'],
            fontWeight: ['500'],
            lineHeight: ['3rem'],
          },
          fontSize: ['2rem'],
          fontWeight: ['700'],
          lineHeight: ['2.4rem'],
        },
        h4: {
          '@media (min-width: 768px)': {
            fontSize: ['2rem'],
            fontWeight: ['500'],
            lineHeight: ['2.6rem'],
          },
          fontSize: ['1.5rem'],
          fontWeight: ['700'],
          lineHeight: ['2.1rem'],
        },
        h5: {
          '@media (min-width: 768px)': {
            fontSize: ['1.5rem'],
            fontWeight: ['500'],
            lineHeight: ['2.1rem'],
          },
          fontSize: ['1.25rem'],
          fontWeight: ['700'],
          lineHeight: ['1.75rem'],
        },
        h6: {
          '@media (min-width: 768px)': {
            fontSize: ['1.25rem'],
            fontWeight: ['500'],
            lineHeight: ['1.75rem'],
          },
          fontSize: ['1.125rem'],
          fontWeight: ['700'],
          lineHeight: ['1.575rem'],
        },
        large: {
          fontSize: ['1.25rem'],
          lineHeight: ['1.875rem'],
          light: {
            fontWeight: ['300'],
          },
          normal: {
            fontWeight: ['400'],
          },
          medium: {
            fontWeight: ['500'],
          },
          bold: {
            fontWeight: ['700'],
          },
        },
        medium: {
          fontSize: ['1.125rem'],
          lineHeight: ['1.6875rem'],
          light: {
            fontWeight: ['300'],
          },
          normal: {
            fontWeight: ['400'],
          },
          medium: {
            fontWeight: ['500'],
          },
          bold: {
            fontWeight: ['700'],
          },
        },
        regular: {
          fontSize: ['1rem'],
          lineHeight: ['1.5rem'],
          light: {
            fontWeight: ['300'],
          },
          normal: {
            fontWeight: ['400'],
          },
          medium: {
            fontWeight: ['500'],
          },
          bold: {
            fontWeight: ['700'],
          },
        },
        small: {
          fontSize: ['0.875rem'],
          lineHeight: ['1.3125rem'],
          light: {
            fontWeight: ['300'],
          },
          normal: {
            fontWeight: ['400'],
          },
          medium: {
            fontWeight: ['500'],
          },
          bold: {
            fontWeight: ['700'],
          },
        },
        tiny: {
          fontSize: ['0.75rem'],
          lineHeight: ['1.125rem'],
          light: {
            fontWeight: ['300'],
          },
          normal: {
            fontWeight: ['400'],
          },
          medium: {
            fontWeight: ['500'],
          },
          bold: {
            fontWeight: ['700'],
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
      },
      flex: {
        full: '0 0 100%',
      },
      maxWidth: {
        dashboard: 'var(--dashboard-container)',
      },
      width: {
        sidebar: 'var(--w-sidebar)',
      },
      height: {
        header: 'var(--header-h)',
      },

      text: {
        large: {
          light: {
            fontSize: ['1.25rem'],
            fontWeight: ['300'],
            lineHeight: ['2.1rem'],
          },
        },
      },
      zIndex: {
        header: 999,
      },
      borderWidth: {
        DEFAULT: '1.5px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      colors: {
        border: {
          DEFAULT: 'hsl(var(--border))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        surface: 'hsl(var(--surface))',
        background: {
          DEFAULT: 'hsl(var(--background))',
          gray: '#EEEEEE',
          grayLight: '#F6F6F6',
        },
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsla(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          grayDescription: '#757575',
          blue: '#079BEE',
          lightBlue: '#E3FCFF',
        },
      },
      borderRadius: {
        '3xl': '36px',
        '2xl': '24px',
        xl: '16px',
        lg: '12px',
        md: '8px',
        sm: '4px',
        haft: '50%',
      },
      boxShadow: {
        active: '0 0 80px 0 rgba(0, 0, 0, 0.10)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export {};
