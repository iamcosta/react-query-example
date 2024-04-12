import "./App.css";
import { useForm } from "react-hook-form";
import { useUsers } from "./hooks/useUsers";
import { useGetUser } from "./hooks/useGetUser";

type FormProps = {
  login: string;
};

function App() {
  const { users, loading } = useUsers();
  const { getUser, loadingUser, user } = useGetUser();

  // react-hook-form
  const { register, handleSubmit, watch } = useForm<FormProps>();
  if (loading) {
    return <span>Carregando...</span>;
  }

  function onSubmit(data: FormProps) {
    getUser(data.login);
  }

  const login = watch("login");

  return (
    <>
      <form style={{ display: "flex" }} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("login")} />
        <button type="submit">Buscar</button>
      </form>
      {loadingUser && <span>Carregando...</span>}
      {!!user.id && (
        <a href={user.avatar_url} target="_blank">
          Avatar de {login}
        </a>
      )}
      <ul>
        {users.map(({ id, login }) => (
          <li key={id}>{login}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
