// Type
import { RootState } from "../store"


// Casual selectors
export const getMessages = (store: RootState) => store.dialogPage.messages
export const getUsers = (store: RootState) => store.dialogPage.users

// Reselect