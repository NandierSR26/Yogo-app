
export const fixProductPrice = ( price = '' ) => {
    let fixedPrice
    fixedPrice = price.replace("$", "")
    fixedPrice = fixedPrice.replace(".", "")
    
    return parseInt(fixedPrice)
}