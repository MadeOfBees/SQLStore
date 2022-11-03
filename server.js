const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 4200;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false})
.then(() => {
   app.listen(
    PORT,
    () => console.log(`Example NodeJS, PSQL, and Express API running on port ${PORT}`)
   );
  }
);