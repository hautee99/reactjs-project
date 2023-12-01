import React from "react";

const IconProfile = ({
  url,
  size,
  isActive,
}: {
  url: string;
  size: number;
  isActive: boolean
}): JSX.Element => {
  return (
    <div>
      <img
        src={url}
        style={{ width: `${size}px`, height: `${size}px`, border: isActive ? '2px solid #000' : 'none' }}
        alt=""
        className="rounded-full"
      ></img>
    </div>
  );
};

export default IconProfile;
