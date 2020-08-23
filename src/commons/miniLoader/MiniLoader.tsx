// Root
import React from "react"
// Style
import style from "./MiniLoader.module.css"
// Assets
import miniLoader from "../../assets/img/mini-loader.svg"


export const MiniLoader = () => {
    return (
        <div className={style.root}>
            <img src={miniLoader} alt=""/>
        </div>
    )
}
