module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        themeprimary: 'rgb(34,197,94)', // green-500 #22c55e
        textlight: '#e6e6e6',
        textgray: '#6b7280', // gray-500
        btnprimary: 'rgb(239,243,244)', // rgb(34,197,94), rgb(4,167,94)
        btntext: 'rgb(4,20,25)', // rgb(255, 255, 255)
        btndanger: '#c31432',
        btndangertext: '#e6e6e6',
        bgprimary: 'rgb(0,0,0)', //#111, 171717
        bgsecondary: '#212327', // inputs #212327
        bgtertiary: '#242D35',
        bghover: '#151719',
        bordergray: '#2d2f35',
        bglight: '#fefefe', // navbar
      },
    },
  },
  plugins: [],
};
