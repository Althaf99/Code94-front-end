import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const useProductMutation = (isUpdate = false) => {
  const queryClient = useQueryClient();
  const url = "http://localhost:9000/products";

  return useMutation(
    async (formData) => {
      const requestUrl = isUpdate ? `${url}/${formData.get("_id")}` : url;
      const method = isUpdate ? "PUT" : "POST";

      return await axios({
        method: method,
        url: requestUrl,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products"); // Specify the query key to invalidate
      },
      onError: (error) => {
        console.error("Error:", error);
      },
    }
  );
};

export default useProductMutation;
