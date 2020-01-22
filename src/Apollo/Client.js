import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
  // uri: "http://localhost:4000",
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://plasmagram-backend.herokuapp.com/",
  clientState: {
    defaults,
    resolvers
  },
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});
//https://www.apollographql.com/docs/react/get-started/ 참조
