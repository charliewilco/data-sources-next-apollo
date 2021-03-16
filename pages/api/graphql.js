import { ApolloServer } from "apollo-server-micro";
import { schema, getDataSources } from "../../apollo/schema";

const apolloServer = new ApolloServer({
  schema,
  context: (c) => {
    return {};
  },
  dataSources: getDataSources,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
