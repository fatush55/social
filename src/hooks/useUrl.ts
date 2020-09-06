import {useHistory, useRouteMatch} from "react-router-dom";
import {parse, stringify} from "query-string";
import {useCallback} from "react";
//

type ArgType = {
    title: string,
    value: string | number | boolean
}
type ArgumentsType = Array<ArgType>

type ReturnType = [string, () => void]

export const useUrl = (arg: ArgumentsType): ReturnType => {
    const history = useHistory();
    const match = useRouteMatch()

    const parsed = parse('', {
        parseBooleans: true,
        parseNumbers: true,
    })

    arg.forEach(elem => {
        if (elem.value) parsed[elem.title as keyof ArgType] = elem.value
    })

    const urlArg = stringify(parsed, {
        encode: false,
        strict: true,
    })

    const url = urlArg ? `${match.path}?${urlArg}` : match.path
    const handlerUrl = useCallback (() => {
        history.push(url)
    }, [history, url])

    return [url, handlerUrl]
}
