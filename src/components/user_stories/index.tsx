import React from "react";
import styles from "./styles.module.css";
import { listStories } from "../common/list_stories";
import UserAvatarStory from "../user_avatar_story";

const UserStories = (): JSX.Element => {
  return (
    <div className="mx-2 flex flex-row justify-center items-center">
      {listStories.map((item, index) => {
        return (
          <div
            className="flex flex-col justify-center items-center mx-1 my-2 cursor-pointer"
            key={index}
          >
            <UserAvatarStory
              url={item.avatar}
              size={56}
              haveSeenBefore={item.haveSeenBefore}
            ></UserAvatarStory>
            <p className="text-ellipsis overflow-hidden max-w-[74px] text-xs mt-1 mx-2" style={{color: item.haveSeenBefore ? "grey" : "black"}}>{item.userName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserStories;
