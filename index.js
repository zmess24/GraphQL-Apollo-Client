const app = require('./server/server');

app.listen(4000, err => {
  console.log(err || 'Listening');
});
