export type AlertType = {
    type: 'success'| 'warning'| 'error'
    message: string
}

export type HiddenAlertType =  null | 'show' | 'hide'