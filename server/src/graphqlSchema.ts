import { buildSchema } from "graphql";

const ratingSchema = `  
    type Rating {
        average: Float
    }
`;

const countrySchema = `  
    type Country {
        name: String
        code: String
        timezone: String
    }
`;

const scheduleSchema = `  
    type Schedule {
        time: String
        days: [String]
    }
`;

const networkSchema = `  
    type Network {
        id: Int
        name: String
        country: Country
        officialSite: String
    }
`;

const externalIdsSchema = `  
    type ExternalIds {
        tvrage: Int
        thetvdb: Int
        imdb: String
    }
`;

const linkSchema = `
    type Link {
        href: String
    }
`;

const linksSchema = `  
type Links {
    self: Link
    previousepisode: Link
    nextepisode: Link
  }
`;

const imageLinksSchema = `  
    type ImageLinks {
        medium: String
        original: String
    }
`;

const webChannelSchema = `
    type WebChannel {
        id: Int
        name: String
        country: String
        officialSite: String
    }
`;

const showSchema = `  
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
        webChannel: WebChannel
        dvdCountry: String
        externals: ExternalIds
        image: ImageLinks
        summary: String
        updated: Int
        _links: Links
    }
`;

const querySchema = `  
    type Query {
        search(prompt : String!): [Show]
    }
  `;

export const Schema = buildSchema(`
  ${ratingSchema}
  ${countrySchema}
  ${scheduleSchema}
  ${networkSchema}
  ${externalIdsSchema}
  ${linkSchema}
  ${linksSchema}
  ${imageLinksSchema}
  ${webChannelSchema}
  ${showSchema}
  ${querySchema}
`);

export default Schema;
