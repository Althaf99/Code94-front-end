import { useQuery } from "react-query";
import axios from "axios";

const useGetUsers = () => {
  const fetchUsers = async () => {
    try {
      const data = await axios.get("http://localhost:9000/users");
      return data?.data;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(["users"], fetchUsers, {
    refetchOnWindowFocus: false,
  });
};

export default useGetUsers;
