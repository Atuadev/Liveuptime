/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      sans: ['sans-serif'],
    },
    extend: {
      screens: {
        'xg': '320px',
        'xs:': '360px',
        'xf': '400px',
      },
      backgroundColor: {
        'livetheme': '#020617',
        'livetheme2': '#71B6F9'
      },
      textColor: {
        'primary': '#CCE5FF',
        'gray': '#B4B9CB',
        'footer-gray': '#ADB5BD',
        'footer-sky': '#71B6F9',
      },
      inset: {
        '0.50': '0.50rem',
        '1': '1rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '18': '7rem',
        '68': '17rem',
        '78': '19.50rem',
        '85': '22rem',
        '88': '23.50rem',
        '90': '24rem',
        '92': '25rem',
        '94': '27rem',
        '98': '29rem',
        '100': '30rem',
        '102': '34.80rem',
        '104': '38rem'
      },
      height: {
        '100': '30rem',
      },
      width: {
        '97': '25rem',
        '98': '27rem',
        '100': '35rem',
      },
      padding: {
        'px-9': '2.65rem',
        'px-10': '2.80rem',
        'px-11': '3.20rem',
        'px-15': '4.15rem',
        'custom-15': '4rem',
      },
      padding: {
        'navpy': '0.35rem',
        'pl-30': '9.50rem',
      },
      margin: {
        '85': '21.80rem',
        '97': '45rem',
        '98': '81rem',
      },
    },
  },
  plugins: [],
}