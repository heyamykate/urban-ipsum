'use strict';

const app = require('./app');

const PORT = process.env.PORT || 9000;
const IP = '107.170.246.10'

app.listen(PORT, IP, () => {
  console.log(`Server running at http://${IP}:${PORT}`);
});
