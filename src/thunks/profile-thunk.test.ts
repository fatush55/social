// Action
import { actionsProfile } from "../actions/profile-action"
// Api
import { profileApi } from "../api/profile-api"
// Thunk
import { updateStatus, createComment, requestProfile, requestStatus, requestUpdatePhotos, requestUpdateProfile } from "./profile-thunk"
import { cycleAlert, setCurrentProfile } from "./app-thunk"
// Type
import { ResponseApiType, ResponseResultCodeType } from "../api/api"
import { PhotosType, ProfileType } from "../types/types"


jest.mock('../api/profile-api')

const profileApiMock = profileApi as jest.Mocked<typeof profileApi>
const dispatchMock = jest.fn()
const stateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    stateMock.mockClear()
    profileApiMock.getStatus.mockClear()
    profileApiMock.getProfile.mockClear()
    profileApiMock.updateStatus.mockClear()
    profileApiMock.updateProfile.mockClear()
    profileApiMock.updatePhotos.mockClear()
})

const responseStatus: string = 'hello'

const profile: Omit<ProfileType, 'photos'> = {
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
}

const photo: PhotosType = {
    small: null,
    large: null,
}


const responseProfile: ProfileType = {
    ...profile,
    ...photo,
}

const responseUpdatePhoto: ResponseApiType<{photos: PhotosType}> = {
    resultCode: ResponseResultCodeType.success,
    data: {photos: photo},
    messages: [],
}

const responseUpdateStatus: ResponseApiType = {
    resultCode: ResponseResultCodeType.success,
    data: {},
    messages: [],
}

const responseUpdateProfile = responseUpdateStatus

profileApiMock.getProfile.mockResolvedValue(Promise.resolve(responseProfile))
profileApiMock.getStatus.mockResolvedValue(Promise.resolve(responseStatus))
profileApiMock.updateProfile.mockResolvedValue(Promise.resolve(responseUpdateProfile))
profileApiMock.updateStatus.mockResolvedValue(Promise.resolve(responseUpdateStatus))
profileApiMock.updatePhotos.mockResolvedValue(Promise.resolve(responseUpdatePhoto))

test('create comment thunk', () => {
    const thunk = createComment('hello', 'default.jpg')

    thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsProfile.addComment('hello', 'default.jpg'))
})

test('profile thunk', async() => {
    const thunk = requestProfile(10)

    await thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(4)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsProfile.triggerLoading(true))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actionsProfile.setProfile(responseProfile))
    // expect(dispatchMock).toHaveBeenNthCalledWith(3, setCurrentProfile(10))
    expect(dispatchMock).toHaveBeenNthCalledWith(4, actionsProfile.triggerLoading(false))
})

test('status thunk', async() => {
    const thunk = requestStatus(10)

    await thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsProfile.setStatus(responseStatus))

})

test('update status thunk', async () => {
    const thunk = updateStatus('new status')

    await thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(2)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsProfile.setStatus('new status'))
})

test('update profile thunk', async() => {
    const thunk = requestUpdateProfile(responseProfile)

    await thunk(dispatchMock, stateMock, undefined)

    expect(dispatchMock).toBeCalledTimes(4)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsProfile.triggerStatusUpdateProfile(false))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actionsProfile.setProfile(responseProfile))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actionsProfile.triggerStatusUpdateProfile(true))
    // expect(dispatchMock).toHaveBeenNthCalledWith(4, cycleAlert({message: 'successful update ProfileContainer', type: 'success'}))
})

