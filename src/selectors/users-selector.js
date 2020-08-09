// Casual selectors
export const getUser = (store) => store.userPage.users
export const getFollowProgress = (store) => store.userPage.followProgress
export const getCurrentPage = (store) => store.userPage.currentPage
export const getSizePage = (store) => store.userPage.sizePage
export const getTotalUsers = (store) => store.userPage.totalUsers
export const getIsLoading = (store) => store.userPage.isLoading

// Reselect