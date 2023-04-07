const express =require('express');
const apiRoutes = require('../Note_Taker/routes/apiRoutes');
const htmlRoutes = require('../Note_Taker/routes/htmlroutes');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false }));

app.use(express.static('public'));

app.use('./',apiRoutes);
app.use('./', htmlRoutes);

app.listen(PORT, () => console.log ('Listening on port %s', PORT));