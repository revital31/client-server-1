const express= require('express');
const app = express();
const data = require('./data.json');
//const cors= require('cors');





app.route('/events')
.get((req,res)=> {
    console.log(data);
res.json(data);
});

    



const port =process.env.PORT||3000;

app.listen (port ,() => console.log(`server strated on port ${port}`));