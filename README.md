## Description
The main goal of this assignment is to create a small project called GithubClient. It is a single page
application where users see a list of Github users that own repositories written in Javascript language,
and see details about those users and their repositories. All data should be taken from the Github public API. 

There is a demostration recording in format.mov showing the UI of the application in action ![Demo Recording](/img/github-client_App-record.mov)

![Screenshot](/img/Screenshot%202019-07-01%20at%2008.51.11.png)

Project styling is done with a CSS preprocessor like SASS or a CSS-In-JS library like styled-components. All data could be retrieved directly from the Github public API with simple ajax calls from the client.

![Screenshot](/img/Screenshot%202019-07-01%20at%2008.51.35.png)

## Basic level
On top of each page, there is a navigation menu with links to Github Users, Following .
On Github Users page, users of the application is seeing a list of Github users (not organizations) that
own repositories written in Javascript language, sorted by most followers of user. Github users should be
presented with the following details about them:
 - Avatar (an image element with user avatar)
 - Name
 - Login Name
 - Location
 - Number of public repositories
 - Number of public gists
 - Number of followers
 - Number of following users

The list have a very simple pagination with just a Previous and Next buttons. The number of Github users per page is up to the developers.

![Screenshot](/img/Screenshot%202019-07-01%20at%2008.49.40.png)

The users of the application can click on Github users in order to get more details about repositories they own, sorted by most recently updated. A more detailed view (preferable an expanded view, a modal or another page) should be presented with the following details about their repositories:
 - Full Name
 - Description
 - License Name
 - Number of stars
 - Number of watchers
 - Number of forks
 
The list should have a very simple pagination with just a Previous and Next buttons.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
