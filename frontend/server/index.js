'use strict';

const app = require('./app');

const IP = require('../private');
console.log("IP: ", IP);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
