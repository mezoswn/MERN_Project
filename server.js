const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
require('./server/config/mongoose.config');



app.use(express.urlencoded({ extended: true })); 
require('./server/route/user.routes')(app);
require('./server/route/plan.routes')(app);
const server = app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

const io = require('socket.io')(server, {cors:true});


require('dotenv').config();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

io.on('connection', socket => {
    // console.log(socket.id);
    // console.log("Nice to meet you. (shake hand)");

    socket.on("newMsgClient", data => {
        // console.log(data);
        socket.broadcast.emit("sendMsgtoClients", data)
    })
})