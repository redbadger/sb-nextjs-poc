module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,html,js}',
    './src/components/**/*.{js,ts,jsx,tsx,html,js}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        hashim: '#243c5a',
        joseph: 'rgb(0,255,0)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
