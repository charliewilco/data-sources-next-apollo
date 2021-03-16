import { makeExecutableSchema } from "apollo-server-micro";
import { RESTDataSource } from "apollo-datasource-rest";
import { typeDefs } from "./type-defs";
import { resolvers } from "./resolvers";

export class SpaceArticles extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://spaceflightnewsapi.net/api/v2/";
  }

  async getArticles() {
    return this.get("articles");
  }
}

export const getDataSources = () => {
  return {
    space: new SpaceArticles(),
  };
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
