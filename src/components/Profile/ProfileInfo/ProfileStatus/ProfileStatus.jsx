import React from "react";

class ProfileStatus extends React.Component {
  state = {
    changeProfileStatus: false,
    newStatusText: this.props.profileStatus,
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
    this.props.setUserProfileStatusText(this.state.newStatusText);
  };

  onChange = (e) => {
    this.setState({
      newStatusText: e.currentTarget.value,
    });
  };

  render() {
    if (this.props.profileStatus) {
      if (this.state.changeProfileStatus) {
        return (
          <div>
            <textarea
              onChange={this.onChange}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              value={this.state.newStatusText}
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
              onChange={this.onChange}
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
