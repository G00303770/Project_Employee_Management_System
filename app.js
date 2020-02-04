const express = require('express');  // bring in express

const app = express();  // basic express variable 

app.use('/', require('./routes/index')); // link to routes 
app.use('/users', require('./routes/users')); // link to routes 


const PORT = process.env.PORT || 5000;  //port  to run app on on process.env.port or 5000 using local host 

app.listen(PORT, console.log('Server started on port: '+ PORT)); //app object to listen to run a server 