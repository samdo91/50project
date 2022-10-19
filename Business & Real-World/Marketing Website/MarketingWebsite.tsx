import React from "react";
import { TitleComp } from "./Title/TitleComp";
import style from "./MarketingWebsite.module.css"
import { BoardComp } from "./Board/BoardComp";
import { EventTextComp } from "./Board/EventText/EventTextComp";



export const MarketingWebsite = () => {

    return (<div className={style.MarketingWebsiteCss}>
        <h1>Marketing Website</h1>
    
        <TitleComp/>
        <EventTextComp />
        <BoardComp/>
      
    </div>)
}
