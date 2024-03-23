export const addcartItem = (product) => {
    return {
        type : "ADDCARTITEM",
        payload : product
    }
}

export const delcartItem = (product) => {
    return {
        type : "DELCARTITEM",
        payload : product
    }
}
export const addwishItem = (product) => {
    return {
        type : "ADDWISHITEM",
        payload : product
    }
}

export const delwishItem = (product) => {
    return {
        type : "DELWISHITEM",
        payload : product
    }
}