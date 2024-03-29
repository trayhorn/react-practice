import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const dogApi = createApi({
  reducerPath: 'dogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dog.ceo/api' }),
  endpoints: builder => ({
    getDogImageByBreed: builder.query({
      query: (breed) =>
        `/breed/${breed.join('/')}/images`,
    }),
    getBreedList: builder.query({
      query: () => '/breeds/list/all',
    }),
  }),
});

export const { useGetBreedListQuery, useGetDogImageByBreedQuery } = dogApi;

