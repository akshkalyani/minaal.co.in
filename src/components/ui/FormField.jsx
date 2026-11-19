import React from "react";
import { ChevronDown } from "./Icons";

/**
 * FormField — labelled input, select or textarea.
 * Any extra props are forwarded to the control. `children` are the <option>s for a select.
 */
const FormField = ({
  id,
  label,
  as = "input",
  required = false,
  className = "",
  error,
  children,
  ...props
}) => {
  const Control = as;
  return (
    <div className={`mn-field ${className}`.trim()}>
      <label htmlFor={id} className="mn-field__label">
        {label}
        {required && " *"}
      </label>
      <div className={`mn-field__control mn-field__control--${as}`}>
        <Control id={id} name={id} required={required} {...props}>
          {children}
        </Control>
        {as === "select" && <ChevronDown className="mn-field__chevron" />}
      </div>
      {error}
    </div>
  );
};

export default FormField;
