import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material"

export const WishCard = ({title, initialPrice, priceInfo}) => {
  return (
    <Box>
      <Card sx={{ maxWidth: 345, minWidth: 250 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Цена: ${initialPrice}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {priceInfo}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}