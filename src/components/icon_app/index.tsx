import React from "react";

const IconApp = ({
  icon,
  onClick,
  className
}: {
  icon: JSX.Element;
  onClick: () => void;
  className ?: string
}): JSX.Element => {
  return <div className={`p-2 cursor-pointer ${className}`} onClick={onClick}>
    {icon}
  </div>;
};

export default IconApp;
