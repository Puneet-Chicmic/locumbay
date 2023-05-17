import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.API_URL,

    prepareHeaders: async (headers, { getState }) => {
        const token = getState().common.authToken
        console.log(token,"TOKEN iS");
        if (token) {
          // ${token}
          headers.append('authorization', `Bearer ${token}`)
        }
        return headers
      },
    })
const baseQueryWithInterceptor = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
    }
    return result;
};
export const api = createApi({
    baseQuery: baseQueryWithInterceptor,
    endpoints: () => ({}),
});
