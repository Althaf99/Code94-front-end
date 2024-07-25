import { useQuery } from "react-query";
import axios from "axios";

const useGetProductsByProductName = ({ productName }) => {
  const fetchProduct = async () => {
    const query = new URLSearchParams();
    if (productName) {
      query.append("productName", productName);
    }
    try {
      const data = await axios.get(
        `http://localhost:9000/products/search?${query.toString()}`
      );

      return data.data;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(["filteredProductList", productName], fetchProduct, {
    refetchOnWindowFocus: false,
  });
};

export default useGetProductsByProductName;
