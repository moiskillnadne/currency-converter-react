import { useState } from "react"


export const useInputState = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  return {
    value, setValue, error, setError
  }
}