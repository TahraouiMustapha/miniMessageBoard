const { Router } = require('express');

const newMsgRouter = Router();

newMsgRouter.get("/", (req, res)=> res.render("newMsgForm") );

module.exports = newMsgRouter;
