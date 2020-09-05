// Action
import { actionsAuth } from "../actions/auth-action"
// Api
import { authApi } from "../api/auth-api"
import { profileApi } from "../api/profile-api"
import { securityApi } from "../api/security-api"
// Thunk
import { getAuth, login , logout , setMyPhoto } from "./auth-thunk"
import {ResponseApiType, ResponseResultCodeForCaptchaType, ResponseResultCodeType} from "../api/api"
import {AuthMeType, LoginValue} from "../types/auth-reducer-type";
import {PhotosType, ProfileType} from "../types/types";


jest.mock('../api/auth-api')
jest.mock('../api/profile-api')
jest.mock('../api/security-api')

const dispatchMock = jest.fn()
const stateMock = jest.fn()

const authApiMock = authApi as jest.Mocked<typeof authApi>
const profileApiMock = profileApi as jest.Mocked<typeof profileApi>
const securityApiMock = securityApi as jest.Mocked<typeof securityApi>


beforeEach(() => {
    dispatchMock.mockClear()
    stateMock.mockClear()
    profileApiMock.getProfile.mockClear()
    authApiMock.getMe.mockClear()
    authApiMock.login.mockClear()
    authApiMock.logout.mockClear()
    securityApiMock.getCaptcha.mockClear()
})


const responseGetMe: ResponseApiType<AuthMeType> = {
    data: {
        id: 10,
        email: 'test@gmail.com',
        login: 'fatush',
    },
    resultCode: ResponseResultCodeType.success,
    messages: [],
}

const responseLoginSuccess: ResponseApiType<{}, ResponseResultCodeForCaptchaType> = {
    data: {},
    resultCode: ResponseResultCodeType.success,
    messages: [],
}

const responseLoginCaptcha: ResponseApiType<{}, ResponseResultCodeForCaptchaType> = {
    data: {},
    resultCode: ResponseResultCodeForCaptchaType.isCaptcha,
    messages: [],
}

const responseLogout: ResponseApiType = {
    data: {},
    resultCode: ResponseResultCodeType.success,
    messages: [],
}

const photos: PhotosType = {
    small: null,
    large: null,
}

const responseProfile: ProfileType = {
    userId: 10,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: 'fatysh',
    aboutMe: 'zz',
    contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: '',
    },
    photos,
}

const requestLogin: LoginValue = {
    email: 'test@gmail.com',
    password: '123',
    rememberMy: true,
    captcha: '',
}

profileApiMock.getProfile.mockResolvedValue(Promise.resolve(responseProfile))
authApiMock.getMe.mockResolvedValue(Promise.resolve(responseGetMe))
authApiMock.login.mockResolvedValue(Promise.resolve(responseLoginSuccess))
authApiMock.logout.mockResolvedValue(Promise.resolve(responseLogout))

test('get auth', async () => {
    const thunk = getAuth()

    await thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsAuth.setMyProfile(responseGetMe.data))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actionsAuth.triggerIsAuth(true))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actionsAuth.setMyPhoto(photos))
})

test('success login', async () => {
    const thunk = login(requestLogin)

    await thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(2)
    // expect(dispatchMock).toHaveBeenNthCalledWith(1, getAuth())
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actionsAuth.setCaptcha(''))
})


test('warning captcha login', async () => {
    authApiMock.login.mockResolvedValue(Promise.resolve(responseLoginCaptcha))
    securityApiMock.getCaptcha.mockResolvedValue(Promise.resolve({url: 'default'}))

    const thunk = login(requestLogin)

    await thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsAuth.setCaptcha('default'))
})

test('success logout', async () => {
    const thunk = logout()

    await thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsAuth.setLogOut())
})

test('success set my photo', () => {
    const thunk = setMyPhoto(photos)

    thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsAuth.setMyPhoto(photos))
})
