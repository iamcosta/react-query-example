import { api } from "./api";
import { User } from "./dto/user";

const BASE_PATH = "/users";

export class UserService {
  static async list() {
    const response = await api.get<User[]>(BASE_PATH);
    return response.data;
  }

  static async get(login: string) {
    const response = await api.get<User>(`/users/${login}`);
    return response.data;
  }
}