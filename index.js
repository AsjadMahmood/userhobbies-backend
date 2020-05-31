const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var userRouter = require('./routes/user.route');
var hobbiesRouter = require('./routes/hobbies.route');
const PORT = 4000;

app.use(cors());

app.use(bodyParser.json());

app.use('/api/user', userRouter);
app.use('/api/hobbies', hobbiesRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});