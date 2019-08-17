const express = require("express");

const app = express();

//config environment variables
require("dotenv").config();

//body parser middleware
app.use(express.json());

// app.use("/api/weather", require("./routes/api/weather"));
app.use("/api/weather", require("./routes/api/weather"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
