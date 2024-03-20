import React from 'react';

export class ProfileStatus extends React.Component {

    state = {
        editMode: false
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
    }

    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>}
                </div>
                <div>
                    {this.state.editMode && <input
                        autoFocus={true}
                        onBlur={this.deactiveEditMode.bind(this)} value={this.props.status}/>}
                </div>
            </>
        );
    }
};