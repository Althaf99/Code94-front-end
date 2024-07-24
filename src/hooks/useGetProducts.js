import { useQuery } from "react-query";
import axios from "axios";

const useGetProducts = () => {
  const fetchProducts = async () => {
    try {
      const data = await axios.get("http://localhost:9000/products");
      return data?.data;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(["products"], fetchProducts, {
    refetchOnWindowFocus: false,
  });
};

export default useGetProducts;
