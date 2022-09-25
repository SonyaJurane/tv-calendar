import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import Axios from "axios";

const app = express();
const port = 8080;

const schema = buildSchema(`
  type Show {
    id: String!
    name: String
    language: String
    url: String
  }

  type Query {
    search(prompt : String!): [Show]
  }
`);

interface SearchArgs {
  prompt: string;
}

interface Show {
  id: string;
  name: string;
  language?: string;
  url?: string;
}

const searchShow = async (namePrompt: string): Promise<[Show] | undefined> => {
  try {
    const requestString = `https://api.tvmaze.com/search/shows?q=${namePrompt}`;
    console.log(requestString);
    const response = await Axios.get(requestString);
    const data = response.data;
    const shows = data.map(({ show }: any) => ({
      id: show.id,
      name: show.name,
      language: show.language,
      url: show.url,
    }));
    return shows;
  } catch (error) {
    console.error(error);
  }
};

const root = {
  search: async ({ prompt }: SearchArgs): Promise<[Show] | undefined> => {
    return searchShow(prompt);
  },
};

app.use("/graphql", (req, res, next) => {
  const promise = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })(req, res);
  promise.then(() => next()).catch((err) => next(err));
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
