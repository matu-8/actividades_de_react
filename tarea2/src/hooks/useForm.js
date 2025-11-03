import { useState } from "react"

export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue)
    const {email, password} = values;

    const handleChange = () => {

    }
    const handleReset = ()=>{
    }
  return{
    values,
    handleChange,
    handleReset
  }
}
