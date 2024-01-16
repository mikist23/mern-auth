/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  "tailwindCSS.emmetCompletions": true,
"editor.inlineSuggest.enabled": true,
"editor.quickSuggestions": {
   "strings": true
},
"css.validate": false,
}