# Sportradar demo widget
React based Match score widget based on a livescore API data.
## Basic project packages
- Create React App 
- Redux toolkit (datastore)
- MaterialUI (UI components)
- Generate-react-cli (page&component generation)
- Typescript

## How to run & start the project

1. clone project from github
2. run "npm install" to install dependent packages
3. run "npm start"
6. visit http://127.0.0.0:3000 if the 

## Generate page or component
npx generate-react-cli component LivescorePage 
npx generate-react-cli component MatchComponent --type=page
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
