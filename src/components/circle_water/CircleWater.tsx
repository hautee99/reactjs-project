import React from "react";

const CircleWater = ({
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
        src=""
        style={{ width: `${size}px`, height: `${size}px` }}
        alt=""
        onClick={onClick}
        className="rounded-full border-[1px]"
      ></img>
    </div>
  );
};

export default CircleWater;
