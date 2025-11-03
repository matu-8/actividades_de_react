import { useForm } from "../hooks/useForm"

export const Form = () => {
  const {values, handleChange, handleReset} = useForm({email:"", password:""});

  return (
    <>
    <h3>Inicia Sesion</h3>
     <form action="">
        <input type="text" name="Nombre de usuario" placeholder="Ingresa tu correo" value={values.email} /><br />
        <input type="text" name="Contraseña" placeholder="Ingresa tu contraseña" value={values.password} /><br />
        <button id="SendButton" type="submit" onClick={(event)=>console.log("Formulario enviado")}>Enviar Datos</button>
    </form>
    </>
  )
}
