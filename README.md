# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# Netflix GPT
- Create React App
- Configured tailwindcss
- Header 
- Login Form
- Sign Up Form
- Form Validation
- userRef Hook
- Firebase Setup
- Deploying our app in production
- Create Signup User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign Out
- Update profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect / browse to Login page and vice-versa
- Detch from TMDB Movies
- Unsubscribed to the onAuthStateChanged Callback
- Add hard coded values to the constatnt file
- Registered TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook For nowplayingMovies , movieTrailer
- Update Store with movie data
- Planning for main and secondary container
- Fetch data for trailer video
- Update store with trailer video data 
- emdeded the youtube video and make it auto play and mute
- Tailwind class to make container look good
- Build Secondary Component
- Build Movie List
- Build Movie card
- TMDB Image CDN URL
- usePopularMovies, UseUpcomingMovies
- Added MultiLingual for CHAT GPT search
- GPT Serarch Bar
- GPT Search Page
- Added .env file 
- created gptslice added data
- Reused Movie List component to make movie suggestion
- Added .env file to gitignore
- Responsive UI

# Features
- Login/Sign Up
  - Sign In / Sign Up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
       - MovieLists * N (vertical)
- NetflixGPT
  - Search Bar
  - Movie Suggestions