const { Router } = require("express");
const { format } = require("date-fns");
const NotFoundMessage = require("../errors/NotFoundMessage");

const indexRouter = Router();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  }, 
  {
    id: 2,
    text: "Hi !",
    user: "Charles",
    added: new Date()
  }, 
]

indexRouter.get("/", (req, res) => {
  const formattedMessages = messages.map(msg =>  {
    
    return {
      ...msg,
      added: format(msg.added, "dd/MM/yyyy hh:mm a")
    }
  })
  res.render("index",{messages: formattedMessages} )
})

indexRouter.get("/messages/:msgId", (req, res) => {
  let myMsg = messages.find(msg => msg.id == req.params.msgId);
  
  if(!myMsg) {
    throw new NotFoundMessage("The Message Not Found!")
  }

  myMsg = {
    ...myMsg, 
    added: format(myMsg.added, "dd/MM/yyyy hh:mm a")
  }

  res.render("messageDetails", {msg: myMsg});
})

indexRouter.post("/new", (req, res)=> {
  const newMsg = {
    id: messages.length + 1,
    text: req.body.userText,
    user: req.body.userName,
    added: new Date()
  }
  messages.push(newMsg);
  res.redirect("/");
})

module.exports = indexRouter;