const express = require('express');
const mongoose = require('mongoose');
const PostRouter = require('./routes/post');
const AuthRouter = require('./routes/auth');
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
  PORT,
  NODE_ENV
} = require('./configs');

const app = express();

function retryDatabaseConnection() {
  console.log('Retrying mongodb connection');
  mongoose
    .connect(
      `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
      }
    )
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((err) => {
      console.log('Error', err.message);
      setTimeout(retryDatabaseConnection, 5000);
    });
}

retryDatabaseConnection();

app.get('/', (_, res) => {
  res.send(`<h2>Listening at port ${PORT} in ${NODE_ENV} environment</h2>`);
});
app.use(express.json());
app.use('/api/v1/posts', PostRouter);
app.use('/api/v1/auth', AuthRouter);
app.listen(PORT, () =>
  console.log(`Listening at port ${PORT} in ${NODE_ENV} environment`)
);
