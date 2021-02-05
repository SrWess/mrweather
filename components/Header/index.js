import ButtonSearch from "../ButtonSearch";
import styles from "../Header/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
        <p className={styles.title}>MR Weather</p>
      </div>

      <ButtonSearch/>
    </header>
  );
}
