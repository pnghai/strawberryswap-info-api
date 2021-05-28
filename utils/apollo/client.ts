import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: process.env.EXCHANGE_LITE || "https://api.thegraph.com/subgraphs/name/pnghai/strawberryswap-exchange-lite",
  }),
  cache: new InMemoryCache(),
});
