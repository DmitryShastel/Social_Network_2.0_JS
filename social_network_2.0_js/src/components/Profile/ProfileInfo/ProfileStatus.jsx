import React from 'react';

export class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activeEditMode}>{this.props.status || '----'}</span>}
                </div>
                <div>
                    {this.state.editMode &&
                        <input
                            onChange={this.onChangeStatus}
                            autoFocus={true}
                            onBlur={this.deactiveEditMode}
                            value={this.state.status}/>}
                </div>
            </>
        );
    }
};