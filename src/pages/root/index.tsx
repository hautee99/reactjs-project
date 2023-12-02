import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Sidebar from "../../layout/sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import Content from "../../layout/content";

const RootPage = ({}): JSX.Element => {
  const navigate = useNavigate();
  const [tabActive, setTabActive] = useState<string>("");
  const handleNavigate = useCallback(
    (url: string) => navigate(url, { replace: true }),
    [navigate]
  );
  useEffect(() => {
    handleNavigate(tabActive);
  }, [handleNavigate, tabActive]);
  const handleTabActive = (tab: string) => {
    setTabActive(tab);
  };
  return (
    <div className={`${styles.layout}`}>
      <Sidebar onClickTab={handleTabActive} tabActive={tabActive}></Sidebar>
      <Content><Outlet></Outlet></Content>
    </div>
  );
};

export default RootPage;
