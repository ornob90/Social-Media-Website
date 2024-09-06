"use client";
import axios, { CreateAxiosDefaults } from "axios";
import { useSession } from "next-auth/react";

export type AxiosInstanceType = {
  options?: CreateAxiosDefaults;
  isPrivate: boolean;
  server?: "auth" | "property";
};

const useAxios = (restOptions?: AxiosInstanceType) => {
  const { options, isPrivate, server } = restOptions || {};

  const session = useSession();
  const token = session.data?.user?.apiToken;

  // Create an Axios instance with default and provided options
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL!,
    ...options,
  });

  // Interceptor to add authorization header if token is present and request is private
  axiosInstance.interceptors.request.use(
    async (config) => {
      //   const token = await getToken();
      const token = "";
      if (token && isPrivate) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (err) => {
      console.log("ERROR FROM INTERCEPTOR: ", err.message);
    }
  );

  // Interceptor to handle response errors
  // axiosInstance.interceptors.response.use(
  //   (res) => res,
  //   async (err: any) => {
  //     const originalRequest = err.config;

  //     // Check if error status is in unauthorized statuses and the request has not been retried yet
  //     if (
  //       authConfig.unauthorizedStatuses.includes(err.response.status) &&
  //       !originalRequest?._retry
  //     ) {
  //       originalRequest._retry = true;
  //       const lastActive = localStorage.getItem("lastActive");

  //       const curTime = Date.now();

  //       // Logout if user has been inactive for more than 30 minutes
  //       if (lastActive && curTime - parseInt(lastActive) > 1800000) {
  //         return await logout();
  //       }

  //       const refreshToken = await getToken("refreshToken");

  //       try {
  //         // Attempt to refresh the access token
  //         const { data } = await axios.post(
  //           process.env.NEXT_PUBLIC_BASE_URL + "/auth/refresh",
  //           {
  //             refreshToken,
  //           }
  //         );

  //         await setSession(data);

  //         // Update the authorization header with the new access token
  //         axiosInstance.defaults.headers.common[
  //           "Authorization"
  //         ] = `Bearer ${data.accessToken}`;

  //         return axiosInstance(originalRequest);
  //       } catch (error: any) {
  //         console.log(`Refresh token error: `, error.message);
  //         await clearCookies();
  //         window.open("/login", "_self");
  //       }
  //     } else {
  //       return Promise.reject(err);
  //     }
  //   }
  // );

  return axiosInstance;
};

export default useAxios;
