import React from "react";

const Container = ({ as: Tag = "div", className = "", children, ...props }) => (
  <Tag className={`mn-container ${className}`.trim()} {...props}>
    {children}
  </Tag>
);

export default Container;
