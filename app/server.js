const express = require('express');
const fs = require('fs');
const https = require('https');

const sslOptions = {    
    key: fs.readFileSync("./privkey.key"),    
    cert: fs.readFileSync("./certificate.crt")
};

const app = express();
const userRoute = require('./routes/User');
app.use('/user', userRoute);

https.createServer(sslOptions, app).listen(443, () => {
    console.log('Server running on port 443');
});