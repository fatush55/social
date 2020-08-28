// Action
import { actionsDialog } from "../actions/dialog-action"
// Type
import { RootThunkCreatorType } from "../store"
import { ActionReducerType }  from "../reducers/dialog-reducer"


type ThunkCreatorType = RootThunkCreatorType<ActionReducerType>

export const submitMessage = (id: number, message: string): ThunkCreatorType => (dispatch) => {
    dispatch(actionsDialog.submitMessage(id,message))
}
