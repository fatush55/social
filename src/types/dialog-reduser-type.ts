export type MessagesProfileType = {
    id: string
    isGust: boolean
    body: string
    time: string
    check: boolean
}

export type MessageType = {
    id: number
    messages: Array<MessagesProfileType>
}

export type UsersDialogType = {
    id: number
    img: {url: string, alt: string}
    name: string
    message: number
}

export type commentValue = {
    message: string
    id: number
}