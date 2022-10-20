import { createContext, Dispatch, useReducer } from "react"

import { cartListReducer } from "./cartListReducer"
import { tcartAction, tcartState, tProductList, tProducts } from "./interfaces "
import { Product } from "./productLIst"




export const ProductList = createContext<tProducts[]>([])
const cartLisContext = createContext<tcartState |[]>([])
const CartListDispatchContext = createContext<Dispatch<tcartAction> | null>(null)


export const Context= (props: tProductList) => {

    const [cartList, CartListDispatch] = useReducer(cartListReducer, { cartList :[]} )

   

    return (<ProductList.Provider value={Product}>
        <cartLisContext.Provider value={cartList}>
            <CartListDispatchContext.Provider value={CartListDispatch}>
                {props.children}
            </CartListDispatchContext.Provider>
        </cartLisContext.Provider>
    </ProductList.Provider>)
}

