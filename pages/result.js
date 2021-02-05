import Header from "../components/Header";

import styles from "../styles/home.module.css";

export default function Result() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <section className={styles.ResultTemp}>
          <h1>Result Temp</h1>
        </section>

        <div className={styles.containerDetails}>
          <section className={styles.detailsWeather}>
            <h1>Details Weather</h1>
          </section>
          <section className={styles.detailsAir}>
            <h1>Details Air</h1>
          </section>
        </div>
      </div>
    </>
  );
}
