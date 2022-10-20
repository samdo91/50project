import React, { useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { ProductList } from "../../store/Context";
import style from "./ItemDetailpage.module.css"
export const ItemDetailpage = () => {
    const products = useContext(ProductList)
    const params = useParams()
    const itemNumber = Number(params.itemNumber)
    const item = products[itemNumber]




    return (<div className={style.itemStyle} >
        <Link className={style.backMain} to={"/"}> perfume</Link>
        <img src={item.img}></img>
        <ul>
            <li>  {item.name}</li>
            <li> {`Volume:  ${item.Volume}`}</li>
            <li>  {`price: ${item.price}`} </li>
            <li> {`information: ${item.information}`}</li>
        </ul >
        <button> 장바구니 </button>
        <button> 바로구매 </button>


    </div>)
}