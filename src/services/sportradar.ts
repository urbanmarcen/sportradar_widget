// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ILivescore from "types/ILivescore";
import { MAIN_API_URL } from "../config";
//import { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const livescoreApi = createApi({
  reducerPath: "livescoreApi",
  baseQuery: fetchBaseQuery({ baseUrl: MAIN_API_URL }),
  endpoints: (builder) => ({
    getLivescore: builder.query<ILivescore, string>({
      query() {
        return `livescore/`;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLivescoreQuery } = livescoreApi;
