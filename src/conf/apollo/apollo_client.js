import ApolloClient, { InMemoryCache } from "apollo-boost";
import conf from "../apollo.conf.json";

// url web service GraphQL
const client = new ApolloClient({
  uri: conf.graphQlUrl,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;
