import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={360}
    viewBox="0 0 400 460"
    backgroundColor="#d6d6d6"
    foregroundColor="#e5e5e5"
  >
    <circle cx="23" cy="303" r="22" />
    <rect x="53" y="280" rx="2" ry="2" width="296" height="10" />
    <rect x="61" y="302" rx="2" ry="2" width="140" height="10" />
    <rect x="0" y="60" rx="2" ry="2" width="400" height="208" />
    <rect x="335" y="385" rx="28" ry="28" width="0" height="1" />
  </ContentLoader>
);

export default MyLoader;
