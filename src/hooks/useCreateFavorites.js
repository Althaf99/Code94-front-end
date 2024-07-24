import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useCreateFavorites = () => {
  const QueryClient = useQueryClient();
  const url = "http://localhost:9000/favorites/add";

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

export default useCreateFavorites;
