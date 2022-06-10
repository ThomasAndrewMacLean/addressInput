import React, { useState, useCallback, ChangeEvent, useRef } from "react";

import "./Socail.css";

const SocialLink = ({ url }: { url: string }) => {
  return <a href={url} className="facebook"></a>;
};

export default SocialLink;
