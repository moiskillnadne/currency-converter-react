import { Box } from "@mui/material"

import { WishCard } from "./WishCard"
import { convertCurrency } from "../../../shared/util"

export const Wishlist = ({currencyRate, items }) => {

  return (
    <Box display="flex" justifyContent="flex-start" flexWrap="wrap" gap={2}>
      {items && items.map((item, index) => {
        const result = convertCurrency(item.countCurrency, currencyRate[item.from], currencyRate[item.to])

        return (
          <WishCard 
            key={`${index}-${item.from}-${item.countCurrency}`}
            title={item.wishName}
            initialPrice={`${item.countCurrency} ${item.from}`}
            priceInfo={`${item.countCurrency} ${item.from} = ${result.toFixed(3)} ${item.to}`} />
        )
      })}
    </Box>
  )
}