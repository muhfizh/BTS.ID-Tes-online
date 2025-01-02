const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/RouteTodo');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

//lib body
app.use(bodyParser.json());

//route
app.use('/', route);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
