const express = require('express')
const app = express();
const port = process.env.PORT || 8080;

const routes = require('./api/routes');

routes(app);
app.listen(port, () => {
    console.log('Server started on port:' + port);
})