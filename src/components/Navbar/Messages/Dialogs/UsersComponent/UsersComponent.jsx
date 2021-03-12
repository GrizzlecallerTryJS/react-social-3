import React from "react";

import UsersItemComponent from "./UsersItemComponent/UsersItemComponent";

const UsersComponent = (props) => {
  return props.users.map((i) => {
    return <UsersItemComponent id={i.id} name={i.name} key={i.id} />;
  });
};

export default UsersComponent;
