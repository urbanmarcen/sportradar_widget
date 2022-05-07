// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MAINAPIURL } from "../config";
//import { Pokemon } from './types'

type Livescore = {
  matches: number[];
  teams: number[];
}

// Define a service using a base URL and expected endpoints
export const livescoreApi = createApi({
  reducerPath: "livescoreApi",
  baseQuery: fetchBaseQuery({ baseUrl: MAINAPIURL }),
  endpoints: (builder) => ({
    getLivescore: builder.query<Livescore, string>({
      query () { return  `livescore/` },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLivescoreQuery } = livescoreApi;
