export const addToCard = book => ({
    type:"ADD_TO_CART",
    payload:book
})

export const removeFromCard = id => ({
    type:"REMOVE_FROM_CART",
    payload:id
})