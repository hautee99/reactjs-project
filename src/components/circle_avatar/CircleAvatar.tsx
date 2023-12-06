import React from "react";

const CircleAvatar
 = ({
  url,
  size,
  onClick,
}: {
  url: string;
  size: number;
  onClick: () => void;
}): JSX.Element => {
  return (
    <div>
      <img
        src={url}
        style={{ width: `${size}px`, height: `${size}px` }}
        alt=""
        onClick={onClick}
        className="rounded-full border-[1px] max-w-none"
      ></img>
    </div>
  );
};

export default CircleAvatar
;
