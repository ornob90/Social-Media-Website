import {
  InvalidateQueryFilters,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import useAxios, { AxiosInstanceType } from "./useAxios";

type HttpMethod = "POST" | "PUT" | "DELETE";

const useMutate = (
  endpoint: string,
  method: HttpMethod,
  queryKeys?: (string | number)[],
  axiosOptions: AxiosInstanceType = {
    isPrivate: true,
  }
) => {
  const axiosSecure = useAxios(axiosOptions);
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: async (data: any) => {
      let res: AxiosResponse<any>;

      switch (method) {
        case "POST":
          res = await axiosSecure.post(endpoint, data);
          break;
        case "PUT":
          res = await axiosSecure.put(endpoint, data);
          break;
        case "DELETE":
          res = await axiosSecure.delete(endpoint, { data });
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      return res?.data;
    },
    onSuccess: () => {
      if (queryKeys) {
        queryKeys.forEach((queryKey) => {
          queryClient.invalidateQueries(
            queryKey as InvalidateQueryFilters | undefined
          );
        });
      }
    },
  });

  return mutate;
};

export default useMutate;
