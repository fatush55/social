// Action
import { actionsDialog } from "../actions/dialog-action"
// Thunk
import { submitMessage } from "./dialog-thunk"


const dispatchMock = jest.fn()
const stateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    stateMock.mockClear()
})

test('submit message', () => {
    const thunk = submitMessage(10, 'hello')

    thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsDialog.submitMessage(10, 'hello'))
})