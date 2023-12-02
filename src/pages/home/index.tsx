import React from "react";
import styles from "./styles.module.css";
import UserStories from "../../components/user_stories";

const HomePage = ({}): JSX.Element => {
  return (
    <div className={`flex flex-grow justify-center`}>
      <div className={`${styles.container_feed}`}>
        <div className="mt-6 bg-white border-[1px] rounded-lg flex flex-row items-center">
           <UserStories></UserStories>
        </div>
      </div>
      <div className={`${styles.suggestions}`}>Div Right</div>
    </div>
  );
};

export default HomePage;
