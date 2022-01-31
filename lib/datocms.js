import { GraphQLClient } from "graphql-request"

export function request({ query, token }) {
  const client = new GraphQLClient("https://graphql.datocms.com", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  return client.request(query)
}
