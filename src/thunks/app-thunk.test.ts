// Action
import { actionsApp } from "../actions/app-action"
// Thunk
import { setCurrentProfile, cycleAlert, setHiddenAlert, setInitialize } from "./app-thunk"
import { getAuth } from "./auth-thunk"
// Type
import { HiddenAlertType, AlertType } from "../types/app-reducet-type"


const dispatchMock = jest.fn()
const stateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    stateMock.mockClear()
})

test('initialize', async () => {
    const thunk =  setInitialize()

    await thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(2)
    // expect(dispatchMock).toHaveBeenNthCalledWith(1, getAuth())
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actionsApp.triggerInitialize())
})

test('set current profile id', () => {
    const id = 10
    const thunk =  setCurrentProfile(id)

    thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsApp.setCurrentProfile(id))
})

test('action alert', () => {
    const action: HiddenAlertType = "hide"
    const thunk =  setHiddenAlert(action)

    thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsApp.setHiddenAlert(action))
})

test('cycle alert',  () => {
    const message: AlertType = {
        type: "success",
        message: 'very well'
    }
    const thunk =  cycleAlert(message)

    thunk(dispatchMock, stateMock, undefined)

    setTimeout(() => {
        expect(dispatchMock).toBeCalledTimes(4)
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsApp.setAlert(message))
        expect(dispatchMock).toHaveBeenNthCalledWith(2, actionsApp.setHiddenAlert('show'))
        expect(dispatchMock).toHaveBeenNthCalledWith(3, actionsApp.setHiddenAlert('hide'))
        expect(dispatchMock).toHaveBeenNthCalledWith(4, actionsApp.setAlert(null))
    }, 0)
})