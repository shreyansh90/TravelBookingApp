const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const seatController = require('./controller/seatController');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/seats', seatController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
