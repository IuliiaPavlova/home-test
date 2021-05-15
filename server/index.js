/* eslint-disable import/extensions */
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import router from './router.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const { SECRET } = process.env;

const app = express();

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());

app.use(
  session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2, // 2hr
      sameSite: true,
      httpOnly: false,
      // set secure=true in a production environment
      secure: false,
    },
  }),
);
app.use(router);

app.get('*', (req, res) => {
  res.status(404).send('Sorry, not found 😞');
});
app.listen(PORT, (error) => {
  if (error) {
    console.log(`Something went wrong! ${error}`);
  } else {
    console.log(`Server is listening on http://localhost:${PORT}`);
  }
});
