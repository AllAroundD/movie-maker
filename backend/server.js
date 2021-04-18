require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
const compression = require("compression");
const { graphqlHTTP } = require("express-graphql");
const movieSchema = require("./schema/schema");
const resolvers = require("./resolvers/resolver");
const cors = require("cors");

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.DB_URI || process.env.DB_URL,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error("DB connection error", err);
      throw err;
    }
    console.log("DB Connected Successfully");
  }
);

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("DB disconnected through app termination");
    process.exit(0);
  });
});

app.use(cors());
// Setting GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: movieSchema,
    graphiql: true,
    rootValue: resolvers,
  })
);

app.get("/", (req, res) => {
  res.send("Hello from backend app.js");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
