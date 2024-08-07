/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      xs : '320px',
      sm:'410px',   
      md:'768px',
      lg:'900px',
      xl:'1440px',
    },
    extend: {
      colors:{
        newWhite:'#F8EDED',
        newOrange:'#FF7F3E',
        // newCream:"#FBF6E2"
        newCream:"#FFF",
        gradiente: 'linear-gradient(45deg, #FF7F3E, #fed082)'
      },
      backgroundImage: {
        'gradient-border': 'linear-gradient(45deg, #FF7F3E, #fed082)',
      },

      fontSize: {
        'clamp-md': 'clamp(.5rem, 2vw, 1.5rem)',
        'hero-size':'clamp(6rem,18vw,20rem)',
        'sp-size':'clamp(1.5rem,3.5vw,10rem)',
        'cus-size':'clamp(1rem,2.5vw,8rem)',
    },
    width: {
      'custom-sm': '5%',
      'custom-lg': '3.5%',
  },
  height: {
      'custom-full': '100%',
      'custom-vh': '200vh',
  },
  
    },
    
    fontFamily:{
    'roboto':["Permanent Marker", "cursive"],
    'dream' : ["Rubik", "sans-serif", ],
    'nunito': ["'Edu AU VIC WA NT Hand'", "cursive"],
    'opensans':["'Open Sans'", "sans-serif"],
    'cursive' : [ "'Caveat'", "cursive"],
    'railway':["'Raleway'", "sans-serif"],
    'playop':[ "'Cedarville Cursive'", "cursive"],
    'antonsp':["'Anton'", "sans-serif"]

  },
  },
  plugins: [],
}
