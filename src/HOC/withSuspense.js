// Root
import React, { Suspense } from "react"
// Components
import { Loader } from "../commons/loader/Loader"

export const withSuspense = (Component) => {
    return (
        <Suspense fallback={<Loader/>}>
            <Component />
        </Suspense>
    )
}
