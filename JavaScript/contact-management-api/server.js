const express = require("express");
const errorHandler = require("./src/middleware/errorHandler");
const connectDb = require("./src/config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const PORT = process.env.PORT ?? 8080;

app.use(express.json());
app.use("/api/contacts", require("./src/routes/contactRoutes"));
app.use("/api/users", require("./src/routes/userRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
