const express = require("express");
const { registrationRoute } = require("./routes/registrations.route");

const app = express();

app.use(express.json());

app.use("/api/v1/registrations", registrationRoute);

app.all("*", (req, res) => {
  const { method, data } = req;

  res.status(404).json({
    status: "error",
    data: {
      message: `${method} or ${data} does not exist on our server`,
    },
  });
});

module.exports = { app };
