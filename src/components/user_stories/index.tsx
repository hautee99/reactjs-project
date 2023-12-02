import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { listStories } from "../common/list_stories";
import UserAvatarStory from "../user_avatar_story";

const UserStories = (): JSX.Element => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(ref);
  return (
    <div
      className=" flex flex-row items-center overflow-x-hidden"
      {...events}
      ref={ref}
    >
      {listStories.map((item, index) => {
        return (
          <div
            className="py-4 px-[6px] first:pl-3 last:pr-6 flex flex-col justify-center items-center mx-1 my-2 cursor-pointer"
            key={index}
          >
            <UserAvatarStory
              url={item.avatar}
              size={56}
              haveSeenBefore={item.haveSeenBefore}
            ></UserAvatarStory>
            <p
              className="text-ellipsis overflow-hidden max-w-[74px] text-xs mt-1 mx-2"
              style={{ color: item.haveSeenBefore ? "grey" : "black" }}
            >
              {item.userName}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default UserStories;
