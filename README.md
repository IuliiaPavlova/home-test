# Take Home Test

1. Clone repo
2. Set up server:

- `cd server`
- run `npm install`
- create .env and fill your information based on .env.example
- start database - in terminal run psql, I use [PostgresApp](https://postgresapp.com/downloads.html) for Mac
- start server - npm run dev, your should see two messages in terminal:

  `Server is listening on http://localhost:3001`

  `Table is successfully created`

3. Set up client:

- `cd client`
- run `npm install`
- create .env and add your Google API Key, enable Maps JavsScript API and Places API, see how to start with Google Maps Platform [here](https://developers.google.com/maps/gmp-get-started).
- run `npm run start`

## Tech Stack

### Server:

- express.js
- express-session
- postgresql
- cors
- dotenv
- nodemon
- eslint

### Client:

- create-react-app
- @react-google-maps/api
- dotenv
- eslint

## TO DO:

- add Authentication Middleware
- create Login, SignUp and SignIn pages in client
- make Map a different component
- add information about user's activity to DB
