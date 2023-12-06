import React from "react";
import styles from "./styles.module.css";
import UserAvatarStory from "../user_avatar_story";
import IconApp from "../icon_app";
import {
  IconComment,
  IconEmoji,
  IconLike,
  IconMore,
  IconSave,
  IconShare,
} from "../icons";
import { Post } from "../common/models";
import { currentUser } from "../common/data/current_user";

const PostItem = ({ post }: { post: Post }): JSX.Element => {
  return (
    <div className="bg-white mt-4 rounded-lg border-[1px]">
      <div className="flex flex-grow my-2 items-center pl-3">
        <UserAvatarStory
          url={post.user.avatar}
          size={32}
          haveSeenBefore={false}
        ></UserAvatarStory>
        <div className="flex flex-col grow mx-2 ">
          <p className="text-sm font-semibold">{post.user.userName}</p>
        </div>
        <IconApp
          icon={<IconMore></IconMore>}
          onClick={function (): void {}}
        ></IconApp>
      </div>
      <img
        className="max-h-[30rem] w-full"
        src={post.images}
        alt=""
        draggable={false}
      ></img>
      <div className="flex flex-row m-1">
        <IconApp
          icon={<IconLike></IconLike>}
          onClick={function (): void {}}
        ></IconApp>
        <IconApp
          icon={<IconComment></IconComment>}
          onClick={function (): void {}}
        ></IconApp>
        <IconApp
          icon={<IconShare></IconShare>}
          onClick={function (): void {}}
        ></IconApp>
        <div className="grow">
          <IconApp
            className="float-right"
            icon={<IconSave></IconSave>}
            onClick={function (): void {}}
          ></IconApp>
        </div>
      </div>
      {post.isLiked ? (
        <div>
          <p className="text-sm ml-3">
            Like by {" "}
            <span className="font-semibold">
              {currentUser.userName} {""} <span> and {""}</span>
            </span>{" "}
            <span className="font-semibold">{post.totalLike - 1} others</span>
          </p>
        </div>
      ) : (
        <span className="font-semibold">{post.totalLike} like</span>
      )}
      <div className="mx-3 my-2">
        <p className="text-sm">
          <span className="font-semibold">
            {post.user.userName} {""}{" "}
          </span>
          {post.description}
        </p>
      </div>
      <div className="mx-3 my-2">
        <p className="text-sm font-medium text-secondary-text">
          View all {post.totalComment} comment
        </p>
      </div>
      <div className="mx-3 my-2 flex flex-grow items-center">
        <div className="w-full">
          <textarea
            placeholder="Add a comment..."
            className="w-full border-none focus:outline-none focus:border-transparent color max-h-[40px] text-sm"
            autoComplete="off"
            autoCorrect="off"
          ></textarea>
        </div>
        <IconApp
          icon={<IconEmoji></IconEmoji>}
          onClick={function (): void {}}
        ></IconApp>
      </div>
    </div>
  );
};

export default PostItem;
