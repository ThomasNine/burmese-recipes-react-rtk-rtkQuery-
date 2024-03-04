import { ApiService } from "../ApiService";

const userTypesEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getUserTypes: builder.query({
      query: () => `user_types`,
      tagTypes: ["UserTypes"],
      providesTags: ["UserTypes"],
    }),
  }),
});

export const { useGetUserTypesQuery } = userTypesEndpoint;
