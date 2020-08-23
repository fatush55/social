// Root
import React from "react"
// Style
import style from "./Loader.module.css"
// Assets
import loader from "../../assets/img/loader.svg"


export const Loader = () => {

    return (
        <div className={style.root}>
            <img src={loader} alt="loader"/>
        </div>
    )
}
