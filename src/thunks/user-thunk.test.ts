// Actions
import { actionsUser } from "../actions/user-action"
// Thunk
import { setFollow, editCurrencyPage, requestUsers } from "./user-thunk"

// Api
import { userApi } from "../api/user-api"
// Type
import { ResponseApiType, ResponseResultCodeType, ResponseItemApiType } from "../api/api"
import { UsersType } from "../types/types"


jest.mock('../api/user-api')

const userApiMock = userApi as jest.Mocked<typeof userApi>
const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    userApiMock.setFollowed.mockClear()
})

const resultFollowed: ResponseApiType = {
    resultCode: ResponseResultCodeType.success,
    data: {},
    messages: [],
}

const resultUsers: ResponseItemApiType<UsersType> = {
    items:[
        {
            id: 1,
            name: 'fatush_1',
            status: '',
            photos: {small: null, large: null},
            followed: false,
        },
        {
            id: 2,
            name: 'fatush_2',
            status: '',
            photos: {small: null, large: null},
            followed: true,
        }
    ],
    totalCount: 2,
    error: '',
}

const initialState = {
    users: [
        {
            name: 'fatush_1',
            id: 1,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        },
        {
            name: 'fatush_2',
            id: 2,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: null,
            followed: false
        },
        {
            name: 'fatush_3',
            id: 3,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: '',
            followed: true
        },
        {
            name: 'fatush_4',
            id: 4,
            uniqueUrlName: null,
            photos: {
                small: null,
                large: null
            },
            status: '',
            followed: true
        }
    ] as Array<UsersType>
}

userApiMock.setFollowed.mockResolvedValue(Promise.resolve(resultFollowed))
userApiMock.getUsers.mockResolvedValue(Promise.resolve(resultUsers))

test('success fallowed users thunk', async () => {
    const thunk = setFollow(2, initialState.users)

    await thunk(dispatchMock, getStateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsUser.triggerFollowProgress(2, true))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actionsUser.fallowUser(2))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actionsUser.triggerFollowProgress(2, false))
})

test('success currency page thunk', () => {
    const thunk = editCurrencyPage(1)

    thunk(dispatchMock, getStateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsUser.setCurrencyPage(1))
})

test('success user thunk', async () => {
    const thunk = requestUsers(1, 10)

    await thunk(dispatchMock, getStateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(4)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsUser.triggerLoading(true))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actionsUser.setUsers(resultUsers.items))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actionsUser.setTotalUsers(resultUsers.totalCount))
    expect(dispatchMock).toHaveBeenNthCalledWith(4, actionsUser.triggerLoading(false))
})