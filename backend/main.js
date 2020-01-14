const express = require("express");
const mongosse = require("mongoose");

const routes = require("./src/routes");

const app = express();
mongosse.connect(
  "mongodb+srv://danieljuniorce:22051998@dbteste-5rdaw.mongodb.net/devradar?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
mongoose.set("useCreateIndex", true);

app.use(express.json());
app.use(routes);
app.listen(3333);
