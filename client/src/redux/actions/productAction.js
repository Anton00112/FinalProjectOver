export const getProducts = (data) => {
    return {
        type: 'GET_PRODUCTS',
        payload: data
    }
}
export const saveProductAction = (data) => {
    return {
        type: 'SAVE_PRODUCT',
        payload: data
    }
}

export const getTotalPrice = (price) => {
    return {
        type: "GET_TOTAL_PRICE",
        payload: price
    }
}
export const editProduct = (product, editProductClicked) => {
    return {
        type: "EDIT_PRODUCT",
        product,
        editProductClicked
    }
}

export const editProductClicked = (editProductClicked) => {
    return {
        type: "EDIT_PRODUCT_CLICKED",
        editProductClicked
    }
}
export const expensesClicked = (expensesClicked) => {
    return {
        type: "EXPENSES_CLICKED",
        expensesClicked
    }
}
export const deleteProduct = (_id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: _id
    }
}
export const tableUpdated = (tableUpdated) => {
    return {
        type: "TABLE_UPDATED",
        tableUpdated
    }
}

