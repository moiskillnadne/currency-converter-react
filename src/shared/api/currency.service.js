import { Environment } from '../util'

const createCurrencyService = () => {
  return {
    getCurrency() {
      return fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${import.meta.env[Environment.CURRENCY_API_KEY]}`)
        .then(response => response.json())
    }
  }
}

export const currencyService = createCurrencyService()
