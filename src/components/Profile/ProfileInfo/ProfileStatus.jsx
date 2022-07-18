import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState(({
            editMode: true
        }))
    }

    deactivateEditMode = () => {
        this.setState(({
            editMode: false
        }))
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

        console.log('componentDidUpdate');
    }


    render() {

        return (

            <div style={{marginLeft: 10}}>
                {this.state.editMode

                    ? <div>
                        <input onChange={this.onStatusChange}
                               onBlur={this.deactivateEditMode}
                               autoFocus={true}
                               type="text" value={this.state.status}/>
                    </div>

                    : <div className={classes.statusContainer}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----" }</span>
                    </div>
                }
            </div>
        );
    }
};

export default ProfileStatus;