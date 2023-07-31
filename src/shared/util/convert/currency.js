export const convertCurrency = (amount, rateFrom, rateTo) => {
  const amountNumber = Number(amount)
  const rateFromNumber = Number(rateFrom)
  const rateToNumber = Number(rateTo)

  if (isNaN(amountNumber) || isNaN(rateFromNumber) || isNaN(rateToNumber)) {
    return -1;
  }

  return amount * (rateTo / rateFrom);
}