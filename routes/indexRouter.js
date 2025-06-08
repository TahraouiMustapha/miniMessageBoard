const { Router } = require("express");
const { format } = require("date-fns");
const NotFoundMessage = require("../errors/NotFoundMessage");

const indexRouter = Router();
// async handler 
const asyncHandler = require('express-async-handler');
const db = require('../db/queries')


indexRouter.get("/", asyncHandler(async(req, res) => {
  const messages = await db.getAllMessages();

  const formattedMessages = messages.map(msg =>  {  
    return {
      ...msg,
      added: format(msg.added, "dd/MM/yyyy hh:mm a")
    }
  })

  res.render("index",{messages: formattedMessages} )
}))

indexRouter.get("/messages/:msgId", asyncHandler(async (req, res) => {
  const { msgId } = req.params;
  let msgObj = await db.getMessageById(Number(msgId));
  
  if(msgObj == {}) {
    throw new NotFoundMessage("The Message Not Found!")
  }

  msgObj = {
    ...msgObj[0],
    added:  format(msgObj[0].added, "dd/MM/yyyy hh:mm a")
  }
  res.render("messageDetails", {msg: msgObj});
}))

indexRouter.post("/new", asyncHandler(async (req, res)=> {
  const newMsg = {
    text: req.body.userText || 'no text submit' ,
    username: req.body.userName || 'no input sir!',
    added: new Date()
  }
  await db.createMsg(newMsg);
  res.redirect("/");
}))

module.exports = indexRouter;