import express from "express";
import { graphqlHTTP } from "express-graphql";
import Axios from "axios";
import { Show } from "./types";
import Schema from "./graphqlSchema";

const app = express();
const port = 8080;

const searchShow = async (namePrompt: string): Promise<[Show] | undefined> => {
  try {
    const requestString = `https://api.tvmaze.com/search/shows?q=${namePrompt}`;
    console.log(requestString);
    const response = await Axios.get(requestString);
    const data = response.data;
    const shows = data.map(({ show }: any) => ({ ...show }));
    return shows;
  } catch (error) {
    console.error(error);
  }
};

const root = {
  search: async ({
    prompt,
  }: {
    prompt: string;
  }): Promise<[Show] | undefined> => {
    console.log(prompt);
    return searchShow(prompt);
  },
};

app.use("/graphql", (req, res, next) => {
  const promise = graphqlHTTP({
    schema: Schema,
    rootValue: root,
    graphiql: true,
  })(req, res);
  promise.then(() => next()).catch((err) => next(err));
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
