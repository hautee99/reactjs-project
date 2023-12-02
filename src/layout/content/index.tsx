import React, { ReactNode } from "react";
import styles from "./styles.module.css";

const Content = ( {children} : {children : ReactNode} ): JSX.Element => {
  return (
    <div className={`${styles.content}`}>
      {children}
    </div>
  );
};

export default Content;
