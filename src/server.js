const express = require('express');
const router = require('./routes/studentRoute');
const app = express();
const port = 3000;

// app.get('/api', (req, res) => {
//   res.send('Hello World');
// })

app.use('/', router)

app.listen( port, () => {
  console.log('App listening to port 3000')
});
