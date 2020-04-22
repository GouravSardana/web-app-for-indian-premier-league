## Project Description

This project is bootstrapped and created using the [Create React App](https://github.com/facebook/create-react-app) utility.
The project is also deployed to [Netlify](https://www.netlify.com) at https://iplfrontend.netlify.app/.

There is also a backend to this application from where the data for all IPL seasons, teams and fixtures and stats is being retrived.
The backend is created using [Node](https://nodejs.org/) and is hosted hosted on [Heroku](https://www.heroku.com)


## Getting Started 

1. Download zip or take a clone of the using [git](https://git-scm.com/). `git clone https://github.com/sakshatl/web-app-for-indian-premier-league.git`
2. Make sure you have [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/lang/en/) installed. 
3. Go to the downloaded/cloned project repo and perform a `yarn install` or `npm install`. It will install all the dependencies defined in a `package.json` file.
4. Atlast, perform a `yarn start` or `npm start`. This will run the app in development mode on [localhost port 3000]( http://localhost:3000 ).


## Dependencies Used

#### For React (Front-end)

1. A react boilerplate application using Create React App via `yarn create react-app APP_NAME` or `npx create-react-app APP_NAME`.
2. React Router DOM, to switch between routes on the application via `yarn add react-router-dom` or `npm install react-router-dom`.
3. Materialize CSS, to use material based styled components in the application via `yarn add materialize-css` or `npm install materilaize-css`.
4. Axios, to get data from the API endpoint via `yarn add axios` or `npm install axios`.


### For Node (Back-end)

1. A node application via `npm init -y` sets up a `package.json` file.
2. Express, a popular node.js microserver to create a backend server, via `npm install express`.
3. Twitter, to get tweets from the official IPL page using Twitter API, via `npm install Twitter`.
4. CORS, to allow Cross-origin resource sharing, via `npm install cors`.