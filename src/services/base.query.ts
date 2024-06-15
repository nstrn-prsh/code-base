import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
   baseUrl: "",
   // baseUrl: "http://dev.ihio.gov.ir",
   prepareHeaders: (headers) => {
      // const token = (getState() as RootState).token?.token;
      // If we have a token set in state, let's assume that we should be passing it.
      // if (token) {
      // headers.set("authorization", Bearer ${token});
      // }

      return headers;
   },
});

// const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   if (result.error && result.error.status === 401) {
//     // try to get a new token
//     const refreshResult = await baseQuery("/refreshToken", api, extraOptions);
//     if (refreshResult.data) {
//       // store the new token
//       // api.dispatch(tokenReceived(refreshResult.data));
//       // retry the initial query
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(signOut());
//     }
//   }
//   return result;
// };
