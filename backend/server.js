const express = require('express');
const app = express()
const port = 5000

app.get('/' , (req,res) => {
   
      res.send("techbazzar is ok!")

});

app.listen(port, ()=>{ console.log(`server is sucsessfully runing on ${port}`)});

