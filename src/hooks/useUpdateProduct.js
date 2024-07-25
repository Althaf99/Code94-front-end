import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useUpdateProduct = ({ productId }) => {
  const QueryClient = useQueryClient();
  const url = `http://localhost:9000/products/${productId}`;

  return useMutation(
    async (obj) => await axios.put(url, obj),
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

export default useUpdateProduct;
