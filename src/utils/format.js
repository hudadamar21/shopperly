export const formatPrice = (price) => {
  let currencyNumber = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  });
  return currencyNumber.format(price)
}

export const formatSold = (sold) => {
  if (sold >= 1000000){
    let resultSold = (sold / 1000000) + 'jt' // 1jt , 1.5jt
    return resultSold
  } else if (sold >= 1000) {
    let resultSold = (sold / 1000) + 'rb' // 1rb , 1.5rb
    return resultSold
  } else {
    return sold
  }
}