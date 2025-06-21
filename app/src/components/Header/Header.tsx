import { useNavigate } from "react-router-dom";

import { HEADER_TITLE } from "../../lib/consts";
import styles from "./Header.module.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <h1
        className={styles.title}
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        {HEADER_TITLE}
      </h1>
    </header>
  );
};
