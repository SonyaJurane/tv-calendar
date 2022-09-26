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
    url: {
      type: GraphQLString,
      resolve: () => {
        return "default url resolve";
      },
    },
    type: { type: GraphQLString },
    language: { type: GraphQLString },
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
