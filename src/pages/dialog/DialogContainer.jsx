// Root
import React, { memo } from "react"
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux"
// HOC
import { withAuthRedirect } from "../../HOC/withAuthRedirect"
// Reducer
import { submitMessage } from "../../reducer/dialog-reducer"
// Selector
import { getUsers, getMessages } from "../../selectors/dialog-selector"
// Components
import { Dialog } from "./Dialog"

const DialogWrapperContainer =  memo((props) => <Dialog {...props} />)

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        messages: getMessages(state),
    }
}

const DialogContainer = compose(
    withRouter,
    connect(mapStateToProps, {submitMessage}),
    withAuthRedirect,
)(DialogWrapperContainer)

export default DialogContainer
