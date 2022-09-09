const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config()

const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb connected"))
.catch (err => console.log(err) )

app.use('/', route);


app.listen(PORT , function () {
	console.log(`Express app running on http://localhost:${PORT}`)
});
