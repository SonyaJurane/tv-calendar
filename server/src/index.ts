import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import Schema from "./graphqlSchema";

const app = express();
const port =
  process.env.PORT !== null && process.env.PORT !== ""
    ? process.env.PORT
    : 8080;

app.use(
  cors({
    origin: ["http://localhost:3000", "https://tv-calendar.vercel.app/"],
    methods: ["GET", "POST"],
  })
);

app.use("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/graphql", (req, res, next) => {
  const promise = graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })(req, res);
  promise.then(() => next()).catch((err) => next(err));
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
