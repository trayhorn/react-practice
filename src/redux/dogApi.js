import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const dogApi = createApi({
  reducerPath: 'dogApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dog.ceo/api' }),
  endpoints: builder => ({
    getDogImageByBreed: builder.query({
      query: (breed) => `/breed/${breed.join('/')}/images`,
    }),
  }),
});

export const { useGetDogImageByBreedQuery } = dogApi;

export const breedListApi = createApi({
  reducerPath: 'breedListApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dog.ceo/api' }),
  endpoints: builder => ({
    getBreedList: builder.query({
      query: () => '/breeds/list/all',
    }),
  }),
});

export const { useGetBreedListQuery } = breedListApi;