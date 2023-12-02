import React from "react";
import styles from "./styles.module.css";
import { LogoInstagram } from "../../components/image";
import NavItem from "../../components/nav-item";
import {
  IconHome,
  IconHomeActive,
  IconSearch,
  IconSearchActive,
  IconDiscover,
  IconDiscoverActive,
  IconReels,
  IconReelsActive,
  IconMessage,
  IconMessageActive,
  IconNotification,
  IconNotificationActive,
  IconCreate,
  IconCreateActive,
  IconMenu,
  IconMenuActive,
} from "../../components/icons";
import IconProfile from "../../components/menu_profile";

const Sidebar = ({tabActive, onClickTab} : {tabActive: string, onClickTab: (s : string) => void}): JSX.Element => {
  return (
    <div className={`${styles.sidebar}`}>
      <div className="cursor-pointer mb-2 mt-5 px-3 pb-4">
        <LogoInstagram></LogoInstagram>
      </div>
      <div className="grow">
        <NavItem
          icon={<IconHome></IconHome>}
          activeIcon={<IconHomeActive></IconHomeActive>}
          title="Home"
          isActive={tabActive === "home"}
          onClick={(): void => {
            onClickTab("home");
          }}
        ></NavItem>
        <NavItem
          icon={<IconSearch></IconSearch>}
          activeIcon={<IconSearchActive></IconSearchActive>}
          title="Search"
          isActive={false}
          onClick={(): void => {
            console.log("home search");
          }}
        ></NavItem>
        <NavItem
          icon={<IconDiscover></IconDiscover>}
          activeIcon={<IconDiscoverActive></IconDiscoverActive>}
          title="Discover"
          isActive={tabActive === "discover"}
          onClick={(): void => {
            onClickTab("discover");
          }}
        ></NavItem>
        <NavItem
          icon={<IconReels></IconReels>}
          activeIcon={<IconReelsActive></IconReelsActive>}
          title="Reels"
          isActive={false}
          onClick={(): void => {
            console.log("home search");
          }}
        ></NavItem>
        <NavItem
          icon={<IconMessage></IconMessage>}
          activeIcon={<IconMessageActive></IconMessageActive>}
          title="Message"
          isActive={tabActive === "message"}
          onClick={(): void => {
            onClickTab("message");
          }}
        ></NavItem>
        <NavItem
          icon={<IconNotification></IconNotification>}
          activeIcon={<IconNotificationActive></IconNotificationActive>}
          title="Notifications"
          isActive={false}
          onClick={(): void => {
            console.log("home search");
          }}
        ></NavItem>
        <NavItem
          icon={<IconCreate></IconCreate>}
          activeIcon={<IconCreateActive></IconCreateActive>}
          title="Create"
          isActive={false}
          onClick={(): void => {
            console.log("home search");
          }}
        ></NavItem>
        <NavItem
          icon={
            <IconProfile
              url={
                "https://www.tuoitrephuyen.vn/uploads/news/2021_06/132678754558106001_1_9.jpg"
              }
              size={24}
              isActive={false}
            ></IconProfile>
          }
          activeIcon={
            <IconProfile
              url={
                "https://www.tuoitrephuyen.vn/uploads/news/2021_06/132678754558106001_1_9.jpg"
              }
              size={24}
              isActive={true}
            ></IconProfile>
          }
          title="Profile"
          isActive={tabActive === "profile"}
          onClick={(): void => {
            onClickTab("profile");
          }}
        ></NavItem>
      </div>
      <div className="mb-4">
          <NavItem
            icon={<IconMenu></IconMenu>}
            activeIcon={<IconMenuActive></IconMenuActive>}
            title="Menu"
            isActive={false}
            onClick={(): void => {
              console.log("home search");
            }}
          ></NavItem>
        </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
