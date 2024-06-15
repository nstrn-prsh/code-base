// Need to use the React-specific entry point to import createApi
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { URLS } from "../urls";
import { Iplanet } from "./planet.module";

// Define a service using a base URL and expected endpoints
export const planetApi = createApi({
   reducerPath: "planetApi",
   baseQuery: baseQuery,
   endpoints: (builder) => ({
      // write service call here
      planet: builder.query<Iplanet, void>({
         query: () => ({
            url: URLS.fetchPlanet,
            method: "GET",
            // body: {},
         }),
      }),
   }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyPlanetQuery } = planetApi;
