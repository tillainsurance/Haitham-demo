const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/webhook", (req, res) => {
  const msg = req.body.Body;

  console.log("Message:", msg);

  res.set("Content-Type", "text/xml");
  res.send(`
    <Response>
      <Message>Karibu Tilla Insurance 👍</Message>
    </Response>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running 🚀"));
