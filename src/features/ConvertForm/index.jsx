import Button from "@mui/material/Button";
import { Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { CurrencySelector } from "./CurrencySelector";

// currencyList: Array<string>
// onSubmit: (data) => void
// buttonLabel: string

export const ConvertForm = ({ currencyList, onSubmit, buttonLabel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" gap={2} alignItems="center" sx={{ width: "200px" }}>
        <TextField
          {...register('countCurrency', { required: true })}
          label="Сумма"
          type="number"
          sx={{ width: '100%' }}
          error={errors['countCurrency']}
          helperText={errors['countCurrency'] ? 'Обязательное поле' : ''}
        />
        <CurrencySelector register={{...register('from')}} label="Из" currencyList={currencyList} />
        <CurrencySelector register={{...register('to')}} label="В" currencyList={currencyList} />


        <Button type="submit" variant="outlined">{buttonLabel}</Button>
      </Box>
    </form>
  )
}