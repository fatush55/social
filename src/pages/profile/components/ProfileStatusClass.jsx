// Root
import React, { Component } from "react"
// Style
import style from "./ProfileStatus.module.css"


export class ProfileStatus  extends Component {
    state = {
        editMode: false,
        status: this.props.status ? this.props.status : ''
    }

    triggerStatus = () => {
        if (this.state.status.length && this.state.editMode) {
            this.props.upDateStatus(this.state.status)
        }

        this.setState({
            editMode: !this.state.editMode
        })
    }

    handlerChangeStatus = (event) => {
        this.setState({
            status: event.target.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {
                    this.state.editMode
                        ?
                            <textarea
                                className={style.rootAria}
                                onBlur={this.triggerStatus}
                                autoFocus
                                onChange={this.handlerChangeStatus}
                                defaultValue={this.state.status}
                            />
                        :
                            <div className={style.root} onDoubleClick={this.triggerStatus}>
                                <span>{this.props.status ? this.props.status : 'not found...'}</span>
                            </div>
                }
            </>
        )
    }
}
