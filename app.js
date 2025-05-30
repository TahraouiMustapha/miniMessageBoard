const express = require('express');
const path = require('node:path');
const app = express()

// set app properties (views folder path , template engine)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

// import routers
const indexRouter = require('./routes/indexRouter')
const newMsgRouter = require('./routes/newMsgRouter')

// middlware to parse form data
app.use(express.urlencoded({ extended: true }));


app.use("/", indexRouter);
app.use("/new", newMsgRouter);


// error handler middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err.msg);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`my app listening on port ${PORT}`)
})