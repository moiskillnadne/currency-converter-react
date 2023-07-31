import { Container } from '@mui/material'

import { CurrencyConverter } from '../../widgets/CurrencyConverter'
import { WishlistWidget } from '../../widgets/Wishlist'


export const MainPage = () => {
  return (
    <Container>
      <CurrencyConverter />
      <WishlistWidget />
    </Container>
  )
}