const { Router } = require('express');


const indexRouter = Router();

indexRouter.get("/", (req, res)=> res.send('i am from index router'))

module.exports = indexRouter;