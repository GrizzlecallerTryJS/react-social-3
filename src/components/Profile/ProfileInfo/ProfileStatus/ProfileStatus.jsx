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
          <span onDoubleClick={this.activateEditMode}>
            {!this.props.profileStatus ? "------" : this.props.profileStatus}
          </span>
        </div>
      );
    }
  }
}

export default ProfileStatus;
