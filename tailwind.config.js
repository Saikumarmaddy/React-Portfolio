/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('./assets/images/background_11.wide.jpeg')"
      },
      height: {
        '47vh': "47.5vh"
      },
      padding: {
        '4per': "4%",
        '92per': "92%",
        '20per': "20%",
        '10per': "10%"
      },
      margin: {
        '20per': "20%",
        '10per': "10%",
        '4per': "4%"
      },
      width: {
        '320px': "320px",
        '450px': "450px"
      },
      fontFamily: {
        'fangsong': "fangsong"
      }
    },
  },
  plugins: [],
}


//min-[1500px]:px-20per  min-[1080px]:px-10per