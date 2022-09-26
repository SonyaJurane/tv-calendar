import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import Axios from "axios";
import { Show } from "./types";

const app = express();
const port = 8080;

const schema = buildSchema(`
  type Rating {
    average: Float
  }

  type Country {
    name: String
    code: String
    timezone: String
  }

  type Schedule {
    time: String
    days: [String]
  }

  type Network {
    id: Int
    name: String
    country: Country
    officialSite: String
  }

  type ExternalIds {
    tvrage: Int
    thetvdb: Int
    imdb: String
  }

  type Links {
    self: String
    previousepisode: String
    nextepisode: String
  }

  type ImageLinks {
    medium: String
    original: String
  }

  type Show {
    id: Int!
    name: String
    type: String
    language: String
    genres: [String]
    status: String
    runtime: Int
    averageRuntime: Int
    premiered: String
    ended: String
    officialSite: String
    schedule: Schedule
    rating: Rating
    weight: Int
    network: Network
    webChannel: String
    dvdCountry: String
    externals: ExternalIds
    image: ImageLinks
    summary: String
    updated: Int
    _links: Links
  }

  type Query {
    search(prompt : String!): [Show]
  }
`);

const searchShow = async (namePrompt: string): Promise<[Show] | undefined> => {
  try {
    const requestString = `https://api.tvmaze.com/search/shows?q=${namePrompt}`;
    console.log(requestString);
    const response = await Axios.get(requestString);
    const data = response.data;
    const shows = data.map(({ show }: any) => ({ ...show }));
    console.log(shows);
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
    schema,
    rootValue: root,
    graphiql: true,
  })(req, res);
  promise.then(() => next()).catch((err) => next(err));
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
