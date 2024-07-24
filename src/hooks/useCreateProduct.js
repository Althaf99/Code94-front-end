import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useCreateProduct = () => {
  const QueryClient = useQueryClient();
  const url = "http://localhost:9000/products";

  return useMutation(
    async (obj) => await axios.post(url, obj),
    {
      onSuccess: async () => {
        QueryClient.invalidateQueries();
      },
    },
    {
      onError: async () => {
        console.log("error");
      },
    }
  );
};

export default useCreateProduct;
