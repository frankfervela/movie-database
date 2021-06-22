##Creating the Officer Web App

In this document I will outline every step taken to complete this hulu clone. This demi is designed mobile first

##Technologies Used
- React.js 
- Next.js
- TailwindCSS
- AWS Amplify
- IMDB Database Rest API

##Steps to set up a Next app with TailwindCSS
- Create next app: `npx create-next-app {nameOfProject}`

- Add the dependencies with yarn. Make sure you erase the package.json file. Then press yarn to convert the package manager settings to yarn. Then run
`yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest`

- Replace the purge key in the file `tailwind.config.js` to `purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']`
- Remove from `styles` all files but `global.css` and replace the file's content with 
  - `@tailwind base;`
  - `@tailwind components;`
  - `@tailwind utilities;`

- If you don't have already a `next.config.js` file, create one and add the configuration that allows the lazy loading of the images to work correctly.
  `images: {
  domains: ["media-exp1.licdn.com"]
  }`
This will allow the use of `<Image />` tags to be used in our app

    
- In the `index.js` file. remove all the boilerplate code, including the import to the old css modules from `styles` folder and the class names added to the different html tags.


