import React, { useState, useCallback, ChangeEvent, useRef } from "react";

const SocialLink = ({ url }: { url: string }) => {
  return (
    <a href={url} className="facebook">
      Facebook
    </a>
  );
};

export default SocialLink;
