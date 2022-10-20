import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailpage } from "./Board/Item/ItemDetailpage";
import { MarketingWebsite } from "./MarketingWebsite";
import { Context } from "./store/Context";


export const MainPage = () => {

    return (
        <Context>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<MarketingWebsite />} />
                    <Route path=":itemNumber" element={<ItemDetailpage />} />
                </Routes>
            </BrowserRouter>
        </Context>)


}