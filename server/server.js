const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config({ path: '../.env' });
// console.log(`>>>>>----- Mongo URI: ${process.env.MONGODB_URI} -----<<<<<`)

app.use(express.static('../client'));

// db 
const mongoose = require('mongoose');
mongoose.connect(
  process.env.MONGODB_URI,
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }
);

mongoose.connection.on('connected', () => {
console.log('>>>>>----- Mongoose is connected -----<<<<<')
})

// routes
app.get('/', (req, res) => {
  res.render('../client/index.html');
});

app.listen(port,
  console.log(`Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`)
);