import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

import { searchShow } from "./misc";
import { LinksArgs } from "./types";

const ImageType = new GraphQLObjectType({
  name: "Image",
  description: "Images from the api",
  fields: () => ({
    medium: {
      type: GraphQLString,
      resolve: (parent: { medium: string; original: string }) => {
        return parent?.medium;
      },
    },
    original: {
      type: GraphQLString,
      resolve: (parent: { medium: string; original: string }) => {
        return parent?.original;
      },
    },
  }),
});

const LinksType = new GraphQLObjectType({
  name: "Links",
  description: "Links that are returned from rest api",
  fields: () => ({
    self: {
      type: GraphQLString,
      resolve: (parent: LinksArgs) => {
        return parent?.self?.href;
      },
    },
    previousepisode: {
      type: GraphQLString,
      resolve: (parent: LinksArgs) => {
        return parent?.previousepisode?.href;
      },
    },
    nextepisode: {
      type: GraphQLString,
      resolve: (parent: LinksArgs) => {
        return parent?.nextepisode?.href;
      },
    },
  }),
});

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
      type: ImageType,
    },
    summary: {
      type: GraphQLString,
    },
    updated: {
      type: GraphQLInt,
    },
    _links: {
      type: LinksType,
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
