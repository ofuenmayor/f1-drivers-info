import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolver";
import { buildSubgraphSchema } from "@apollo/subgraph";

export const server = new ApolloServer({
  schema: buildSubgraphSchema({typeDefs, resolvers})
				      });
