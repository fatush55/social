// Type
import { RootState } from "../store"


// Casual selectors
export const getProfile = (store: RootState) => store.profilePage.profile
export const getStatus = (store: RootState) => store.profilePage.status
export const getIsLoading = (store: RootState) => store.profilePage.isLoading
export const getComments = (store: RootState) => store.profilePage.comments
export const getStatusUpdateProfile = (store: RootState) => store.profilePage.statusUpdateProfile

// Reselect