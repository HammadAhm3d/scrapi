const express =require('express');
const bodyParser=require('body-parser');
const cors =require('cors');
const scraperouter =require('./routes/links.js');



const app = express();


app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/links', scraperouter);




const PORT= process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
    app.use(express.static('/frontend/build'));
}

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));