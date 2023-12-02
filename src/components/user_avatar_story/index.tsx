import React from "react";
import styles from "./styles.module.css";
import CircleAvatar from "../circle_avatar/CircleAvatar";

const UserAvatarStory = ({
  url,
  size,
  haveSeenBefore,
}: {
  url: string;
  size: number;
  haveSeenBefore: boolean;
}): JSX.Element => {
  return (
    <div>
      <div
        className={
          !haveSeenBefore
            ? "rounded-full p-[2px] bg-gradient-to-tr from-amber-500 to-fuchsia-600"
            : "border-[1px] rounded-full mt-[2px]"
        }
      >
        <div className="bg-white rounded-full p-[2px]">
          <CircleAvatar
            url={url}
            size={size}
            onClick={function (): void {}}
          ></CircleAvatar>
        </div>
      </div>
    </div>
  );
};

export default UserAvatarStory;
