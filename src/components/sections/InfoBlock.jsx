import React from "react";
import { Eyebrow } from "../ui";

/** InfoBlock — labelled block of contact information. size: "md" | "lg" for the content text. */
const InfoBlock = ({ label, size = "md", children }) => (
  <div className={`mn-info mn-info--${size}`}>
    <Eyebrow>{label}</Eyebrow>
    <div className="mn-info__content">{children}</div>
  </div>
);

export default InfoBlock;
