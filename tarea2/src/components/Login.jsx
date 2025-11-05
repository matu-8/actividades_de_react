import { useForm } from "../hooks/useForm";

//El valor inicial del useState, al realizar custom hooks, se definen en el componente donde será utilizado el custom hook
//La prop "onLogin" se la paso como parametro del componente Login (Viene del padre)
export const Login = ({ onLogin }) => {
  const { formState, handleChange, handleReset, handleSubmit } = useForm({
    email: "",
    password: "",
    username: "",
  });

  return (
    <>
      <div id="login">
        <h3>Inicia Sesion</h3>
        <form onSubmit={(event)=>handleSubmit(event, onLogin)}>
          <input
            type="text"
            name="username"
            placeholder="Ingresa tu usuario"
            value={formState.username}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Ingresa tu correo"
            value={formState.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="password"
            placeholder="Ingresa tu contraseña"
            value={formState.password}
            onChange={handleChange}
          />
          <br />
          <button type="submit" >
            Enviar Datos
          </button>
          <button type="submit" onClick={handleReset}>
            Resetear formulario
          </button>
        </form>
      </div>
    </>
  );
};
