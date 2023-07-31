export function mapCurrencyRatesToLabelValue(rates) {
  return Object.keys(rates).map((currency) => ({
    value: currency,
    label: currency
  }))
}