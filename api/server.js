const server = require('./src/app.js');
require('dotenv').config();

server.listen( process.env.PORT, () => {
    console.log("server on port 3001");
});
