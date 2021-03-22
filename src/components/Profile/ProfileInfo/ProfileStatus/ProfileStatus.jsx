import React from "react";

class ProfileStatus extends React.Component {
  state = {
    changeProfileStatus: false,
  };

  activateEditMode = () => {
    this.setState({
      changeProfileStatus: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      changeProfileStatus: false,
    });
  };

  render() {
    if (this.props.profileStatus) {
      if (this.state.changeProfileStatus) {
        return (
          <div>
            <textarea
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              value={this.props.profileStatus}
            ></textarea>
          </div>
        );
      } else {
        return (
          <div>
            <div onDoubleClick={this.activateEditMode}>
              {this.props.profileStatus}
            </div>
          </div>
        );
      }
    } else {
      if (this.state.changeProfileStatus) {
        return (
          <div>
            <textarea
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              value="user status is empty edit"
            ></textarea>
          </div>
        );
      } else {
        return (
          <div>
            <div onDoubleClick={this.activateEditMode}>
              {`user status is empty`}
            </div>
          </div>
        );
      }
    }
  }
}

export default ProfileStatus;
