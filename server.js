const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
require('./server/config/mongoose.config');



app.use(express.urlencoded({ extended: true })); 
require('./server/route/user.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})



require('dotenv').config();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));