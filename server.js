const { db } = require("./utils/database.util");
const { app } = require("./app");

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    const PORT = 4000;
    app.listen(PORT, () => {
      console.log("Express server online");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();