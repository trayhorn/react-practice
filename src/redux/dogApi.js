import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const dogApi = createApi({
  reducerPath: 'dogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dog.ceo/api' }),
  endpoints: builder => ({
    getDogImageByBreed: builder.query({
      query: breed => `/breed/${breed.toLowerCase()}/images/random`,
    }),
  }),
});

export const { useGetDogImageByBreedQuery } = dogApi;