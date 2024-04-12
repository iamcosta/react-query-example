import { useMutation } from "@tanstack/react-query";
import { User } from "../service/dto/user";
import { UserService } from "../service/UserService";

export function useGetUser() {
  // react-query : mutations
  const {
    mutate: getUser,
    isPending: loadingUser,
    data: userFetched,
    isSuccess: isUserSuccess,
  } = useMutation({
    mutationFn: (login: string) => UserService.get(login),
  });

  return {
    getUser,
    loadingUser,
    user: isUserSuccess ? userFetched : ({} as User),
  };
}
