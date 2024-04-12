import { useQuery } from "@tanstack/react-query";
import { UserService } from "../service/UserService";
import { User } from "../service/dto/user";

export function useUsers() {
  // react-query : queries
  const {
    data,
    isFetching: loading,
    isSuccess,
  } = useQuery({
    queryKey: ["listUsers"],
    queryFn: UserService.list,
  });

  return {
    users: isSuccess ? data : [] as User[],
    loading
  }
}