import React from 'react';

export class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activeMode() {
        this.setState({
            editMode: true
        })
    }

    deactiveMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activeMode.bind(this)}>{this.props.status}</span>}
                </div>
                <div>
                    {this.state.editMode && <input
                        autoFocus={true}
                        onBlur={this.deactiveMode.bind(this)} value={this.props.status}/>}
                </div>
            </>
        );
    }
};