import { useCallback, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material"

import { ModalBase } from "../../shared/ui"
import { currencyService } from "../../shared/api"
import { useInputState } from "../../shared/util"
import { ConvertForm } from "../../features/ConvertForm"
import { mapCurrencyRatesToLabelValue } from "../../entities/currency"
import { useWishlistState } from "../../entities/wish/lib/useWishlistState"
import { Wishlist } from "../../entities/wish/ui/Wishlist"

export const WishlistWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {value, setValue, error, setError} = useInputState()
  const { wishlist, saveItem } = useWishlistState()

  const { isLoading, data: currencyRate } = useQuery({ queryKey: ['currencyRate'], queryFn: currencyService.getCurrency, select: (data) => data.data })

  const onSubmit = useCallback((data) => {
    if(!value) {
      return setError(true)
    }

    saveItem({
      ...data,
      wishName: value
    })
    return setIsOpen(false)
  }, [saveItem, setError, value])

  const onAddWishClick = () => {
    setIsOpen(true)
  }

  const onValueChange = (e) => {
    const targetValue = e.target.value

    if(targetValue) {
      setError(false)
    }
    
    return setValue(e.target.value)
  }

  if(isLoading) {
    return (
      <CircularProgress />
    )
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4">Список желаний</Typography>
      <Button variant="outlined" color="primary" onClick={onAddWishClick}>Добавить желание</Button>

      <Box padding="16px">
        <Wishlist currencyRate={currencyRate} items={wishlist}/>
      </Box>

      <ModalBase
        title="Опишите ваше желание"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box display="flex" flexDirection="column" alignItems="center" padding={2} gap={2}>
          <TextField
            label="Название мечты"
            type="text"
            value={value}
            autoComplete="off"
            onChange={onValueChange}
            sx={{ width: '200px' }}
            error={error}
            helperText={error ? 'Обязательное поле' : ''}
          />
          <ConvertForm onSubmit={onSubmit} currencyList={mapCurrencyRatesToLabelValue(currencyRate)} buttonLabel="Сохранить" />
        </Box>
      </ModalBase>
    </Box>
  )
}