const Chat = require("../../models/chat.model");
const User = require("../../models/user.model");

// [GET] /chat/
module.exports.index = async (req, res) => {
  const userId = res.locals.user.id;
    
  // SocketIO
  _io.once('connection', (socket) => {
    socket.on("CLIENT_SEND_MESSAGE", async (content) => {
      // Lưu vào daatabase 
      const chat = new Chat({
        user_id: userId,
        content: content
      })
      await chat.save();
  })
});
// End SocketIO  
  
  
res.render("client/pages/chat/index", {
      pageTitle: "Chat",
    });
  };