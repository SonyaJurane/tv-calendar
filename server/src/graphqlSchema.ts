import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

import { searchShow } from "./misc";

const ShowType = new GraphQLObjectType({
  name: "Show",
  description: "This represents a show",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    url: { type: GraphQLString },
    type: { type: GraphQLString },
    language: { type: GraphQLString },
    genres: { type: GraphQLList(GraphQLString) },
    status: {
      type: GraphQLString,
    },
    runtime: {
      type: GraphQLInt,
    },
    averageRuntime: {
      type: GraphQLInt,
    },
    premiered: {
      type: GraphQLString,
    },
    ended: {
      type: GraphQLString,
    },
    officialSite: {
      type: GraphQLString,
    },
    schedule: {
      type: GraphQLString,
      resolve: () => {
        return "Not implemented";
      },
    },
    rating: {
      type: GraphQLString,
      resolve: () => {
        return "Not implemented";
      },
    },
    weight: {
      type: GraphQLInt,
    },
    network: {
      type: GraphQLString,
      resolve: () => {
        return "Not implemented";
      },
    },
    webChannel: {
      type: GraphQLString,
      resolve: () => {
        return "Not implemented";
      },
    },
    dvdCountry: {
      type: GraphQLString,
      resolve: () => {
        return "Not implemented";
      },
    },
    externals: {
      type: GraphQLString,
      resolve: () => {
        return "Not implemented";
      },
    },
    image: {
      type: GraphQLString,
      resolve: () => {
        return "Not implemented";
      },
    },
    summary: {
      type: GraphQLString,
    },
    updated: {
      type: GraphQLInt,
    },
    _links: {
      type: GraphQLString,
      resolve: () => {
        return "Not implemented";
      },
    },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    search: {
      type: new GraphQLList(ShowType),
      description: "Retrieve a list of shows based on prompt",
      args: {
        prompt: { type: GraphQLString },
      },
      resolve: async (parent, args) => {
        return searchShow(args.prompt);
      },
    },
  }),
});

export const Schema = new GraphQLSchema({
  query: RootQueryType,
});

export default Schema;
