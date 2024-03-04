import { ApiService } from "../ApiService";

const recipesEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => `recipes`,
      tagTypes: ["Recipes"],
      providesTags: ["Recipes"],
    }),
  }),
});

export const { useGetRecipesQuery } = recipesEndpoint;
