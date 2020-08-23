// Root
import React from "react"
// Style
import style from "./initializeLoading.module.css"
// Assets
import initializeLoader from "../../assets/img/initialize-loader.svg"


export const InitializeLoading = () => {
    return (
        <div className={style.root}>
            <img src={initializeLoader} alt="loader"/>
        </div>
    )
}
