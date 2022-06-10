import React from "react";
import "./Socail.css";
const SocialLink = ({ url }) => {
    return React.createElement("a", { href: url, className: "facebook" });
};
export default SocialLink;
