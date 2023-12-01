import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Sidebar from "../../layout/sidebar";
import { useNavigate } from "react-router-dom";

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
      <div>Main / Layout/ Content</div>
    </div>
  );
};

export default RootPage;
