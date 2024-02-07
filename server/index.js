require('dotenv').config();
const express = require('express');
const moongoose = require('mongoose');
const router = require('./router/index')
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use('/', router);

const start = async () => {
    try {
        await moongoose.connect(process.env.DB_URL);
        app.listen(PORT,() => console.log(`Server started on PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();