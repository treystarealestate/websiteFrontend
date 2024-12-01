import useSWR from "swr";
import httpClient from "./http-client";
export const useGetAllHomeData = () => {
  const { data: homeData, error, mutate } = useSWR(`/homeData`);
  return { homeData: homeData?.data, isLoading: !error && !homeData, isError: error, mutate };
  //return { homeData: homeData?.data, homeDataMutate: mutate };
};


export const useGetHomeCommunities = () => {
  const { data: homeCommunities, error, mutate } = useSWR(`/homeCommunities`);
  return { homeCommunities: homeCommunities?.data, isLoading: !error && !homeCommunities, isError: error, mutate };
  //return { homeData: homeData?.data, homeDataMutate: mutate };
};


export const saveContactFormApi = (data) => {
  return httpClient.post("/contactUs", data);
};


export const saveContactFormApi2 = (data) => {
  return httpClient.post("/contactUs", data);
};
