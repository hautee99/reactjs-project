import React from "react";
import styles from "./styles.module.css";

const NavItem = ({
  icon,
  activeIcon,
  title,
  isActive,
  onClick,
}: {
  icon: JSX.Element;
  activeIcon: JSX.Element;
  title: string;
  isActive: boolean;
  onClick: () => void;
}): JSX.Element => {
  return (
    <div className={`${styles.nav_item}`} onClick={onClick}>
      {isActive ? activeIcon : icon}
      <p
        className="text-base pl-4"
        style={{ fontWeight: isActive ? "600" : "normal" }}
      >
        {title}
      </p>
    </div>
  );
};

export default NavItem;
