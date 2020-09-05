// Type
import { RootState } from "../store"


// Casual selectors
export const getUser = (store: RootState) => store.userPage.users
export const getFollowProgress = (store: RootState) => store.userPage.followProgress
export const getCurrentPage = (store: RootState) => store.userPage.currentPage
export const getSizePage = (store: RootState) => store.userPage.sizePage
export const getTotalUsers = (store: RootState) => store.userPage.totalUsers
export const getSearchUsers = (store: RootState) => store.userPage.searchUser
export const getIsLoading = (store: RootState) => store.userPage.isLoading

// Reselect