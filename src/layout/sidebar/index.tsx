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
} from "../../components/icons";

const Sidebar = (): JSX.Element => {
  return (
    <div className={`${styles.sidebar}`}>
      <div className="cursor-pointer mt-2 mb-5 px-3"></div>
      <LogoInstagram></LogoInstagram>
      <NavItem
        icon={<IconHome></IconHome>}
        activeIcon={<IconHomeActive></IconHomeActive>}
        title="Home"
        isActive={true}
        onClick={(): void => {
          console.log("home");
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
        isActive={false}
        onClick={(): void => {
          console.log("home search");
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
        isActive={false}
        onClick={(): void => {
          console.log("home search");
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
        activeIcon={<IconNotificationActive></IconNotificationActive>}
        title="Create"
        isActive={false}
        onClick={(): void => {
          console.log("home search");
        }}
      ></NavItem>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
