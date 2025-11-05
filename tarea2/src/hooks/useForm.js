import { useState } from "react";

export const useForm = (initialValue) => {
  const [formState, setState] = useState(initialValue);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...formState,
      [name]: value,
    });
  };
  const handleSubmit = (event, onLogin) => {
    event.preventDefault();
   onLogin(formState.username)
  };
  const handleReset = () => {
    setState(initialValue);
  };

  return {
    formState,
    handleChange,
    handleSubmit,
    handleReset,
  };
};
