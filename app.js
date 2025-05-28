const express = require('express');
const app = express()

// import routers
const indexRouter = require('./routes/indexRouter')
const newMsgRouter = require('./routes/newMsgRouter')



app.use("/", indexRouter);
app.use("/new", newMsgRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`my app listening on port ${PORT}`)
})