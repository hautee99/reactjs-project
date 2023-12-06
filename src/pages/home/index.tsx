import React from "react";
import styles from "./styles.module.css";
import UserStories from "../../components/user_stories";
import PostItem from "../../components/post-item";
import { listPost } from "../../components/common/data/list_posts";

const HomePage = ({}): JSX.Element => {
  return (
    <div className={`flex flex-grow justify-center`}>
      <div className={`${styles.container_feed}`}>
        <div className="mt-6 bg-white border-[1px] rounded-lg flex flex-row justify-center">
           <UserStories></UserStories>
        </div>
        {listPost && listPost.map((e) => <PostItem post={e} key={e.id}></PostItem>)}
      </div>
      <div className={`${styles.suggestions}`}>Div Right</div>
    </div>
  );
};

export default HomePage;
