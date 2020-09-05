// Root
import React, {ComponentType, Suspense} from "react"
// Components
import { Loader } from "../commons/loader/Loader"

export const withSuspense = <T extends {}>(Component: ComponentType<T>) => {
    return (props: T) => {
        return (
            <Suspense fallback={<Loader/>}>
                <Component {...props} />
            </Suspense>
        )
    }
}
