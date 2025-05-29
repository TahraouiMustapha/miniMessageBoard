const { Router } = require("express");
const { format } = require("date-fns");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  }, 
  {
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

module.exports = indexRouter;