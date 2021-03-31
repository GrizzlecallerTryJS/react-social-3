import React from "react";
import style from "./FormControl.module.css";

export const TextArea = React.forwardRef((props, ref) => {
  let hasError = undefined;
  if (props.errors) {
    hasError = props.errors.message;
  }

  return (
    <div className={`${style.formControl} ${style.error}`}>
      <div>
        <textarea {...props} ref={ref} />
      </div>
      <span>{hasError}</span>
    </div>
  );
});
