import { ApiService } from "../ApiService";

const recipesEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => `recipes`,
      tagTypes: ["Recipes"],
      providesTags: ["Recipes"],
    }),
    getRecipesById: builder.query({
      query: (id) => `recipes/${id}`,
      tagTypes: ["RecipesById"],
      providesTags: ["RecipesById"],
    }),
  }),
});

export const { useGetRecipesQuery, useGetRecipesByIdQuery } = recipesEndpoint;
