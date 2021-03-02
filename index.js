const express =require('express');
const bodyParser=require('body-parser');
const cors =require('cors');
const scraperouter =require('./routes/links.js');
const path = require("path");




const app = express();


app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/links', scraperouter);




const PORT= process.env.PORT || 5000;

// if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, 'frontend', "build")));
// }

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));