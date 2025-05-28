const { Router } = require('express');

const newMsgRouter = Router();

newMsgRouter.get("/", (req, res)=> res.send("hi from new message router"));

module.exports = newMsgRouter;
