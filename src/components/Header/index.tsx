import styles from "./styles.module.css";
import Logo from "../../assets/logo.svg";

const Header = () => (
  <header className={styles.header}>
    <img src={Logo} alt="logo" />
  </header>
);

export { Header };
