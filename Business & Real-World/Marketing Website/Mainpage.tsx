import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailpage } from "./Board/Item/ItemDetailpage";
import { MarketingWebsite } from "./MarketingWebsite";
import { ProductListData } from "./store/ProductList";


export const MainPage = () => {

    return (
        <ProductListData>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<MarketingWebsite />} />
                    <Route path=":itemNumber" element={<ItemDetailpage />} />
                </Routes>
            </BrowserRouter>
        </ProductListData>)


}