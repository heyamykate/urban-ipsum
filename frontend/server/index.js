'use strict';

const app = require('./app');

if (process.env.NODE_ENV == 'production') {
  const IP = require('../private');
  const PORT = process.env.PORT || 9000;

  app.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}`);
  });

} else {
  const PORT = process.env.PORT || 9000;
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  })
}
